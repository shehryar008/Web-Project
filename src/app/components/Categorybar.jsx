'use client';
import React from 'react';
import styles from '../components_css/Category_bar.module.css';
import Image from 'next/image';

export default function Categorybar({ onCategoryClick, selectedCategory }) {
    const categoryIcons = [
        { id: 1, name: 'wifi', src: '/wifi.png', alt: 'wifi' },
        { id: 2, name: 'spa', src: '/spa.png', alt: 'spa' },
        { id: 3, name: 'phone', src: '/phone.png', alt: 'phone' },
        { id: 4, name: 'food', src: '/food.png', alt: 'food' },
        { id: 5, name: 'gym', src: '/gym.png', alt: 'gym' },
        { id: 6, name: 'kitchen', src: '/kitchen.png', alt: 'kitchen' },
    ];

    return (
        <div className={styles.categoryBar}>
            <div className={styles.categoryScroll}>
                {categoryIcons.map((icon) => (
                    <div
                        key={icon.id}
                        className={`${styles.categoryItem} ${selectedCategory === icon.name ? styles.active : ''}`}
                        onClick={() => onCategoryClick(icon.name)}
                    >
                        <div className={styles.categoryImageContainer}>
                            <Image src={icon.src} alt={icon.alt} width={24} height={24} className={styles.categoryIcon} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}