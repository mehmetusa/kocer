import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaArrowRight, FaFilter } from 'react-icons/fa';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import {
  getLocalizedCategories,
  getLocalizedServices,
  serviceCategoryOrder,
  siteConfig,
} from '../data/siteContent';
import styles from '../styles/Products.module.css';

export default function Products() {
  const router = useRouter();
  const { copy, language } = useLanguage();
  const categories = getLocalizedCategories(language);
  const services = getLocalizedServices(language);
  const activeCategory = serviceCategoryOrder.includes(router.query.category)
    ? router.query.category
    : 'all';

  const filteredServices =
    activeCategory === 'all'
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <main className={styles.container}>
      <SEO
        title={copy.seo.servicesTitle}
        description={copy.seo.defaultDescription}
      />

      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">{copy.servicesPage.breadcrumbHome}</Link>
        <span className={styles.separator}>/</span>
        <span>{copy.servicesPage.breadcrumbCurrent}</span>
      </nav>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{siteConfig.name}</p>
        <h1>{copy.servicesPage.title}</h1>
        <p>{copy.servicesPage.intro}</p>
      </section>

      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <h2>{copy.servicesPage.sidebarTitle}</h2>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <Link
                key={category.key}
                href={`/services?category=${category.key}`}
                className={`${styles.categoryLink} ${
                  activeCategory === category.key ? styles.categoryLinkActive : ''
                }`}
              >
                <span>{category.label}</span>
                {activeCategory === category.key && <FaFilter />}
              </Link>
            ))}
          </div>
        </aside>

        <section className={styles.grid}>
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <article
                key={service.slug}
                className={styles.card}
                style={{ '--service-accent': service.accent }}
              >
                <span className={styles.categoryPill}>{service.categoryLabel}</span>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <div className={styles.highlightBlock}>
                  <h3>{copy.servicesPage.cardHighlights}</h3>
                  <ul>
                    {service.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.cardActions}>
                  <Link href={`/services/${service.slug}`} className={styles.cardLink}>
                    {copy.common.learnMore}
                    <FaArrowRight />
                  </Link>
                  <Link href="/contact" className={styles.secondaryLink}>
                    {copy.servicesPage.cardCta}
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <p className={styles.empty}>{copy.servicesPage.empty}</p>
          )}
        </section>
      </div>
    </main>
  );
}
