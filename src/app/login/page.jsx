'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import styles from '../CSS/login.module.css';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const closeError = () => {
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');

      // ← Persist userId & token
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('token', data.token);

      router.push('/home');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginCard}>
          {error && (
            <div className={styles.errorBox}>
              <span className={styles.errorMessage}>{error}</span>
              <button
                onClick={closeError}
                className={styles.closeButton}
                aria-label="Close error message"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          )}
          <div className={styles.logoContainer}>
            <div className={styles.logo}>
              <Image src="/image.png" alt="Login Visual" width={180} height={180} priority />
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="identifier" className={styles.label}>Username or Email</label>
              <input id="identifier" type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} className={styles.input} required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} required
              />
            </div>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
            <div className={styles.signupContainer}>
              <span className={styles.noAccount}>Don't have an account?</span>
              <Link href="/signup" className={styles.signupLink}>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
