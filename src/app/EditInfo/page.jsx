'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Userdetails from '../components/Userdetails';
import styles from '../CSS/editinfo.module.css';

export default function EditInfoPage() {
  const router = useRouter();
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const [form, setForm] = useState({ username: '', email: '' });
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setError('No user logged in');
      setLoading(false);
      return;
    }
    fetch(`http://localhost:5000/api/auth/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((r) => r.json())
      .then((u) => {
        if (u.error) throw new Error(u.error);
        setForm({ username: u.username, email: u.email || '' });
        setPreview(u.profilePic || null);
      })
      .catch(() => setError('Failed to load user'))
      .finally(() => setLoading(false));
  }, [userId, token]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const f = e.target.files?.[0];
    if (f) {
      setFile(f);
      setPreview(URL.createObjectURL(f));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!userId) {
      setError('No user logged in');
      return;
    }

    const data = new FormData();
    data.append('username', form.username);
    data.append('email', form.email);
    if (file) data.append('profilePic', file);

    try {
      const res = await fetch(`http://localhost:5000/api/auth/update/${userId}`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: data
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.error || 'Update failed');
      alert('Profile updated!');
      router.push('/UserInfo');
    } catch (err) {
      console.error('Update error:', err);
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className={styles.container}>
          <p>Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <Userdetails />
          <button className={styles.saveButton} onClick={handleSubmit}>
            Save Info
            <svg className={styles.downloadIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.formContainer}>
          <h1 className={styles.formTitle}>Edit User Info</h1>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Username</label>
              <input
                type="text"
                name="username"
                className={styles.input}
                value={form.username}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                className={styles.input}
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Upload Profile Picture</label>
              <div className={styles.uploadArea}>
                <input
                  type="file"
                  className={styles.uploadInput}
                  onChange={handleFileChange}
                />
                <svg
                  className={styles.uploadIcon}
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12v9M16.5 16.5L12 12 7.5 16.5M20 16.58V19c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-2.42M16 8a4 4 0 11-8 0 4 4 0 018 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className={styles.uploadText}>
                  Click or drag file to this area to upload
                </p>
                {preview && (
                  <img
                    src={preview}
                    alt="Profile Preview"
                    className={styles.previewImage}
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
