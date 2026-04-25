// components/CreateOrderButton.jsx
import { useRouter } from 'next/router';
import styles from '../styles/CreateOrderButton.module.css';

export default function CreateOrderButton({ href = '/contact', label = 'Request service' }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handleClick} className={styles.addToCart}>
        {label}
      </button>
    </div>
  );
}
