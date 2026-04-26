import React, { useState, useEffect } from 'react';
import styles from '../components_css/userroles.module.css';
import { useRouter } from 'next/navigation';

export default function UserRoles({ role, setRole }) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(role);

    console.log('Received role prop:', role);
    console.log('Active Tab:', activeTab);

    const handleTabClick = (selectedRole) => {
        setActiveTab(selectedRole);
        setRole(selectedRole);
        console.log('Received role prop:', role);
        console.log('Active Tab:', activeTab);
        if (selectedRole === 'guest') {
            router.push('/UserInfo');
        } else if (selectedRole === 'owner') {
            router.push('/owner');
        }
    };

    return (
        <>
            <div className={styles.userRoles}>
                <div
                    className={`${styles.roleTab} ${activeTab === 'guest' ? styles.activeTab : ''}`}
                    onClick={() => handleTabClick('guest')}
                >
                    Guest
                </div>
                <div
                    className={`${styles.roleTab} ${activeTab === 'owner' ? styles.activeTab : ''}`}
                    onClick={() => handleTabClick('owner')}
                >
                    Owner
                </div>
            </div>
        </>
    );
}
