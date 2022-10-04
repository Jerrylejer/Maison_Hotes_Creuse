import React from 'react';
// Import des composants Swiper pour le carrousel
import { Swiper, SwiperSlide } from 'swiper/react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Import des styles css Swiper
import 'swiper/css';
// 1, 2, 3, 4, ...
import 'swiper/css/pagination';
// < >
import 'swiper/css/navigation';
// import du scss galerie
import './galerie.scss';

// Import des modules Swiper
import { Pagination, Navigation } from 'swiper';

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
                // pagination={{ type: 'scrollbar' }}
                // navigation={false}
                spaceBetween={30}
                pagination={{clickable: true,}}
                modules={[Pagination, Navigation]}
                className='swiper'
                breakpoints={{
                    300: {
                        width: 300,
                        slidesPerView: 1,
                    },
                    400: {
                        width: 400,
                        slidesPerView: 1,
                    },
                    500: {
                        width: 500,
                        slidesPerView: 1,
                    },
                    600: {
                        width: 600,
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
                    <img
                        className='photo'
                        src={maison}
                        alt='maison'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='photo'
                        src={chambreRouge}
                        alt='chambre_Rouge'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='photo'
                        src={chambreBeige}
                        alt='chambre_Beige'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={cuisine1} alt='cuisine' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={cuisine2} alt='buffet_pdj' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={salon1} alt='salon1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={salon2} alt='salon2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='photo photo--vert'
                        src={salon3}
                        alt='salon3'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={terrasse1} alt='terrasse1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={terrasse2} alt='terrasse2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className='photo photo--vert'
                        src={tours}
                        alt='tours'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={piscine1} alt='piscine1' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={piscine2} alt='piscine2' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={piscine3} alt='piscine3' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={piscine4} alt='piscine4' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={jardin} alt='jardin' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={escaliers} alt='escaliers' />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='photo' src={cours} alt='cours' />
                </SwiperSlide>
            </Swiper>
            <Footer />
        </div>
    );
};

export default Galerie;
