import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/header/Header';

const Main = () => {
    const location = useLocation();

    useEffect(() => {
        // Define titles for each route
        const routeTitles = {
            '/': 'Home - Eco-Adventure Experiences',
            '/login': 'Login - Eco-Adventure Experiences',
            '/signUp': 'Sign Up - Eco-Adventure Experiences',
            '/section/pack-light': 'Pack Light - Eco-Adventure Experiences',
            '/adventure/:id': 'Adventure Details - Eco-Adventure Experiences',
        };

        // Set the title based on the current path
        const currentPath = location.pathname;
        document.title = routeTitles[currentPath] || 'Eco-Adventure Experiences';
    }, [location]);

    return (
        <div className='max-w-5xl mx-auto'>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;
