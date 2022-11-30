import React from 'react';
import AnotherPage from './AnotherPage';
import Banner from './Banner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <AnotherPage />
        </div>
    );
};

export default Home;