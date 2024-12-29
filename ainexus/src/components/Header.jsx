import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

function Header() {
    return (
        <div id={styles.main} >
            <div 
            className={styles['header-heading']}>
                <h1>
                    <span>AI</span> NEXUS
                </h1>
                <p className={styles.details}>Where Innovation Meets Intelligence</p>
                <div className={styles['header-btns']}>
                    <Link 
                        to="register" 
                        smooth={true} 
                        className={styles['header-btn']}
                    >
                        REGISTER
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;