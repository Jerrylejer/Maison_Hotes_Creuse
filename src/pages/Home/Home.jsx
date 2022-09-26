import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import vue_route from '../../assets/images/vue_route_cp.jpg';
import './home.scss';

const Home = () => {
    return (
        <div className="main">
            <Header />
            <div className="img__container">
                <img className="photo-route" src={vue_route} alt='vue de la route' />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
