"use client";
import React, { useState, useEffect } from 'react';
import styles from '../CSS/owner.module.css';
import Userdetails from '../components/Userdetails'
import UserRoles from '../components/UserRoles';
import UserButton from '../components/UserButton';
import Navbar from '../components/Navbar'

const Owner = ({ userName, userId }) => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [role, setRole] = useState('owner');

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        console.log("userID: ", userId.email);
        const token = localStorage.getItem('token');
        if (!userId || !token) return;

        fetch(`http://localhost:5000/api/hotels/user/${userId}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setHotels(data);
                } else {
                    console.error('Error fetching hotels:', data.error);
                }
            })
            .catch(console.error);
    }, []);
    return (
        <>
            <Navbar />
            <div className={styles.userInfoContainer}>
                <div className={styles.userHeader}>
                    <Userdetails />
                    <UserButton content="Add Hotel" Icon="owner" />
                </div>
                <UserRoles role={role} setRole={setRole} />

                <div className={styles.commentsContainer}>
                    {hotels.map(hotel => (
                        <div key={hotel.id} className={styles.commentCard}>
                            <div className={styles.commentImage}>
                                <img src={hotel.thumbnailImage || hotel.hotelImages[0]} alt="Hotel" />

                            </div>
                            <div className={styles.commentContent}>
                                <div className={styles.commentHeader}>
                                    <div className={styles.commentUser}>
                                        <div className={styles.commentUserAvatar}>
                                            <div className={styles.avatarIcon}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                        </div>
                                        <span className={styles.commentUserName}>{hotel.username}</span>
                                    </div>
                                    <div className={styles.ratingStars}>
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                className={`${styles.star} ${star <= hotel.rating ? styles.activeStar : ''}`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className={styles.commentTitle}>Comment</h3>
                                <p className={styles.commentText}>{hotel.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Owner;