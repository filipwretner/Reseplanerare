// Header.tsx - Component that renders the header
import React from 'react';

interface HeaderProps {
    title: string;
}

function Header({title}: HeaderProps ): JSX.Element {
    
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;