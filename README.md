# GiroCode Generator

> SEPA-QR/EPC generator that runs locally and embeds codes into PDF invoices.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](#license)
[![Deploy on Vercel](https://img.shields.io/badge/Deploy%20on-Vercel-black.svg)](#)

Live demo: [https://www.girocodegenerator.com](https://www.girocodegenerator.com)

![Demo GIF placeholder](assets/demo.gif)

## Features
- Create SEPA/EPC compliant GiroCode QR codes.
- Works completely in the browser; no server storage.
- Export invoices as PDFs with embedded QR codes.
- Offline-ready and easily deployable.

## Tech
- Pure HTML and JavaScript.
- No backend; data stays in the user's browser.

## Quickstart
```bash
# Fork the repo on GitHub
 git clone https://github.com/<your-name>/girocode-pdf.git
 cd girocode-pdf

# Deploy to Vercel (requires Vercel CLI)
 vercel deploy
```

## Folder structure
```
.
├─ index.html
├─ vendor/
└─ wissen/
   └─ ...
```

## License
Released under the [MIT License](#).

