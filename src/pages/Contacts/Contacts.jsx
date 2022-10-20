import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// import du scss galerie
import './contacts.scss';

const Contacts = () => {
    // Logique du formulaire
    // Récupération de données du formulaire
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Alerte en cas d'email invalide
    const emailValidation = () => {
        const isValid = document.getElementById('isValid');
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (email.match(regex)) {
            isValid.style.display = 'none';
            return true;
        } else {
            isValid.style.display = 'block';
            return false;
        }
    };

    // Alerte en cas de champs incomplets
    const isIncomplete = () => {
        const invalide = document.getElementById('alertMessage');
        invalide.style.visibility = 'visible';
        document.getElementById('prénom').classList.add('alert');
        document.getElementById('nom').classList.add('alert');
        document.getElementById('email').classList.add('alert');
    };

    // Message de validation d'envoi
    const success = () => {
        const success = document.getElementById('alertMessage');
        success.innerHTML =
            'Le message a bien été envoyé, nous vous répondrons très rapidement';
        success.style.visibility = 'visible';
        success.style.background = '#55acee';
        setTimeout(() => {
            success.style.visibility = 'hidden';
        }, 5000);
    };

    // Soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstname && lastname && email && emailValidation()) {
            successInfos('template_dxqbyfb', {
                firstname,
                lastname,
                email,
                message,
            });
        } else {
            isIncomplete();
        }
    };

    // communication de l'email & remise à zéro du formulaire
    const successInfos = (templateId, variables) => {
        window.emailjs
            .send('service_m8kd046', templateId, variables)
            .then((res) => {
                success();
                setFirstname('');
                setLastname('');
                setEmail('');
                setMessage('');
                document.getElementById('prénom').classList.remove('alert');
                document.getElementById('nom').classList.remove('alert');
                document.getElementById('email').classList.remove('alert');
            })
            .catch(
                (err) =>
                    (document.getElementById('alertMessage').innerHTML =
                        "une erreur s'est produite, veuillez réessayer.")
            );
    };

    return (
        <div className='form'>
            <Header />
            <form className='form__container'>
                <span id='alertMessage'>
                    Les champs indiqués en rouge sont requis, merci de les
                    compléter
                </span>
                <label htmlFor='prénom'>Prénom</label>
                <input
                    type='text'
                    id='prénom'
                    placeholder='Votre prénom - champs obligatoire'
                    onChange={(e) => {
                        setFirstname(e.target.value);
                    }}
                    value={firstname}
                    autoFocus
                    required
                />
                <label htmlFor='nom'>Nom</label>
                <input
                    type='text'
                    id='nom'
                    placeholder='Votre nom - champs obligatoire'
                    onChange={(e) => {
                        setLastname(e.target.value);
                    }}
                    value={lastname}
                    required
                />
                <label htmlFor='email'>Email</label>
                <span id='isValid'>
                    Merci de vérifier la validité de l'email renseigné
                </span>
                <input
                    type='email'
                    id='email'
                    placeholder='Votre email - champs obligatoire'
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    value={email}
                    required
                />
                <label htmlFor='message'>Message</label>
                <textarea
                    name='message'
                    id='message'
                    cols='105'
                    rows='7'
                    placeholder='Votre message - Nous vous répondrons rapidement'
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    value={message}
                ></textarea>
                <button type='submit' onClick={handleSubmit}>
                    Envoyer
                </button>
            </form>
            <Footer />
        </div>
    );
};

export default Contacts;
