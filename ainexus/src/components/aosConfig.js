// src/aosConfig.js
import AOS from 'aos';
import 'aos/dist/aos.css';

export const initAOS = () => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        offset: 100,    // Offset for triggering animations
        easing: 'ease-in-out', // Default easing
           // Trigger animation only once
    });
};
