import React from 'react';
import Calendar from 'reactjs-availability-calendar';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Calendrier() {
    const bookings = [
        {
            from: '2022-04-08',
            to: '2022-04-13',
            middayCheckout: true,
        },
    ];

    return (
        <>
            <Header />
            <Calendar bookings={bookings} />
            <Footer />
        </>
    );
}
