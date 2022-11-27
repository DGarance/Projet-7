import React from 'react';
import Droits from '../../assets/droits.svg';
import Logo from '../../assets/logowhite.svg';

export default function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Logo Kasa" />
            <img src={Droits} alt="droits" />
        </footer>
    );
}
