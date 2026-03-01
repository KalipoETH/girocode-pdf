type RGB = {
  red: number;
  green: number;
  blue: number;
};

// A4 im Punktformat laut Vorgabe
export const A4_WIDTH = 595.28;
export const A4_HEIGHT = 841.89;

export interface InvoiceData {
  invoiceNumber: string;
  invoiceDate: string; // ISO-String oder lesbares Datum, wird 1:1 gesetzt
  sender: string;
  recipient: string;
  description: string;
  netAmount: number;
  vatRate: number; // z. B. 19 für 19 %
  qrPngDataUrl: string; // data:image/png;base64,...
  logoBytes?: Uint8Array; // optionales Logo (PNG oder JPG)
  logoMimeType?: 'image/png' | 'image/jpeg';
}

// Standardfarben
const COLOR_TEXT: RGB = { red: 0.91, green: 0.92, blue: 0.94 }; // #e8eaf0
const COLOR_MUTED: RGB = { red: 0.55, green: 0.56, blue: 0.63 }; // #8b90a0
const COLOR_ACCENT: RGB = { red: 0.13, green: 0.77, blue: 0.37 }; // #22c55e

/**
 * Erzeugt eine Rechnungs-PDF (DIN A4) und gibt sie als Uint8Array zurück.
 *
 * - Header mit "Rechnung", Rechnungs-Nr. und Datum
 * - Logo oben rechts (120 px breit, falls vorhanden)
 * - Absender und Empfänger in zwei Spalten
 * - Leistungsbeschreibung
 * - Betragsbox mit Netto, USt, Brutto (Brutto fett / hervorgehoben)
 * - QR-Code (160x160) unten rechts
 * - Fußzeile mit Hinweis auf lokale Erstellung
 */
