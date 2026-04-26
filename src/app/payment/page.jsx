'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import styles from '../CSS/payment.module.css';

export default function Payment() {
  const router       = useRouter();
  const searchParams = useSearchParams();

  // Read hotelId & rooms from URL
  const hotelId = searchParams.get('hotelId') || '';
  const rooms   = searchParams.get('rooms')   || '';

  const [email, setEmail]         = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc]               = useState('');
  const [country, setCountry]       = useState('Hong Kong SAR China');
  const [error, setError]           = useState('');

  useEffect(() => {
    if (!hotelId || !rooms) {
      // nothing to reserve
      setError('Invalid reservation details.');
    }
  }, [hotelId, rooms]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hotelId || !rooms) {
      setError('Missing hotel or rooms info.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hotelId,
          rooms,
          email,
          cardNumber,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Reservation failed');
      }

      // success!
      alert('Reservation confirmed!');
      router.push('/'); 
    } catch (err) {
      console.error('Reservation error:', err);
      setError(err.message);
    }
  };

  if (error) {
    return (
      <div>
        <Navbar />
        <div className={styles.container}>
          <p className={styles.statusError}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.infoRow}>
          <p><strong>Hotel:</strong> {hotelId}</p>
          <p><strong>Rooms:</strong> {rooms}</p>
        </div>

        <div className={styles.paymentContainer}>
          <h1 className={styles.title}>Payment Details</h1>

          <form className={styles.formContainer} onSubmit={handleSubmit}>
            {error && <div className={styles.error}>{error}</div>}

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </div>

            {/* Card */}
            <div className={styles.formGroup}>
              <label htmlFor="cardNumber" className={styles.formLabel}>Card number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="1234 1234 1234 1234"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className={styles.input}
                required
              />
            </div>

            {/* Expiration & CVC */}
            <div className={styles.formRow}>
              <div className={styles.formGroupHalf}>
                <label htmlFor="expiration" className={styles.formLabel}>Expiration</label>
                <input
                  type="text"
                  id="expiration"
                  placeholder="MM/YY"
                  value={expiration}
                  onChange={(e) => setExpiration(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroupHalf}>
                <label htmlFor="cvc" className={styles.formLabel}>CVC</label>
                <input
                  type="text"
                  id="cvc"
                  placeholder="CVC"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            {/* Country */}
            <div className={styles.formGroup}>
              <label htmlFor="country" className={styles.formLabel}>Country</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={styles.select}
              >
                <option>Hong Kong SAR China</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>

            <button type="submit" className={styles.doneButton}>
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
