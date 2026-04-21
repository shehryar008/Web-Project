'use client';

import React, { useState } from 'react';
import styles from '../CSS/addhotel.module.css';
import { Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Userdetails from '../components/Userdetails';
import Navbar from '../components/Navbar';

const AddHotel = () => {
    const router = useRouter();

    const [hotelData, setHotelData] = useState({
        hotelName: '',
        location: '',
        price: '',
        rooms: '',
        facilities: {
            wifi: false,
            spa: false,
            food: false,
            telephone: false,
            gym: false,
            kitchen: false,
        },
        thumbnailImage: null,
        hotelImages: [],
        thumbnailFile: null,
        hotelFiles: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setHotelData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFacilityChange = (facility) => {
        setHotelData((prev) => ({
            ...prev,
            facilities: {
                ...prev.facilities,
                [facility]: !prev.facilities[facility],
            },
        }));
    };

    const handleThumbnailUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setHotelData((prev) => ({
                ...prev,
                thumbnailFile: file,
                thumbnailImage: URL.createObjectURL(file),
            }));
        }
    };

    const handleImagesUpload = (e) => {
        const files = Array.from(e.target.files || []);
        if (files.length) {
            const previews = files.map((f) => URL.createObjectURL(f));
            setHotelData((prev) => ({
                ...prev,
                hotelFiles: [...prev.hotelFiles, ...files],
                hotelImages: [...prev.hotelImages, ...previews],
            }));
        }
    };

    const removeImage = (index) => {
        setHotelData((prev) => {
            const newPreviews = [...prev.hotelImages];
            const newFiles = [...prev.hotelFiles];
            newPreviews.splice(index, 1);
            newFiles.splice(index, 1);
            return {
                ...prev,
                hotelImages: newPreviews,
                hotelFiles: newFiles,
            };
        });
    };

    const handleSave = async () => {
        try {
            const userId = localStorage.getItem('userId'); // 👈 Get the current user's ID
            if (!userId) {
                alert('User ID not found. Please log in again.');
                return;
            }

            const form = new FormData();
            form.append('hotelName', hotelData.hotelName);
            form.append('location', hotelData.location);
            form.append('price', hotelData.price);
            form.append('rooms', hotelData.rooms);
            form.append('facilities', JSON.stringify(hotelData.facilities));
            form.append('uploadedBy', userId); // 👈 Attach user ID here

            if (hotelData.thumbnailFile) {
                form.append('thumbnailImage', hotelData.thumbnailFile);
            }
            hotelData.hotelFiles.forEach((file) => {
                form.append('hotelImages', file);
            });

            const res = await fetch('http://localhost:5000/api/hotels', {
                method: 'POST',
                body: form,
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Save failed');
            }

            alert('Hotel information saved successfully!');
            router.push('/owner');
        } catch (err) {
            console.error('Save error:', err);
            alert(err.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.header}>
                    <Userdetails />
                    <button
                        onClick={handleSave}
                        className={styles.saveButton}
                    >
                        Save Info
                        <Upload size={24} className={styles.downloadIcon} />
                    </button>
                </div>

                <div className={styles.formContainer}>
                    <h2 className={styles.formTitle}>Add Hotel Info</h2>

                    {/* Hotel Name */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Hotel Name</label>
                        <input
                            type="text"
                            name="hotelName"
                            value={hotelData.hotelName}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder="Enter hotel name"
                        />
                    </div>

                    {/* Location */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Location</label>
                        <input
                            type="text"
                            name="location"
                            value={hotelData.location}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder="Enter hotel location"
                        />
                    </div>

                    {/* Price */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Price</label>
                        <input
                            type="text"
                            name="price"
                            value={hotelData.price}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder="Enter price per night"
                        />
                    </div>

                    {/* Rooms */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Rooms</label>
                        <input
                            type="number"
                            name="rooms"
                            value={hotelData.rooms}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder="Number of rooms available"
                        />
                    </div>

                    {/* Facilities */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Facilities provided?</label>
                        <div className={styles.facilitiesGrid}>
                            {Object.entries(hotelData.facilities).map(([fac, isChecked]) => (
                                <div
                                    key={fac}
                                    className={`${styles.facilityOption} ${isChecked ? styles.selected : ''
                                        }`}
                                    onClick={() => handleFacilityChange(fac)}
                                >
                                    <div className={styles.checkbox}>
                                        {isChecked && <span className={styles.checkmark}>✓</span>}
                                    </div>
                                    <span className={styles.facilityName}>
                                        {fac.toUpperCase()}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Thumbnail Upload */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Thumbnail Image</label>
                        <div className={styles.uploadContainer}>
                            {hotelData.thumbnailImage ? (
                                <div className={styles.thumbnailPreview}>
                                    <img
                                        src={hotelData.thumbnailImage}
                                        alt="Thumbnail Preview"
                                        className={styles.thumbnailImage}
                                    />
                                    <button
                                        className={styles.removeButton}
                                        onClick={() =>
                                            setHotelData((prev) => ({
                                                ...prev,
                                                thumbnailImage: null,
                                                thumbnailFile: null,
                                            }))
                                        }
                                    >
                                        Remove
                                    </button>
                                </div>
                            ) : (
                                <label className={styles.uploadArea}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleThumbnailUpload}
                                        className={styles.fileInput}
                                    />
                                    <Upload size={24} />
                                    <p>Click or drag file to this area to upload</p>
                                </label>
                            )}
                        </div>
                    </div>

                    {/* Hotel Images Upload */}
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Hotel Images</label>
                        <div className={styles.uploadContainer}>
                            <label className={styles.uploadArea}>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImagesUpload}
                                    className={styles.fileInput}
                                />
                                <Upload size={24} />
                                <p>Click or drag files to this area to upload</p>
                            </label>
                        </div>

                        {hotelData.hotelImages.length > 0 && (
                            <div className={styles.imagesGrid}>
                                {hotelData.hotelImages.map((src, idx) => (
                                    <div key={idx} className={styles.imagePreview}>
                                        <img
                                            src={src}
                                            alt={`Hotel Preview ${idx + 1}`}
                                            className={styles.previewImage}
                                        />
                                        <button
                                            className={styles.removeButton}
                                            onClick={() => removeImage(idx)}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddHotel;
