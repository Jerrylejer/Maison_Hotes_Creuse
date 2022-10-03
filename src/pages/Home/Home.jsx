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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat reiciendis quasi dicta veniam placeat assumenda,
                        quidem corporis, adipisci eos fugiat distinctio illo
                        quibusdam, consectetur quas dolorem numquam ducimus ab
                        deleniti.
                    </p>
                    <Footer />
                </div>
        </div>
    );
};

export default Home;
