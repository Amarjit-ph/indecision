/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Monday, February 7th 2022, 12:57:18 pm
 * Year 2022
 */
import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className='header__subtitle'>{props.subtitle}</h2>}
        </div>
    </div>
);
Header.defaultProps = {
    title: 'Indecision'
}

export default Header;