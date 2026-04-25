import Link from 'next/link';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SEO from '../../components/SEO';
import { useLanguage } from '../../context/LanguageContext';
import {
  getLocalizedServiceBySlug,
  getLocalizedServices,
  getServiceSlugs,
} from '../../data/siteContent';
import styles from '../../styles/ServiceDetail.module.css';

export default function ServiceDetailPage({ slug }) {
  const { copy, language } = useLanguage();
  const service = getLocalizedServiceBySlug(slug, language);
  const relatedServices = getLocalizedServices(language)
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  if (!service) return null;

  return (
    <main className={styles.container}>
      <SEO
        title={service.title}
        description={service.summary}
        slug={`services/${service.slug}`}
        type="service"
      />

      <Link href="/services" className={styles.backLink}>
        <FaArrowLeft />
        {copy.serviceDetail.back}
      </Link>

      <section className={styles.hero} style={{ '--service-accent': service.accent }}>
        <div className={styles.heroContent}>
          <span className={styles.categoryPill}>{service.categoryLabel}</span>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
        </div>

        <aside className={styles.sideCard}>
          <h2>{copy.serviceDetail.highlights}</h2>
          <ul>
            {service.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className={styles.detailGrid}>
        <article className={styles.detailCard}>
          <h2>{copy.serviceDetail.highlights}</h2>
          <p>{service.summary}</p>
          <div className={styles.featureList}>
            {service.highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </article>

        <article className={styles.ctaCard}>
          <h2>{copy.serviceDetail.ctaTitle}</h2>
          <p>{copy.serviceDetail.ctaText}</p>
          <Link href="/contact" className={styles.ctaButton}>
            {copy.serviceDetail.ctaButton}
            <FaArrowRight />
          </Link>
        </article>
      </section>

      <section className={styles.relatedSection}>
        <h2>More Services</h2>
        <div className={styles.relatedGrid}>
          {relatedServices.map((item) => (
            <article key={item.slug} className={styles.relatedCard}>
              <span>{item.categoryLabel}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link href={`/services/${item.slug}`} className={styles.relatedLink}>
                {copy.common.learnMore}
                <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: getServiceSlugs().map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}
