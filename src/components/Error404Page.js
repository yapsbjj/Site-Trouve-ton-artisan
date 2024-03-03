import React from 'react';
import NotFound from '../images/imgError.webp';
import './Error404page.css';
import { Link } from 'react-router-dom';



const Error404Page = () => {
    return (
        <div className='error-container'>
            <h1>Erreur 404</h1>
            <div className='image-container'>
                <img src={NotFound} alt="Page not found" />

            </div>
            <p><Link to='/'>Revenir à l'accueil</Link></p>
        </div>
    );
}

export default Error404Page;

