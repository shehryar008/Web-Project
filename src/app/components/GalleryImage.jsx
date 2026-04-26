"use client"; // if you're in /app directory in Next.js 13+

import Image from "next/image";
import styles from "../components_css/GalleryImage.module.css"; // we'll create this CSS too

export default function GalleryImage({ src, alt }) {
    return (
        <div className={styles.galleryImageWrapper}>
            <Image
                src={src}
                alt={alt}
                fill
                style={{ objectFit: "contain", borderRadius: "22px" }}
            />
        </div>
    );
}
