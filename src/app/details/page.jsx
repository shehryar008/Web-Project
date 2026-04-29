"use client";
import React from 'react';
import styles from '../CSS/details.module.css';
import { MapPin, Star, Search, Coffee, Wifi, Phone, Users, Home, Bed, Bath } from 'lucide-react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Gallery from '../components/GalleryImage'
import { useRouter } from 'next/navigation';

const Details = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.content}>
                <div className={styles.mainImageContainer}>
                    <Image
                        src="/Capetown.png"
                        alt="Resort pool view"
                        className={styles.mainImage}
                        width={700}
                        height={350}
                        priority
                    />
                </div>

                <div className={styles.galleryContainer}>
                    <div className={styles.galleryGrid}>
                        <Gallery src="/pool-night.png" alt="Swimming pool at night" />
                        <Gallery src="/pool-night.png" alt="Swimming pool at night" />
                        <Gallery src="/pool-night.png" alt="Swimming pool at night" />
                        <Gallery src="/pool-night.png" alt="Swimming pool at night" />
                    </div>
                </div>

                <div className={styles.detailsContainer}>
                    <div className={styles.leftColumn}>
                        <div className={styles.locationBar}>
                            <MapPin className={styles.locationIcon} />
                            <h2 className={styles.locationText}>Entire rental unit in Cape Town, South Africa</h2>
                        </div>

                        <div className={styles.reviewCard}>
                            <div className={styles.reviewerInfo}>
                                <div className={styles.reviewerAvatar}></div>
                                <span className={styles.reviewerName}>user Name</span>
                            </div>
                            <div className={styles.rating}>
                                <Star fill="gold" className={styles.starIcon} />
                                <Star className={styles.starIcon} />
                                <Star className={styles.starIcon} />
                                <Star className={styles.starIcon} />
                                <Star className={styles.starIcon} />
                            </div>
                            <div className={styles.reviewContent}>
                                <h3 className={styles.reviewHeading}>Comment</h3>
                                <p className={styles.reviewText}>
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.bookingCard}>
                        <div className={styles.dateSelection}>
                            <div className={styles.dateBox}>
                                <span className={styles.dateLabel}>CHECK-IN</span>
                                <span className={styles.dateValue}>5/21/2025</span>
                            </div>
                            <div className={styles.dateBox}>
                                <span className={styles.dateLabel}>CHECK-OUT</span>
                                <span className={styles.dateValue}>5/26/2025</span>
                            </div>
                        </div>

                        <div className={styles.propertyDetails}>
                            <div className={styles.headingPriceRow}>
                                <h3 className={styles.propertyDetailsHeading}>What this place offers</h3>
                                <div className={styles.price}>${"113"} night</div>
                            </div>

                            <div className={styles.amenities}>
                                <div className={styles.amenity}>
                                    <Coffee size={18} />
                                    <span>Food</span>
                                </div>
                                <div className={styles.amenity}>
                                    <Wifi size={18} />
                                    <span>Wifi</span>
                                </div>
                                <div className={styles.amenity}>
                                    <Phone size={18} />
                                    <span>Telephone</span>
                                </div>
                            </div>

                            <div className={styles.specifications}>
                                <div className={styles.spec}>
                                    <Users size={18} />
                                    <span>2 guests</span>
                                </div>
                                <div className={styles.specDot}>·</div>
                                <div className={styles.spec}>
                                    <Home size={18} />
                                    <span>1 bedroom</span>
                                </div>
                                <div className={styles.specDot}>·</div>
                                <div className={styles.spec}>
                                    <Bed size={18} />
                                    <span>1 bed</span>
                                </div>
                                <div className={styles.specDot}>·</div>
                                <div className={styles.spec}>
                                    <Bath size={18} />
                                    <span>1 bath</span>
                                </div>
                            </div>
                        </div>
                        <button className={styles.reserveButton} onClick={()=>router.push('Payment')}>Reserve</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;