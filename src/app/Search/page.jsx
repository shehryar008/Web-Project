'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../CSS/home.module.css'

export default function Page() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const query = searchParams.get('query')?.toLowerCase() || '';

    const [hotels, setHotels] = useState([]);
    const [filteredHotels, setFilteredHotels] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/hotels');
                const data = await res.json();
                setHotels(data);
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
        };

        fetchHotels();
    }, []);

    useEffect(() => {
        if (!query) return;
        const results = hotels.filter(hotel =>
            (hotel.name && hotel.name.toLowerCase().includes(query)) ||
            (hotel.location && hotel.location.toLowerCase().includes(query))
        );
        setFilteredHotels(results);
    }, [query, hotels]);

    return (
        <>
            <Navbar />
            <div style={{ padding: '1rem' }}>
                <h2>Search Results for: <em>{query}</em></h2>

                {filteredHotels.length > 0 ? (
                    <div className={styles.destinationsGrid}>
                        {filteredHotels.map((hotel) => (
                            <div key={hotel._id} className={styles.destinationCard}>
                                <div className={styles.cardImage}>
                                    {hotel.thumbnailImage ? (
                                        <img
                                            src={hotel.thumbnailImage}  
                                            alt={hotel.name}         
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
                                    <h3 className={styles.location}>{hotel.name}</h3>
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
                                        <button
                                            className={styles.viewContent}
                                            onClick={() => router.push(`/details/${hotel._id}`)}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No hotels found.</p>
                )}
            </div >
        </>
    );
}