import React from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import Loader from '../Loader/Loader';

const Map = () => {
    const center = {
        lat: 46.024474,
        lng: 2.493728,
    };

    // Vérifie isLoaded or not ...
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPAPIKEY,
    });

    if (!isLoaded) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    return (
        <div>
            <div className='map__container'>
                <GoogleMap
                    center={center}
                    zoom={15}
                    mapContainerStyle={{
                        width: '100%',
                        height: '100%',
                        border: 'solid 2px #d2c61c',
                    }}
                >
                    <Marker title={"La Maison d'Odile"} position={center} />
                </GoogleMap>
            </div>
        </div>
    );
};

export default Map;
