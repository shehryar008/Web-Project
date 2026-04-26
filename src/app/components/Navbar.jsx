'use client';

import React, { useState, useEffect } from 'react';
import styles from '../components_css/Navbar.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      router.push(`/Search?query=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1) Grab userId & token from localStorage
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    if (!userId || !token) {
      setLoading(false);
      return;
    }

    // 2) Fetch user profile
    fetch(`http://localhost:5000/api/auth/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) setUser(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={() => router.push('/home')}>
        <Image src="/image.png" alt="Logo" width={80} height={80} />
      </div>

      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search hotels"
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>

      <div className={styles.userInfo}>
        {!loading && user ? (
          <>
            <span className={styles.text}>{user.username}</span>
            <div
              className={styles.userAvatar}
              onClick={() => router.push('/UserInfo')}
            >
              {user.profilePic ? (
                <Image
                  src={user.profilePic}
                  alt={user.username}
                  width={32}
                  height={32}
                  className={styles.userAvatar}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/fallback.png';
                  }}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              )}
            </div>
          </>
        ) : (
          <span
            className={styles.loginLink}
            onClick={() => router.push('/login')}
          >
            Login
          </span>
        )}
      </div>
    </div>
  );
}
