import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import {
  FaArrowUp,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedCategories, siteConfig } from '../data/siteContent';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const { copy, language } = useLanguage();
  const categories = getLocalizedCategories(language).filter((category) => category.key !== 'all');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowButton(true);
      else setShowButton(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  const navigationItems = [
    { href: '/services', label: copy.nav.services },
    { href: '/testimonials', label: copy.nav.references },
    { href: '/about', label: copy.nav.about },
    { href: '/contact', label: copy.nav.contact },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: siteConfig.legalName,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: siteConfig.serviceArea,
    availableLanguage: ['de', 'tr', 'en'],
  };

  return (
    <footer className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.brandPanel}>
          <div className={styles.brandLogoWrap}>
            <Image
              src={siteConfig.logoPath}
              alt={siteConfig.name}
              width={260}
              height={78}
              className={styles.brandLogo}
            />
          </div>
          <p className={styles.eyebrow}>{siteConfig.name}</p>
          <h2 className={styles.brandTitle}>{copy.home.coverageEyebrow}</h2>
          <p className={styles.brandText}>{copy.footer.blurb}</p>
          <p className={styles.brandNote}>{copy.footer.note}</p>
        </div>

        <div className={styles.linkPanel}>
          <h2 className={styles.cardTitle}>{copy.footer.navigation}</h2>
          <div className={styles.links}>
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.linkPanel}>
          <h2 className={styles.cardTitle}>{copy.footer.services}</h2>
          <div className={styles.links}>
            {categories.map((item) => (
              <Link key={item.key} href={`/services?category=${item.key}`} className={styles.link}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.contactPanel}>
          <h2 className={styles.cardTitle}>{copy.footer.contact}</h2>
          <div className={styles.card}>
            <h3 className={styles.title}>
              <FaPhoneAlt className={styles.inlineIcon} />
              {copy.common.emergencyLine}
            </h3>
            <a href={`tel:${siteConfig.emergencyPhone}`} className={styles.textLink}>
              {siteConfig.emergencyPhone}
            </a>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>
              <FaEnvelope className={styles.inlineIcon} />
              {copy.contact.cards[2].title}
            </h3>
            <a href={`mailto:${siteConfig.email}`} className={styles.textLink}>
              {siteConfig.email}
            </a>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>
              <FaMapMarkerAlt className={styles.inlineIcon} />
              {copy.common.coverage}
            </h3>
            <p className={styles.text}>{siteConfig.serviceArea}</p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>
              <FaClock className={styles.inlineIcon} />
              {copy.common.serviceHours}
            </h3>
            <p className={styles.text}>{copy.common.serviceHoursValue}</p>
          </div>
        </div>
      </div>

      <div className={styles.bottomStrip}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <p>
          © {new Date().getFullYear()} {siteConfig.legalName}. {copy.footer.rights}
        </p>
        <p>{siteConfig.serviceArea}</p>
      </div>

      {showButton && (
        <button
          className={styles.scrollTop}
          onClick={scrollToTop}
          aria-label={copy.common.scrollTop}
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
