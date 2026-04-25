import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteContent';
import styles from '../styles/Testimonials.module.css';

export default function Testimonials() {
  const { copy } = useLanguage();

  return (
    <main className={styles.container}>
      <SEO title={copy.seo.referencesTitle} description={copy.references.intro} slug="testimonials" />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{siteConfig.name}</p>
        <h1>{copy.references.title}</h1>
        <p>{copy.references.intro}</p>
      </section>

      <section className={styles.grid}>
        {copy.references.items.map((item) => (
          <article key={item.author} className={styles.card}>
            <p className={styles.quote}>"{item.quote}"</p>
            <p className={styles.author}>{item.author}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
