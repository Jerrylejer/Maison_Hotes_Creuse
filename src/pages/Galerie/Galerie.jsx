import React from 'react';
// Import des composants Swiper pour le carrousel
import { Swiper, SwiperSlide } from 'swiper/react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Import des styles css Swiper
import 'swiper/css';
// 1, 2, 3, 4, ...
import 'swiper/css/pagination';
// autoplay
import 'swiper/css/autoplay';
// import du scss galerie
import './galerie.scss';
// Possibilité d'importer le module navigation au besoin < > => import 'swiper/css/navigation';

// Import des modules Swiper
import { Pagination, Autoplay } from 'swiper';

// Photos
import chambreRouge from '../../assets/images/chambre1_pf-min.jpg';
import chambreBeige from '../../assets/images/chambre2_pf-min.jpg';
import cuisine1 from '../../assets/images/cuisine1_pf-min.jpg';
import cuisine2 from '../../assets/images/cuisine2_pf-min.jpg';
import salon1 from '../../assets/images/salon1_pf-min.jpg';
import salon2 from '../../assets/images/salon2_pf-min.jpg';
import salon3 from '../../assets/images/salon3_pf-min.jpg';
import terrasse1 from '../../assets/images/terrasse1_pf-min.jpg';
import terrasse2 from '../../assets/images/terrasse2_pf-min.jpg';
import piscine1 from '../../assets/images/piscine1_pf-min.jpg';
import piscine2 from '../../assets/images/piscine2_pf-min.jpg';
import piscine3 from '../../assets/images/piscine3_pf-min.jpg';
import piscine4 from '../../assets/images/piscine4_pf-min.jpg';
import tours from '../../assets/images/tours_pf-min.jpg';
import jardin from '../../assets/images/jardin_pf-min.jpg';
import cours from '../../assets/images/cours_pf-min.jpg';
import escaliers from '../../assets/images/escaliers_pf-min.jpg';
import maison from '../../assets/images/vue_maison_terrasse.cp.jpg';

const Galerie = () => {
    return (
        <div className='container'>
            <Header />
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className='swiper'
                autoplay={{
                    delay: 3000,
                }}
                speed={1500}
                breakpoints={{
                    699: {
                        width: 100,
                        slidesPerView: 1,
                    },
                    700: {
                        width: 700,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 1,
                    },
                    993: {
                        width: 993,
                        slidesPerView: 1,
                    },
                }}
            >
                <SwiperSlide>
                    <img className='photo' src={maison} alt='maison' />
                    <div className='text text--big'>Vue de la terrasse</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='photo'
                        src={chambreRouge}
                        alt='chambre_Rouge'
                    />
                    <div className='text'>Chambre Rouge</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='photo'
                        src={chambreBeige}
                        alt='chambre_Beige'
                    />
                    <div className='text text--big'>Chambre Beige</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={cuisine1} alt='cuisine' />
                    <div className='text'>Cuisine</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={cuisine2} alt='buffet_pdj' />
                    <div className='text'>Buffet petit-déjeuner</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={salon1} alt='salon1' />
                    <div className='text'>Petit-salon</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='photo photo--vert'
                        src={salon3}
                        alt='salon3'
                    />
                    <div className='text'>Petit-salon</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={salon2} alt='salon2' />
                    <div className='text'>Salle-à-manger</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={terrasse1} alt='terrasse1' />
                    <div className='text'>Terrasse</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={terrasse2} alt='terrasse2' />
                    <div className='text'>Terrasse</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='photo photo--vert'
                        src={tours}
                        alt='tours'
                    />
                    <div className='text'>Maison</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={piscine1} alt='piscine1' />
                    <div className='text'>Piscine et transats</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={piscine2} alt='piscine2' />
                    <div className='text'>Autre vue piscine</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={piscine3} alt='piscine3' />
                    <div className='text'>Autre vue piscine</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={piscine4} alt='piscine4' />
                    <div className='text'>Autre vue piscine</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={jardin} alt='jardin' />
                    <div className='text'>Vue sur le jardin</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={escaliers} alt='escaliers' />
                    <div className='text'>Accès terrasse</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={cours} alt='cours' />
                    <div className='text'>Cours et parking</div>
                </SwiperSlide>
            </Swiper>
            <Footer />
        </div>
    );
};

export default Galerie;
