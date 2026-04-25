import Link from 'next/link';
import { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaArrowRight,
  FaPhoneAlt,
} from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteContent';

const Navbar = () => {
  const { language, setLanguage, supportedLanguages, copy } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { href: '/services', label: copy.nav.services },
    { href: '/testimonials', label: copy.nav.references },
    { href: '/about', label: copy.nav.about },
    { href: '/contact', label: copy.nav.contact },
  ];

  const handleLinkClick = () => {
    setDrawerOpen(false);
  };

  return (
    <nav className={styles.container}>
      <button
        type="button"
        className={styles.mobileMenuIcon}
        onClick={() => setDrawerOpen(true)}
        aria-label="Open menu"
      >
        <FaBars size={36} color="#333" />
      </button>

      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo} onClick={handleLinkClick}>
          <span className={styles.logoMark}>KR</span>
          <span className={styles.logoText}>
            <strong>Kocer Rohrtechnik</strong>
            <span>Deutschland</span>
          </span>
        </Link>
      </div>

      <ul className={styles.desktopLinks}>
        {menuItems.map((item) => (
          <li key={item.href} className={styles.linkItem}>
            <Link href={item.href} className={styles.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.rightIcons}>
        <div className={styles.languageSwitcher} aria-label="Language switcher">
          {supportedLanguages.map((option) => (
            <button
              key={option.code}
              type="button"
              className={`${styles.languageButton} ${
                language === option.code ? styles.languageButtonActive : ''
              }`}
              onClick={() => setLanguage(option.code)}
            >
              {option.shortLabel}
            </button>
          ))}
        </div>

        <a href={`tel:${siteConfig.emergencyPhone}`} className={styles.ctaLink}>
          <FaPhoneAlt />
          <span>{copy.nav.emergency}</span>
          <FaArrowRight />
        </a>
      </div>

      <div
        className={`${styles.overlay} ${drawerOpen ? styles.active : ''}`}
        onClick={() => setDrawerOpen(false)}
      />

      <ul className={`${styles.mobileDrawer} ${drawerOpen ? styles.open : ''}`}>
        <li className={styles.mobileDrawerHeader}>
          <div className={styles.mobileBrand}>
            <span className={styles.logoMark}>KR</span>
            <span className={styles.mobileBrandText}>
              <strong>Kocer Rohrtechnik</strong>
              <span>Deutschland</span>
            </span>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={26} />
          </button>
        </li>

        {menuItems.map((item) => (
          <li key={item.href} className={styles.linkItem} onClick={handleLinkClick}>
            <Link href={item.href} className={styles.link}>
              {item.label}
            </Link>
          </li>
        ))}

        <li className={styles.mobileLanguages}>
          {supportedLanguages.map((option) => (
            <button
              key={option.code}
              type="button"
              className={`${styles.languageButton} ${
                language === option.code ? styles.languageButtonActive : ''
              }`}
              onClick={() => setLanguage(option.code)}
            >
              {option.label}
            </button>
          ))}
        </li>

        <li className={styles.mobileCta}>
          <a href={`tel:${siteConfig.emergencyPhone}`} className={styles.ctaLink}>
            <FaPhoneAlt />
            <span>{copy.nav.emergency}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
