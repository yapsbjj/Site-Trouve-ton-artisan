import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import artisans from '../components/data/datas.json';

const ArtisansPage = (props) => {
    const { category } = props;

    const filteredArtisans = category
        ? artisans.filter(artisan => artisan.category === category)
        : artisans;

    return (
        <div>
            <Header />
            <h1>Liste des artisans</h1>
            {filteredArtisans.map(artisan => (
                <div key={artisan.id}>
                    <Link to={`/artisan/${artisan.id}`}>
                        <h2>{artisan.name}</h2>
                    </Link>
                    <p>Note : {artisan.note}/5 étoiles</p>
                    <p>Spécialité : {artisan.specialty}</p>
                    <p>Localisation : {artisan.location}</p>
                    <hr />
                </div>
            ))}
            <Footer />
        </div>
    );
}

export default ArtisansPage;
