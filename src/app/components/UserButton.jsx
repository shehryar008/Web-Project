import React from 'react'
import styles from '../components_css/userbuttons.module.css'
import { useRouter } from 'next/navigation';

export default function UserButton({content, Icon}) {
    const router = useRouter();
    return (
        <>
            <div className={styles.userActions}>
                <button className={styles.editButton} onClick={() => {
                    if (Icon === "User") router.push('EditInfo');
                    else router.push('AddHotel')
                    }
                }>
                    {content}
                    <span className={styles.plusIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </span>
                </button>
            </div>
        </>
    )
}
