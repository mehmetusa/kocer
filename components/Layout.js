import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteContent';

const Layout = ({ children, title, description, structuredData }) => {
  const { language, copy } = useLanguage();
  const siteUrl = siteConfig.siteUrl;
  const seoTitle = title || copy.seo.defaultTitle;
  const seoDescription = description || copy.seo.defaultDescription;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteConfig.legalName,
    image: `${siteUrl}${siteConfig.logoPath}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: siteConfig.serviceArea,
    telephone: siteConfig.phone,
    url: siteUrl,
    email: siteConfig.email,
    availableLanguage: ['de', 'tr', 'en'],
  };

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta httpEquiv="content-language" content={language} />

        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`${siteUrl}${siteConfig.logoPath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${siteUrl}${siteConfig.logoPath}`} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData || defaultStructuredData),
          }}
        />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
