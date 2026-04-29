// File: src/app/details/[id]/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import GalleryImage from '@/app/components/GalleryImage';
import {
    MapPin,
    Star,
    Coffee,
    Wifi,
    Phone,
    Users,
    Home,
    Bed,
    Bath
} from 'lucide-react';
import styles from '../../CSS/details.module.css';

export default function DetailsPage() {
    const { id } = useParams();
    const router = useRouter();

    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchHotel() {
            try {
                const res = await fetch(`http://localhost:5000/api/hotels/${id}`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setHotel(data);
            } catch (err) {
                console.error('Failed to load hotel:', err);
                setError('Could not load hotel details.');
            } finally {
                setLoading(false);
            }
        }
        fetchHotel();
    }, [id]);

    if (loading || !hotel) {
        return (
            <div className={styles.container}>
                <Navbar />
                <p className={styles.status}>Loading…</p>
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

    const amenityIcons = {
        food: <Coffee size={18} />,
        wifi: <Wifi size={18} />,
        telephone: <Phone size={18} />,
        spa: <>🧖</>,
        gym: <>🏋️</>,
        kitchen: <>🍴</>
    };

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                {/* Main Image */}
                <div className={styles.mainImageContainer}>
                    <Image
                        src={hotel.thumbnailImage || '/fallback.png'}
                        alt={hotel.hotelName}
                        className={styles.mainImage}
                        width={700}
                        height={350}
                        priority
                    />
                </div>

                {/* Gallery */}
                {hotel.hotelImages.length > 0 && (
                    <div className={styles.galleryContainer}>
                        <div className={styles.galleryGrid}>
                            {hotel.hotelImages.map((src, idx) => (
                                    <Image key={idx} src={src} alt={`${hotel.hotelName} ${idx + 1}`} width={480} height={480} style={{borderRadius:'22px'}} />
                                )
                            )}
                        </div>
                    </div>
                )}

                {/* Details */}
                <div className={styles.detailsContainer}>
                    {/* Left Column */}
                    <div className={styles.leftColumn}>
                        <div className={styles.locationBar}>
                            <MapPin className={styles.locationIcon} />
                            <h2 className={styles.locationText}>
                                Entire rental unit in {hotel.location}
                            </h2>
                        </div>

                        <div className={styles.reviewCard}>
                            <div className={styles.reviewerInfo}>
                                <div className={styles.reviewerAvatar}></div>
                                <span className={styles.reviewerName}>User</span>
                            </div>
                            <div className={styles.rating}>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        fill={i < hotel.rating ? 'gold' : 'none'}
                                        className={styles.starIcon}
                                    />
                                ))}
                            </div>
                            <div className={styles.reviewContent}>
                                <h3 className={styles.reviewHeading}>Comment</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className={styles.rightColumn}>
                    <div className={styles.bookingCard}>

                        <div className={styles.propertyDetails}>
                            <div className={styles.headingPriceRow}>
                                <h3 className={styles.propertyDetailsHeading}>What this place offers</h3>
                                <div className={styles.price}>${hotel.price} night</div>
                            </div>

                            <div className={styles.amenities}>
                                {Object.entries(hotel.facilities).map(
                                    ([key, available]) =>
                                        available && (
                                            <div key={key} className={styles.amenity}>
                                                {amenityIcons[key] || null}
                                                <span>
                                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                                </span>
                                            </div>
                                        )
                                )}
                            </div>

                            <div className={styles.specifications}>
                                <div className={styles.spec}>
                                    <Users size={18} />
                                    <span>{hotel.rooms} guests</span>
                                </div>
                                <div className={styles.specDot}>·</div>
                                <div className={styles.spec}>
                                    <Home size={18} />
                                    <span>1 bedroom</span>
                                </div>
                                <div className={styles.specDot}>·</div>
                                <div className={styles.spec}>
                                    <Bed size={18} />
                                    <span>{hotel.rooms} beds</span>
                                </div>
                                <div className={styles.specDot}>·</div>
                                <div className={styles.spec}>
                                    <Bath size={18} />
                                    <span>1 bath</span>
                                </div>
                            </div>
                        </div>

                        <button
                            className={styles.reserveButton}
                            onClick={() =>
                                router.push(`/payment/${hotel._id}?rooms=${hotel.rooms}`)
                            }
                        >
                            Reserve
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
