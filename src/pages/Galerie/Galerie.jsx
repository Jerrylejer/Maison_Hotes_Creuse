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
// import salon3 from '../../assets/images/salon3_pf-min.jpg';
import terrasse1 from '../../assets/images/terrasse1_pf-min.jpg';
import terrasse2 from '../../assets/images/terrasse2_pf-min.jpg';
import piscine1 from '../../assets/images/piscine1_pf-min.jpg';
import piscine2 from '../../assets/images/piscine2_pf-min.jpg';
import piscine3 from '../../assets/images/piscine3_pf-min.jpg';
import piscine4 from '../../assets/images/piscine4_pf-min.jpg';
// import tours from '../../assets/images/tours_pf-min.jpg';
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
                    <figure>
                        <img className='photo' src={maison} alt='maison' />
                        <figcaption className='text text--big'>
                            La Maison d'Odile
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img
                            className='photo'
                            src={chambreRouge}
                            alt='chambre_Rouge'
                        />
                        <figcaption className='text'>
                            La chambre rouge
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img
                            className='photo'
                            src={chambreBeige}
                            alt='chambre_Beige'
                        />
                        <figcaption className='text text--big'>
                            La chambre beige
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img className='photo' src={cuisine1} alt='cuisine' />
                        <figcaption className='text'>
                            L'authentique cuisine
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img
                            className='photo'
                            src={cuisine2}
                            alt='buffet_pdj'
                        />
                        <figcaption className='text'>
                            Les essentiels au petit-déjeuner !
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img className='photo' src={salon1} alt='salon1' />
                        <figcaption className='text'>Le salon</figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img className='photo' src={salon2} alt='salon2' />
                        <figcaption className='text'>
                            Notre salle-à-manger
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img
                            className='photo'
                            src={terrasse1}
                            alt='terrasse1'
                        />
                        <figcaption className='text'>Notre terrasse de droite ...</figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img
                            className='photo'
                            src={terrasse2}
                            alt='terrasse2'
                        />
                        <figcaption className='text'>... à gauche !</figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img className='photo' src={piscine1} alt='piscine1' />
                        <figcaption className='text'>
                            Notre piscine et ses transats
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img className='photo' src={piscine2} alt='piscine2' />
                        <figcaption className='text'>
                            Grande pour se baigner en famille ...
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img className='photo' src={piscine3} alt='piscine3' />
                        <figcaption className='text'>
                            {' '}
                            ... et sous des regards protecteurs
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img className='photo' src={piscine4} alt='piscine4' />
                        <figcaption className='text'>
                            Piscine de 9 x 4 mètres
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img className='photo' src={jardin} alt='jardin' />
                        <figcaption className='text'>
                            Vue sur le jardin
                        </figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img
                            className='photo'
                            src={escaliers}
                            alt='escaliers'
                        />
                        <figcaption className='text'>Accès terrasse</figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure>
                        <img className='photo' src={cours} alt='cours' />
                        <figcaption className='text'>Cour et parking</figcaption>
                    </figure>
                </SwiperSlide>
            </Swiper>
            <Footer />
        </div>
    );
};

export default Galerie;
