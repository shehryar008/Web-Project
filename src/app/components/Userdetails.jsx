"use client";
import React from 'react'
import styles from '../components_css/userdetails.module.css'
import { useState, useEffect } from 'react';

export default function Userdetails({ userName, userId }) {

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
        <>
            <div className={styles.userProfile}>
                <div className={styles.userAvatar}>
                    <div className={styles.avatarIcon}>
                        {user && user.profilePic ? (
                            <img
                                src={user.profilePic}
                                alt="User Avatar"
                                className={styles.avatarImage}
                            />
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ marginLeft: '5px' }}
                            >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        )}
                    </div>
                </div>
                <div className={styles.userDetails}>
                    <h2 className={styles.userName}>{user ? user.username : "User Name"}</h2>
                    <span className={styles.userId}>{user ? user.userid : "User Id"}</span>
                </div>
            </div>
        </>
    )
}
