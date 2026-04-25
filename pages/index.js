import Link from 'next/link';
import {
  FaArrowRight,
  FaCheckCircle,
  FaGlobeEurope,
  FaIndustry,
  FaLanguage,
  FaTools,
} from 'react-icons/fa';
import SEO from '../components/SEO';
import CreateOrderButton from '../components/CreateOrderButton';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedServices } from '../data/siteContent';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { copy, language } = useLanguage();
  const services = getLocalizedServices(language).slice(0, 6);

  return (
    <main className={styles.container}>
      <SEO title={copy.seo.homeTitle} description={copy.seo.defaultDescription} />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>{copy.home.badge}</span>
          <h1>{copy.home.title}</h1>
          <p>{copy.home.intro}</p>

          <div className={styles.heroActions}>
            <Link href="/services" className={styles.primaryAction}>
              {copy.home.primaryCta}
              <FaArrowRight />
            </Link>
            <Link href="/contact" className={styles.secondaryAction}>
              {copy.home.secondaryCta}
            </Link>
          </div>

          <div className={styles.stats}>
            {copy.home.stats.map((item) => (
              <div key={item.label} className={styles.statCard}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.heroPanel}>
          <div className={styles.heroPanelCard}>
            <p className={styles.heroPanelEyebrow}>Kocer Rohrtechnik</p>
            <h2>{copy.home.serviceSectionTitle}</h2>
            <p>{copy.home.serviceSectionText}</p>
            <div className={styles.heroChecks}>
              <span>
                <FaCheckCircle />
                Pumping
              </span>
              <span>
                <FaCheckCircle />
                Inspections
              </span>
              <span>
                <FaCheckCircle />
                Repairs
              </span>
              <span>
                <FaCheckCircle />
                Grease trap cleaning
              </span>
              <span>
                <FaCheckCircle />
                Hydrojetting
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Services</p>
          <h2>{copy.home.serviceSectionTitle}</h2>
          <p>{copy.home.serviceSectionText}</p>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article
              key={service.slug}
              className={styles.serviceCard}
              style={{ '--service-accent': service.accent }}
            >
              <span className={styles.serviceCategory}>{service.categoryLabel}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className={styles.cardLink}>
                {copy.common.learnMore}
                <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.reasonsSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Why Kocer</p>
          <h2>{copy.home.reasonsTitle}</h2>
        </div>

        <div className={styles.reasonGrid}>
          <article className={styles.reasonCard}>
            <FaTools />
            <h3>{copy.home.reasons[0].title}</h3>
            <p>{copy.home.reasons[0].text}</p>
          </article>
          <article className={styles.reasonCard}>
            <FaLanguage />
            <h3>{copy.home.reasons[2].title}</h3>
            <p>{copy.home.reasons[2].text}</p>
          </article>
          <article className={styles.reasonCard}>
            <FaIndustry />
            <h3>{copy.home.reasons[1].title}</h3>
            <p>{copy.home.reasons[1].text}</p>
          </article>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Process</p>
          <h2>{copy.home.processTitle}</h2>
        </div>

        <div className={styles.processGrid}>
          {copy.home.process.map((item) => (
            <article key={item.step} className={styles.processCard}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.coverageSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>
            <FaGlobeEurope /> Germany
          </p>
          <h2>{copy.home.coverageTitle}</h2>
          <p>{copy.home.coverageText}</p>
        </div>

        <div className={styles.coverageGrid}>
          {copy.home.coverageCards.map((card) => (
            <article key={card.title} className={styles.coverageCard}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <p className={styles.sectionEyebrow}>Kocer Rohrtechnik</p>
          <h2>{copy.home.finalCtaTitle}</h2>
          <p>{copy.home.finalCtaText}</p>
        </div>
        <CreateOrderButton href="/contact" label={copy.common.requestQuote} />
      </section>
    </main>
  );
}
