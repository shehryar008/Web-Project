'use client';

import React, { useState, useEffect } from 'react';
import Categorybar from '../components/Categorybar';
import Navbar from '../components/Navbar';
import styles from '../CSS/home.module.css';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [hotels, setHotels] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        async function loadData() {
            try {
                // Fetch all hotels
                const res = await fetch('http://localhost:5000/api/hotels');
                console.log('[Home] fetch status:', res.status);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setHotels(data);

                // Fetch AI recommendations
                let email = '';
                const userId = localStorage.getItem('userId');
                const token = localStorage.getItem('token');
                
                if (userId && token) {
                    try {
                        const userRes = await fetch(`http://localhost:5000/api/auth/user/${userId}`, {
                            headers: { Authorization: `Bearer ${token}` }
                        });
                        if (userRes.ok) {
                            const userData = await userRes.json();
                            email = userData.email || '';
                        }
                    } catch (e) {
                        console.error('Failed to fetch user for recommendations:', e);
                    }
                }

                const resRec = await fetch(`http://localhost:5000/api/hotels/recommendations?email=${encodeURIComponent(email)}`);
                if (resRec.ok) {
                    const dataRec = await resRec.json();
                    setRecommendations(dataRec);
                }
            } catch (err) {
                console.error('Failed to load data:', err);
                setError('Unable to load hotels.');
            } finally {
                setLoading(false);
            }
        }
        loadData();
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

            {recommendations.length > 0 && (
                <div className={styles.recommendationsSection}>
                    <h2 className={styles.sectionTitle}>✨ AI Recommendations For You</h2>
                    <div className={styles.destinationsGrid}>
                        {recommendations.map((hotel) => (
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
                    <hr className={styles.divider} />
                </div>
            )}

            <h2 className={styles.sectionTitle}>All Destinations</h2>
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
