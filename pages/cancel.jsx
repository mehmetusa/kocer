// pages/cancel.jsx
import { useEffect } from 'react';

export default function CancelPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/checkout');
    }
  }, []);

  return null; // nothing rendered
}
