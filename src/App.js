import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';

import Home from './pages/Home/Home';
import Photos from './pages/Galerie/Galerie';
import Calendrier from './pages/Calendrier/Calendrier';
import Informations from './pages/Informations/Informations';
import Contacts from './pages/Contacts/Contacts';
import Meteo from './pages/Meteo/Meteo';
import Map from './pages/Map/Map';
import Error404 from './pages/Error404/Error404';

import '../src/sass/main.scss';

function App() {
    return (
        <div className='app'>
            <Nav />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/photos' element={<Photos />} />
                    <Route path='/calendrier' element={<Calendrier />} />
                    <Route path='/informations' element={<Informations />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/meteo' element={<Meteo />} />
                    <Route path='/plan' element={<Map />} />
                    {/* path="*" produit une erreur en console, à vérifier plus tard */}
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
