// File: src/app/payment/[hotelId]/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import styles from '../../CSS/payment.module.css';

export default function PaymentPage() {
  const { hotelId }  = useParams();
  const router       = useRouter();

  // State for fetched hotel
  const [hotel, setHotel]       = useState(null);
  const [loadingHotel, setLoadingHotel] = useState(true);
  const [hotelError, setHotelError]     = useState('');

  // Form state
  const [rooms, setRooms]         = useState(1);
  const [email, setEmail]         = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc]               = useState('');
  const [country, setCountry]       = useState('Hong Kong SAR China');
  const [formError, setFormError]   = useState('');

  // 1) Fetch hotel details to know max rooms
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/hotels/${hotelId}`);
        if (!res.ok) throw new Error(`Hotel fetch failed: ${res.status}`);
        const data = await res.json();
        setHotel(data);
        setRooms(1);
      } catch (err) {
        console.error(err);
        setHotelError('Could not load hotel info.');
      } finally {
        setLoadingHotel(false);
      }
    })();
  }, [hotelId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    // Basic validation
    if (!email || !cardNumber) {
      setFormError('Email and card number are required.');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hotelId, rooms, email, cardNumber }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Reservation failed');
      alert('Reservation confirmed!');
      router.push('/home');
    } catch (err) {
      console.error(err);
      setFormError(err.message);
    }
  };

  if (loadingHotel) {
    return (
      <div>
        <Navbar />
        <p className={styles.status}>Loading hotel info…</p>
      </div>
    );
  }

  if (hotelError || !hotel) {
    return (
      <div>
        <Navbar />
        <p className={styles.statusError}>{hotelError || 'Hotel not found.'}</p>
      </div>
    );
  }

  // Build options 1…hotel.rooms
  const roomOptions = Array.from({ length: hotel.rooms }, (_, i) => i + 1);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.paymentTitle}>
          Reserve {hotel.hotelName}
        </h2>

        <form className={styles.formContainer} onSubmit={handleSubmit}>
          {/* Number of rooms */}
          <div className={styles.formGroup}>
            <label htmlFor="rooms" className={styles.formLabel}>
              Number of Rooms
            </label>
            <select
              id="rooms"
              value={rooms}
              onChange={(e) => setRooms(Number(e.target.value))}
              className={styles.select}
            >
              {roomOptions.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          {/* Card Number */}
          <div className={styles.formGroup}>
            <label htmlFor="cardNumber" className={styles.formLabel}>Card number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 1234 1234 1234"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              className={styles.input}
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
                required
                className={styles.input}
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
                required
                className={styles.input}
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
              {[
                "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong SAR China", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
              ].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          {formError && <div className={styles.error}>{formError}</div>}

          <button type="submit" className={styles.doneButton}>
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
}
