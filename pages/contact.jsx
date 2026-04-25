import React, { useState } from 'react';
import Image from 'next/image';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import SEO from '../components/SEO';
import Toast from '../components/Toast';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../data/siteContent';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const { copy } = useLanguage();
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    form.append('access_key', 'b17b8eac-5062-4afb-b241-a18eabb06b74');
    form.append('subject', `${siteConfig.name} website enquiry`);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setToastMessage(copy.contact.success);
        setShowToast(true);
        event.target.reset();
      } else {
        setToastMessage(copy.contact.failure);
        setShowToast(true);
      }
    } catch (error) {
      console.error(error);
      setToastMessage(copy.contact.failure);
      setShowToast(true);
    }
  };

  return (
    <main className={styles.container}>
      <SEO title={copy.seo.contactTitle} description={copy.contact.intro} />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>{siteConfig.name}</p>
        <h1>{copy.contact.title}</h1>
        <p>{copy.contact.intro}</p>
      </section>

      <section className={styles.contactLayout}>
        <div className={styles.infoColumn}>
          <div className={styles.brandCard}>
            <div className={styles.logoWrap}>
              <Image
                src={siteConfig.logoPath}
                alt={siteConfig.name}
                width={260}
                height={78}
                className={styles.logoImage}
              />
            </div>
            <div>
              <h2>{copy.footer.contact}</h2>
              <p>{copy.footer.note}</p>
            </div>
          </div>

          <div className={styles.cardGrid}>
            {copy.contact.cards.map((card, index) => (
              <article key={card.title} className={styles.infoCard}>
                {index === 0 && <FaPhoneAlt className={styles.icon} />}
                {index === 1 && <FaPhoneAlt className={styles.icon} />}
                {index === 2 && <FaEnvelope className={styles.icon} />}
                {index === 3 && <FaMapMarkerAlt className={styles.icon} />}
                <h3>{card.title}</h3>
                <p>{card.value}</p>
              </article>
            ))}
          </div>

          <article className={styles.noteCard}>
            <h3>{copy.contact.noteTitle}</h3>
            <p>{copy.contact.note}</p>
          </article>
        </div>

        <div className={styles.formColumn}>
          <form className={styles.contactForm} onSubmit={onSubmit}>
            <h2>{copy.contact.formTitle}</h2>

            <div className={styles.formGrid}>
              <label className={styles.formGroup}>
                <span>{copy.contact.labels.name}</span>
                <input
                  type="text"
                  name="name"
                  placeholder={copy.contact.placeholders.name}
                  required
                />
              </label>

              <label className={styles.formGroup}>
                <span>{copy.contact.labels.email}</span>
                <input
                  type="email"
                  name="email"
                  placeholder={copy.contact.placeholders.email}
                  required
                />
              </label>

              <label className={styles.formGroup}>
                <span>{copy.contact.labels.phone}</span>
                <input
                  type="text"
                  name="phone"
                  placeholder={copy.contact.placeholders.phone}
                />
              </label>

              <label className={styles.formGroup}>
                <span>{copy.contact.labels.service}</span>
                <input
                  type="text"
                  name="service"
                  placeholder={copy.contact.placeholders.service}
                />
              </label>
            </div>

            <label className={styles.formGroup}>
              <span>{copy.contact.labels.message}</span>
              <textarea
                name="message"
                rows="6"
                placeholder={copy.contact.placeholders.message}
                required
              />
            </label>

            <button type="submit" className={styles.submitButton}>
              <FaPaperPlane className={styles.buttonIcon} />
              {copy.contact.submit}
            </button>
          </form>
        </div>
      </section>

      <Toast message={toastMessage} show={showToast} setShow={setShowToast} />
    </main>
  );
}
