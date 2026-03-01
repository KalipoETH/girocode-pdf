import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: 'https://www.girocodegenerator.com',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.girocodegenerator.com/wissen/girocode',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.girocodegenerator.com/wissen/epc-standard',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.girocodegenerator.com/wissen/iban-bic',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.girocodegenerator.com/wissen/betrag-und-zweck',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.girocodegenerator.com/wissen/rechnung',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.girocodegenerator.com/wissen/banking-apps',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.girocodegenerator.com/wissen/scannen',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.girocodegenerator.com/ueber-uns',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: 'https://www.girocodegenerator.com/fuer-entwickler',
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.girocodegenerator.com/impressum',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.girocodegenerator.com/datenschutz',
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}

