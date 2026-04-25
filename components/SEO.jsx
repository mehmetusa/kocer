// components/SEO.jsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { siteConfig } from '../data/siteContent';

export default function SEO({
  title,
  description,
  slug = '',
  image = '/favicon.ico',
  type = 'website',
  sku,
  price,
  currency = 'EUR',
  inStock = true,
}) {
  const router = useRouter();
  const baseUrl = siteConfig.siteUrl;

  const defaultTitle = siteConfig.legalName;
  const defaultDescription =
    'Mehrsprachiger Rohr-, Kanal- und Pumpservice in Deutschland fur Absaugung, Inspektionen, Reparaturen und Hochdruckspulung.';

  const seoTitle = title || defaultTitle;
  const seoDescription = (description || defaultDescription).slice(0, 155);

  const autoSlug = slug || router.asPath.replace(/^\//, '');
  const url = autoSlug ? `${baseUrl}/${autoSlug}` : baseUrl;

  let jsonLd = null;
  if (type === 'product') {
    jsonLd = {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: seoTitle,
      image: image,
      description: seoDescription,
      sku: sku || 'N/A',
      offers: {
        '@type': 'Offer',
        url: url,
        priceCurrency: currency,
        price: price || 0,
        availability: inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      },
    };
  } else if (type === 'service') {
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: seoTitle,
      provider: {
        '@type': 'Plumber',
        name: siteConfig.legalName,
        areaServed: siteConfig.serviceArea,
        telephone: siteConfig.phone,
      },
      description: seoDescription,
      areaServed: siteConfig.serviceArea,
      url,
    };
  } else if (type === 'article') {
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: seoTitle,
      description: seoDescription,
      image: image,
      mainEntityOfPage: url,
      author: {
        '@type': 'Organization',
        name: siteConfig.legalName,
      },
    };
  } else {
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Plumber',
      name: siteConfig.legalName,
      url: baseUrl,
      description: seoDescription,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      areaServed: siteConfig.serviceArea,
    };
  }

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head>
  );
}
