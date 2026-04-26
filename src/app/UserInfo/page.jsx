"use client";
import React, { useEffect, useState } from 'react';
import styles from '../CSS/userinfo.module.css';
import UserDetails from '../components/Userdetails';
import UserRoles from '../components/UserRoles';
import UserButton from '../components/UserButton';
import Navbar from '../components/Navbar';

const UserInfo = ({ userName, userId, email }) => {
    const [role, setRole] = useState('guest');
    const [reservations, setReservations] = useState([]);
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userId = localStorage.getItem('userId');
            const token = localStorage.getItem('token');

            if (!userId || !token) return;

            try {
                const userRes = await fetch(`http://localhost:5000/api/auth/user/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const userData = await userRes.json();

                const reservationsRes = await fetch(`http://localhost:5000/api/reservations?email=${userData.email}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const reservationsData = await reservationsRes.json();

                // Fetch hotel details for each reservation
                const hotelIds = [...new Set(reservationsData.map(r => r.hotel))];
                const hotelMap = {};

                await Promise.all(hotelIds.map(async (hotelId) => {
                    const res = await fetch(`http://localhost:5000/api/hotels/${hotelId}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    const hotelData = await res.json();
                    hotelMap[hotelId] = hotelData;
                }));

                // Attach hotel data to each reservation
                const enrichedReservations = reservationsData.map(res => ({
                    ...res,
                    hotelInfo: hotelMap[res.hotel]
                }));

                setReservations(enrichedReservations);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, []);



    return (
        <>
            <Navbar />
            <div className={styles.userInfoContainer}>
                <div className={styles.userHeader}>
                    <UserDetails />
                    <UserButton content="Edit Info" Icon="User" />
                </div>

                <UserRoles role={role} setRole={setRole} />

                <div className={styles.commentsContainer}>
                    {reservations.length > 0 ? (
                        reservations.map(reservation => (
                            <div key={reservation._id} className={styles.commentCard}>
                                <div className={styles.commentImage}>
                                    <img
                                        src={reservation.hotelInfo?.thumbnailImage || '/hotel_placeholder.png'}
                                        alt="Hotel"
                                    />
                                </div>
                                <div className={styles.commentContent}>
                                    <h3 className={styles.commentTitle}>Reservation</h3>
                                    <p className={styles.commentText}>
                                        Hotel ID: {reservation.hotel} <br />
                                        Rooms Booked: {reservation.rooms} <br />
                                        Card Ending: **** **** **** {reservation.cardLast4}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No reservations found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default UserInfo;
