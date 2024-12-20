import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <div id={styles.main}>
            <div className={styles['header-heading']}>
                <h1>
                    <span>AI</span> NEXUS
                </h1>
                <p className={styles.details}>Where Innovation Meets Intelligence</p>
                <div className={styles['header-btns']}>
                    <a href="#" className={styles['header-btn']}>
                        Register
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;