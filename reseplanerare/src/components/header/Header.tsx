// Header.tsx - Component that renders the header
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    title: string;
}

function Header({title}: HeaderProps ): JSX.Element {
    
    return (
        <header>
            <h1>{title}</h1>

            <nav>
                <Link to="/">Visa aktiviteter</Link> | <Link to="/form">Ny aktivitet</Link>
            </nav>
        </header>
    );
}

export default Header;