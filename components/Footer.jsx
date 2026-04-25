import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import {
  FaInfoCircle,
  FaWarehouse,
  FaSitemap,
  FaShieldAlt,
  FaFileContract,
  FaShippingFast,
  FaBoxOpen,
  FaConciergeBell,
  FaEnvelope,
  FaUser,
  FaUserShield,
  FaSignInAlt,
  FaSignOutAlt,
  FaShoppingCart,
} from 'react-icons/fa';

const Footer = () => {
  const [showButton, setShowButton] = useState(false);
  const { data: session, status } = useSession();
  const quantity = useSelector((state) => state.cart.quantity);

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

  // Navbar-style menu items
  const navbarItems = [
    { href: '/products', icon: <FaBoxOpen />, label: 'Services' },
    { href: '/contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  if (status === 'authenticated') {
    if (session?.user?.role === 'admin')
      navbarItems.push({ href: '/admin', icon: <FaUserShield />, label: 'Admin' });
    else if (session?.user?.role === 'user')
      navbarItems.push({ href: '/user', icon: <FaUser />, label: 'Account' });

    navbarItems.push({
      href: '#logout',
      icon: <FaSignOutAlt />,
      label: 'Logout',
      action: () => signOut({ callbackUrl: '/' }),
    });
  } else {
    navbarItems.push({ href: '/login', icon: <FaSignInAlt />, label: 'Login' });
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': '',
    name: 'NOVA Septic Pumping ',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3548 Finish Line Dr',
      addressLocality: 'Gainesville',
      addressRegion: 'VA',
      postalCode: '20155',
      addressCountry: 'US',
    },
    telephone: '(571) 279-0444',
    servesCuisine: 'Turkish',
    hasMenu: 'https://www.novasepticpumping.com/menu',
    sameAs: [
      'https://instagram.com/novasepticpumping',
      'https://facebook.com',
      'https://youtube.com/@novasepticpumping',
    ]
  };

  return (
    <footer className={styles.container}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className={styles.topSection}>
        {/* Left: Motto + Certifications */}
        <div className={styles.left}>
          <div className={styles.bgImage}></div>
          <div className={styles.linksCard}>
            <h2 className={styles.motto}>
            We Handle the Dirty Work. <br /> NOVA’s Trusted Septic Professionals.!
            </h2>
 
          </div>
        </div>

        {/* Middle: Navbar Items */}
        <div className={styles.middle}>
          <h2 className={styles.cardTitle}>Navigation</h2>
          <div className={styles.links}>
            {navbarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.link}
                onClick={() => item.action && item.action()}
              >
                {item.icon} {item.label}
              </Link>
            ))}
            {/* Cart link */}
            <Link href="/cart" className={styles.link}>
              <FaShoppingCart className={styles.icon} /> Cart
              {quantity > 0 && <span className={styles.counter}>({quantity})</span>}
            </Link>
          </div>
        </div>

        {/* Right: Quick Links */}
        <div className={styles.right}>
          <h2 className={styles.cardTitle}>Quick Links</h2>
          <div className={styles.links}>
            <a href="/about">
              <FaInfoCircle className={styles.icon} /> About Us
            </a>
            <a href="/sitemap">
              <FaSitemap className={styles.icon} /> Sitemap
            </a>
            <a href="/privacy-policy">
              <FaShieldAlt className={styles.icon} /> Privacy Policy
            </a>
            <a href="/terms-of-use">
              <FaFileContract className={styles.icon} /> Terms Of Use
            </a>
          </div>
        </div>

        {/* Right: Contact + Hours + Social */}
        <div className={styles.right}>
          <div className={styles.card}>
            <h3 className={styles.title}>FIND US</h3>
            <p className={styles.text}>
              <br /> Gainesville, VA 20155
              <br /> (571) 279-0444
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>WORKING HOURS</h3>
            <p className={styles.text}>
              MONDAY - SATURDAY
              <br /> 7:00 – 19:00
            </p>
            <p className={styles.text}>
              SUNDAY
              <br /> 12:00 – 18:00
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.title}>FOLLOW US</h3>
            <div className={styles.social}>
              <a
                href="https://instagram.com/novasepticpumping"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://youtube.com/@novasepticpumping"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                  alt="YouTube"
                />
              </a>
              <a
                href="https://facebook.com/novasepticpumping"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                  alt="Facebook"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className={styles.bottomStrip}>
        <p>© {new Date().getFullYear()} NOVA Septic Pumping. All Rights Reserved.</p>
        <p>
          Powered by <a href="https://www.novasepticpumping.com">NOVA Septic Pumping LLC.</a>
        </p>
      </div>

      {/* Scroll to top button */}
      {showButton && (
        <button className={styles.scrollTop} onClick={scrollToTop}>
          ↑ Top
        </button>
      )}
    </footer>
  );
};

export default Footer;
