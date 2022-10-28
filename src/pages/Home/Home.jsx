import React from 'react';


import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';



import vue_route from '../../assets/images/vue_route_cp.jpg';
import './home.scss';

const Home = () => {
    return (
        <div className='home__main'>
                <Header />
                <div className='container'>
                    <div className='container__img'>
                        <img
                            className='home__photo'
                            src={vue_route}
                            alt='vue de la route'
                        />
                    </div>
                    <p className='home__text'>
                        <strong>La Maison d'Odile</strong> est idéalement située dans la belle localité creusoise d'Auzances. A quelques minutes à pieds, vous découvrirez <i class='home__innertext'>un village paisible et accueillant</i>, pourvu de l'essentiel en terme de <i class='home__innertext'>petits commerçants (bar-tabac, boulangers, bouchers, pharmacien, ...) </i>, <i class='home__innertext'>son marché hebdomadaire</i> ainsi qu'une <i class='home__innertext'>grande surface équipée d'une station essence</i>. 
                    </p>
                    <Footer />
                </div>
        </div>
    );
};

export default Home;
