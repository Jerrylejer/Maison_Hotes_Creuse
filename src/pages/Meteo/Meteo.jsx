import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './meteo.scss';

const Meteo = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: process.env.REACT_APP_APIKEY,
        lat: '46.0263',
        lon: '2.50665',
        lang: 'fr',
        unit: 'metric',
    });
    return (
        <div className='container'>
            <Header />
            <div className='meteo'>
                <ReactWeather
                    sLoading={isLoading}
                    errorMessage={errorMessage}
                    data={data}
                    lang='fr'
                    locationLabel='Auzances'
                    unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                    showForecast
                />
            </div>
            <Footer />
        </div>
    );
};

export default Meteo;

// const customStyles = {
// 	fontFamily:  'Helvetica, sans-serif',
// 	gradientStart:  '#0181C2',
// 	gradientMid:  '#04A7F9',
// 	gradientEnd:  '#4BC4F7',
// 	locationFontColor:  '#FFF',
// 	todayTempFontColor:  '#FFF',
// 	todayDateFontColor:  '#B5DEF4',
// 	todayRangeFontColor:  '#B5DEF4',
// 	todayDescFontColor:  '#B5DEF4',
// 	todayInfoFontColor:  '#B5DEF4',
// 	todayIconColor:  '#FFF',
// 	forecastBackgroundColor:  '#FFF',
// 	forecastSeparatorColor:  '#DDD',
// 	forecastDateColor:  '#777',
// 	forecastDescColor:  '#777',
// 	forecastRangeColor:  '#777',
// 	forecastIconColor:  '#4BC4F7',
// };

// 		<ReactWeather
// 			theme={customStyles}
// 			...
// 		/>
