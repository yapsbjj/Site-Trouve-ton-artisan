import React, { useState } from 'react';
import '../components/ArtisanProfilePage.css';
import { useParams } from 'react-router-dom';
import artisansData from './data/datas.json';
import Header from './Header';
import Footer from './Footer';

const ArtisanProfilePage = () => {
    const { id } = useParams();
    const artisan = artisansData.find(artisan => artisan.id === id);

    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendEmail = (formData, artisanEmail) => {
        console.log('Formulaire soumis avec les données :', formData);
        console.log('E-mail de l\'artisan :', artisanEmail);
    };

    const handleSubmit = e => {
        e.preventDefault();
        sendEmail(formData, artisan.email);
        console.log('Formulaire soumis avec les données :', formData);
    };

    return (
        <div>
            <Header />
            <h1>{artisan.name}</h1>
            <p>Note : {artisan.note}/5 étoiles</p>
            <p>Spécialité : {artisan.specialty}</p>
            <p>Localisation : {artisan.location}</p>
            <h2>A propos :</h2>
            <p>{artisan.about}</p>
            {artisan.website && <p>Site web : <a href={artisan.website} target="_blank" rel="noopener noreferrer">{artisan.website}</a></p>}
            <h2>Contactez {artisan.name}</h2>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom :
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label>
                        Objet :
                        <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
                    </label>
                    <label>
                        Message :
                        <textarea name="message" value={formData.message} onChange={handleChange} />
                    </label>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default ArtisanProfilePage;
