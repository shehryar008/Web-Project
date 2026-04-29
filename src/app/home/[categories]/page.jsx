"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../CSS/home.module.css'
import Navbar from '../../components/Navbar';
import Categorybar from '../../components/Categorybar';
import Image from 'next/image';

const Home = () => {
    const [hotels, setHotels] = useState([]);
    const [filteredHotels, setFilteredHotels] = useState([]);
    const [selectedFacility, setSelectedFacility] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    // Load hotels from API
    useEffect(() => {
        async function loadHotels() {
            try {
                const res = await fetch('http://localhost:5000/api/hotels');
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setHotels(data);
                setFilteredHotels(data);
            } catch (err) {
                console.error('Failed to fetch hotels:', err);
                setError('Unable to load hotels.');
            } finally {
                setLoading(false);
            }
        }
        loadHotels();
    }, []);

    // Automatically filter hotels when a facility is selected
    useEffect(() => {
        if (!selectedFacility) {
            setFilteredHotels(hotels);
            return;
        }

        const filtered = hotels.filter(hotel => hotel.facilities?.[selectedFacility]);
        setFilteredHotels(filtered);
    }, [selectedFacility, hotels]);

    const handleCategoryClick = (facility) => {
        console.log("Category clicked:", facility);
        setSelectedFacility(facility); // This will trigger the useEffect above
    };

    if (loading) return <p>Loading hotels...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Navbar />
            </header>

            <Categorybar
                onCategoryClick={handleCategoryClick}
                selectedCategory={selectedFacility}
            />

            <div className={styles.destinationsGrid}>
                {filteredHotels.map((hotel) => (
                    <div key={hotel.id} className={styles.destinationCard}>
                        <div className={styles.cardImage}>
                            <Image
                                src={hotel.thumbnailImage}
                                alt={hotel.location}
                                layout="fill"
                                objectFit="cover"
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,..."
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.location}>{hotel.location}</h3>
                            <p className={styles.price}>{hotel.price}</p>
                            <div className={styles.ratingStars}>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < hotel.rating ? styles.starFilled : styles.starEmpty}>★</span>
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
};

export default Home;
