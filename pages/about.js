import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteContent';
import styles from '../styles/About.module.css';

export default function About() {
  const { copy } = useLanguage();

  return (
    <main className={styles.container}>
      <SEO title={copy.seo.aboutTitle} description={copy.about.lead} slug="about" />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{siteConfig.name}</p>
        <h1>{copy.about.title}</h1>
        <p>{copy.about.lead}</p>
      </section>

      <section className={styles.story}>
        {copy.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className={styles.valuesSection}>
        <h2>{copy.about.valuesTitle}</h2>
        <div className={styles.valuesGrid}>
          {copy.about.values.map((value) => (
            <article key={value.title} className={styles.valueCard}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
