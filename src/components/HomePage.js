import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../components/HomePage.css';
import artisansDuMois from '../components/data/datas.json';

const HomePage = () => {
    const troisArtisansTop = artisansDuMois.filter(artisan => artisan.top);

    return (

        <div className='container'>
            <Header />
            <h1>Comment trouver mon artisan ?</h1>
            <div className='explication'>
                <div className='stepOne'>
                    <h2> 1. Choisir la catégorie d’artisanat dans le menu.</h2>
                </div>
                <div className='stepTwo'>
                    <h2> 2. Choisir un artisan.</h2>
                </div>
                <div className='stepThree'>
                    <h2> 3. Le contacter via le formulaire de contact.</h2>
                </div>
            </div>
            <div className='stepFour'>
                <h2>Une réponse sera apportée sous 48h.</h2>
            </div>
            <div className='TopArtist'>
                <div className='title'>
                    <h2>Les artisans du mois !</h2> <br />
                </div>
                <div className='ranking'>
                    {troisArtisansTop.slice(0, 3).map(artisan => (
                        <div key={artisan.id}>
                            <h2>{artisan.name}</h2>
                            <p>Note : {artisan.note}/5 étoiles</p>
                            <p>Spécialité : {artisan.specialty}</p>
                            <p>Localisation : {artisan.location}</p>
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div >

    );
}

export default HomePage;
