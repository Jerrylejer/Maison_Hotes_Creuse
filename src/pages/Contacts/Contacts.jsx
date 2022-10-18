import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// import du scss galerie
import './contacts.scss';

const Contacts = () => {
    return (
        <div className="form">
            <Header />
            <form className="form__container">
                <label htmlFor="prénom">Prénom</label>
                <input type="text" id="prénom" placeholder="Votre prénom - champs obligatoire" autoFocus required/>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" placeholder="Votre nom - champs obligatoire" required/>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="Votre email - champs obligatoire" required/>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="105" rows="7" placeholder="Votre message - Nous vous répondrons rapidement" required></textarea>
                <button type="submit">Envoyer</button>
            </form>
            <Footer />
        </div>
    );
};

export default Contacts;
