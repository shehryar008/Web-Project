'use client';

import React, { useState, useEffect } from 'react';
import Categorybar from '../components/Categorybar';
import Navbar from '../components/Navbar';
import styles from '../CSS/home.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        async function loadHotels() {
            try {
                const res = await fetch('http://localhost:5000/api/hotels');
                console.log('[Home] fetch status:', res.status);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setHotels(data);
            } catch (err) {
                console.error('Failed to fetch hotels:', err);
                setError('Unable to load hotels.');
            } finally {
                setLoading(false);
            }
        }
        loadHotels();
    }, []);

    const handleCategoryClick = (category) => {
        console.log("Category clicked:", category);
        router.push(`/home/${category}`);
    };

    if (loading) {
        return (
            <div className={styles.container}>
                <Navbar />
                <p className={styles.status}>Loading hotels…</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.container}>
                <Navbar />
                <p className={styles.statusError}>{error}</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Navbar />
            <Categorybar onCategoryClick={handleCategoryClick} />

            <div className={styles.destinationsGrid}>
                {hotels.map((hotel) => (
                    <div key={hotel._id} className={styles.destinationCard}>
                        <div className={styles.cardImage}>
                            {hotel.thumbnailImage ? (
                                <img
                                    src={hotel.thumbnailImage}
                                    alt={hotel.hotelName}
                                    className={styles.thumbnailImg}
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = '/fallback.png';
                                    }}
                                />
                            ) : (
                                <img
                                    src="/fallback.png"
                                    alt="No image"
                                    className={styles.thumbnailImg}
                                />
                            )}
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.location}>{hotel.hotelName}</h3>
                            <p className={styles.location}>{hotel.location}</p>
                            <p className={styles.price}>${hotel.price} / night</p>
                            <div className={styles.ratingStars}>
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={
                                            i < (hotel.rating ?? 0)
                                                ? styles.starFilled
                                                : styles.starEmpty
                                        }
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                            <div className={styles.viewDetail}>
                                <button className={styles.viewContent} onClick={() => router.push(`/details/${hotel._id}`)}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
