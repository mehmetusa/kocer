// components/CreateOrderButton.jsx
import Link from 'next/link';
import styles from '../styles/CreateOrderButton.module.css';

export default function CreateOrderButton({ href = '/contact', label = 'Request service' }) {
  return (
    <div className={styles.wrapper}>
      <Link href={href} className={styles.addToCart}>
        {label}
      </Link>
    </div>
  );
}
