import React from 'react';
import '../components/Footer.css';
import { Link } from 'react-router-dom';
import LogoFacebook from '../images/facebook.png';
import LogoLinkedin from '../images/linkedin.png';
import LogoInsta from '../images/instagram.png';
import LogoGitHub from '../images/github.png';

const Footer = () => {
    return (
        <footer>

            <div className="content">

            </div>
            <footer className="footer">
                <div className="container-row">
                    <div className="footer-col">
                        <h4>Trouve ton artisan</h4>
                        <ul>
                            <li className='link'><Link to="/artisans">Batiments</Link></li>
                            <li className='link'><Link to="/artisans">Services</Link></li>
                            <li className='link'><Link to="/artisans">Fabrication</Link></li>
                            <li className='link'><Link to="/artisans">Alimentation</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Besoin d'aide ?</h4>
                        <ul>
                            <li className='link'><Link to="/personalData">Données personelles</Link></li>
                            <li className='link'><Link to="/mentionsLegales"> Mentions légales</Link></li>
                            <li className='link'><Link to="/accessibility">Accessibilité</Link></li>
                            <li className='link'><Link to="/cookies">Cookies</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Réseaux sociaux</h4>
                        <div class="social-links">
                            <a href="https://www.facebook.com/yassine.ramdane/"><img src={LogoFacebook} alt='logoFacebook' /></a>
                            <a href="https://github.com/yapsbjj"><img src={LogoGitHub} alt='logoGitHub' /></a>
                            <a href="https://www.instagram.com/"><img src={LogoInsta} alt='logoInstagram' /></a>
                            <a href="https://www.linkedin.com/in/yassine-ramdane-12845a160/?originalSubdomain=fr"><img src={LogoLinkedin} alt='logoLinkedin' /></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Où nous trouver?</h4>
                        <ul>
                            <li><p className='link'>
                                101 cours Charlemagne
                                CS 20033
                                69269 LYON CEDEX 02
                                France</p></li>
                            <li><a href='+33426734000' className='link'>04 26 73 40 00</a></li>
                        </ul>
                    </div>
                </div>
            </footer >


        </footer >
    );
}

export default Footer;