export async function makePDF(data: InvoiceData): Promise<Uint8Array> {
  const pdfLib = await import('pdf-lib');
  const { PDFDocument, StandardFonts, rgb } = pdfLib;

  const doc = await PDFDocument.create();
  const page = doc.addPage([A4_WIDTH, A4_HEIGHT]);

  const margin = 50;
  const contentWidth = A4_WIDTH - margin * 2;

  // Hintergrund leicht abdunkeln, um dem Dark-UI-Thema zu entsprechen
  page.drawRectangle({
    x: 0,
    y: 0,
    width: A4_WIDTH,
    height: A4_HEIGHT,
    color: rgb(11 / 255, 12 / 255, 16 / 255),
  });

  const helvetica = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);

  let cursorY = A4_HEIGHT - margin;

  // HEADER: Titel + Rechnungsdaten links
  const titleSize = 20;
  page.drawText('Rechnung', {
    x: margin,
    y: cursorY,
    size: titleSize,
    font: helveticaBold,
    color: rgb(1, 1, 1),
  });

  const metaSize = 10;
  const metaY = cursorY - titleSize - 6;
  page.drawText(`Rechnungs-Nr.: ${data.invoiceNumber}`, {
    x: margin,
    y: metaY,
    size: metaSize,
    font: helvetica,
    color: rgb(COLOR_TEXT.red, COLOR_TEXT.green, COLOR_TEXT.blue),
  });

  page.drawText(`Datum: ${data.invoiceDate}`, {
    x: margin,
    y: metaY - metaSize - 2,
    size: metaSize,
    font: helvetica,
    color: rgb(COLOR_TEXT.red, COLOR_TEXT.green, COLOR_TEXT.blue),
  });

  // LOGO oben rechts (falls vorhanden)
  if (data.logoBytes && data.logoBytes.length > 0) {
    try {
      const logoImage =
        data.logoMimeType === 'image/jpeg'
          ? await doc.embedJpg(data.logoBytes)
          : await doc.embedPng(data.logoBytes);

      const logoWidthPx = 120;
      const scale = logoWidthPx / logoImage.width;
      const logoHeight = logoImage.height * scale;

      page.drawImage(logoImage, {
        x: A4_WIDTH - margin - logoWidthPx,
        y: cursorY - logoHeight + 5,
        width: logoWidthPx,
        height: logoHeight,
      });
    } catch {
      // Fehler beim Logo-Einbetten werden bewusst ignoriert, PDF wird trotzdem erzeugt.
    }
  }

  cursorY = metaY - metaSize - 16;

  // Trennlinie
  page.drawLine({
    start: { x: margin, y: cursorY },
    end: { x: A4_WIDTH - margin, y: cursorY },
    thickness: 1,
    color: rgb(0.2, 0.22, 0.28),
  });

  cursorY -= 24;

  // ABSENDER & EMPFÄNGER (zwei Spalten)
  const columnWidth = contentWidth / 2 - 10;
  const senderX = margin;
  const recipientX = margin + columnWidth + 20;

  const senderLabel = 'Absender';
  const recipientLabel = 'Empfänger';

  page.drawText(senderLabel, {
    x: senderX,
    y: cursorY,
    size: 10,
    font: helveticaBold,
    color: rgb(COLOR_MUTED.red, COLOR_MUTED.green, COLOR_MUTED.blue),
  });
  page.drawText(recipientLabel, {
    x: recipientX,
    y: cursorY,
    size: 10,
    font: helveticaBold,
    color: rgb(COLOR_MUTED.red, COLOR_MUTED.green, COLOR_MUTED.blue),
  });

  const textStartY = cursorY - 14;

  const wrapText = (text: string, maxWidth: number, size: number) => {
    const words = text.split(/\s+/);
    const lines: string[] = [];
    let current = '';

    for (const word of words) {
      const test = current ? `${current} ${word}` : word;
      const width = helvetica.widthOfTextAtSize(test, size);
      if (width > maxWidth && current) {
        lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
    return lines;
  };

  const senderLines = wrapText(data.sender || '', columnWidth, 10);
  const recipientLines = wrapText(data.recipient || '', columnWidth, 10);

  let senderY = textStartY;
  for (const line of senderLines) {
    page.drawText(line, {
      x: senderX,
      y: senderY,
      size: 10,
      font: helvetica,
      color: rgb(COLOR_TEXT.red, COLOR_TEXT.green, COLOR_TEXT.blue),
    });
    senderY -= 12;
  }

  let recipientY = textStartY;
  for (const line of recipientLines) {
    page.drawText(line, {
      x: recipientX,
      y: recipientY,
      size: 10,
      font: helvetica,
      color: rgb(COLOR_TEXT.red, COLOR_TEXT.green, COLOR_TEXT.blue),
    });
    recipientY -= 12;
  }

  cursorY = Math.min(senderY, recipientY) - 28;

  // LEISTUNGSBESCHREIBUNG
  page.drawText('Leistungsbeschreibung', {
    x: margin,
    y: cursorY,
    size: 11,
    font: helveticaBold,
    color: rgb(COLOR_MUTED.red, COLOR_MUTED.green, COLOR_MUTED.blue),
  });

  cursorY -= 16;

  const descriptionLines = wrapText(data.description || '', contentWidth, 10);
  for (const line of descriptionLines) {
    page.drawText(line, {
      x: margin,
      y: cursorY,
      size: 10,
      font: helvetica,
      color: rgb(COLOR_TEXT.red, COLOR_TEXT.green, COLOR_TEXT.blue),
    });
    cursorY -= 12;
  }

  cursorY -= 24;

  // BETRAGSKASTEN
  const net = data.netAmount;
  const vatAmount = Math.round((net * data.vatRate) * 100) / 100 / 100;
  const gross = net + vatAmount;

  const boxWidth = 220;
  const boxHeight = 80;
  const boxX = margin;
  const boxY = cursorY - boxHeight;

  page.drawRectangle({
    x: boxX,
    y: boxY,
    width: boxWidth,
    height: boxHeight,
    color: rgb(0.08, 0.09, 0.12),
    borderColor: rgb(0.2, 0.22, 0.28),
    borderWidth: 1,
  });

  const rowYStart = boxY + boxHeight - 18;

  const formatAmount = (value: number) =>
    `${value.toFixed(2).replace('.', ',')} €`;

  const labelSize = 9;
  const valueSize = 11;

  // Netto
  page.drawText('Netto', {
    x: boxX + 10,
    y: rowYStart,
    size: labelSize,
    font: helvetica,
    color: rgb(COLOR_MUTED.red, COLOR_MUTED.green, COLOR_MUTED.blue),
  });
  page.drawText(formatAmount(net), {
    x: boxX + boxWidth - 10 - helvetica.widthOfTextAtSize(formatAmount(net), valueSize),
    y: rowYStart,
    size: valueSize,
    font: helvetica,
    color: rgb(COLOR_TEXT.red, COLOR_TEXT.green, COLOR_TEXT.blue),
  });

  // USt
  const vatLabel = `USt (${data.vatRate.toFixed(2).replace('.', ',')} %)`;
  const vatY = rowYStart - 18;
  page.drawText(vatLabel, {
    x: boxX + 10,
    y: vatY,
    size: labelSize,
    font: helvetica,
    color: rgb(COLOR_MUTED.red, COLOR_MUTED.green, COLOR_MUTED.blue),
  });
  page.drawText(formatAmount(vatAmount), {
    x: boxX + boxWidth - 10 - helvetica.widthOfTextAtSize(formatAmount(vatAmount), valueSize),
    y: vatY,
    size: valueSize,
    font: helvetica,
    color: rgb(COLOR_TEXT.red, COLOR_TEXT.green, COLOR_TEXT.blue),
  });

  // Brutto (fett / hervorgehoben)
  const grossY = vatY - 20;
  const grossLabel = 'Brutto gesamt';
  const grossValue = formatAmount(gross);

  page.drawText(grossLabel, {
    x: boxX + 10,
    y: grossY,
    size: labelSize + 1,
    font: helveticaBold,
    color: rgb(COLOR_ACCENT.red, COLOR_ACCENT.green, COLOR_ACCENT.blue),
  });
  page.drawText(grossValue, {
    x: boxX + boxWidth - 10 - helveticaBold.widthOfTextAtSize(grossValue, valueSize + 1),
    y: grossY,
    size: valueSize + 1,
    font: helveticaBold,
    color: rgb(COLOR_ACCENT.red, COLOR_ACCENT.green, COLOR_ACCENT.blue),
  });

  // QR-CODE unten rechts
  try {
    const qrData = data.qrPngDataUrl;
    const qrBase64 = qrData.split(',')[1];
    const qrBytes = Uint8Array.from(atob(qrBase64), (c) => c.charCodeAt(0));
    const qrImage = await doc.embedPng(qrBytes);

    const qrSize = 160;
    const qrX = A4_WIDTH - margin - qrSize;
    const qrY = margin + 40;

    page.drawImage(qrImage, {
      x: qrX,
      y: qrY,
      width: qrSize,
      height: qrSize,
    });
  } catch {
    // Wenn der QR-Code nicht eingebettet werden kann, wird er einfach ausgelassen.
  }

  // FUSSZEILE
  const footerText = 'Erstellt lokal im Browser · keine Datenübertragung';
  page.drawText(footerText, {
    x: margin,
    y: margin - 4,
    size: 8,
    font: helvetica,
    color: rgb(COLOR_MUTED.red, COLOR_MUTED.green, COLOR_MUTED.blue),
  });

  const pdfBytes = await doc.save();
  return pdfBytes;
}

