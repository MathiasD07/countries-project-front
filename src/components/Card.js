import React from 'react';
import {NavLink} from "react-router-dom";

const Card = (props) => {
    const { country } = props;

    return (
        <NavLink exact to={"/countries/" + country.id}>
            <li className="card">
                <img src={country.flag_png} alt={country.common_name} />
                <div className="data-container">
                    <ul>
                        <li>Common name : {country.common_name}</li>
                        <li>Official name : {country.official_name}</li>
                        <li>Domain name : {country.tld}</li>
                    </ul>
                </div>
            </li>
        </NavLink>
    );
};

export default Card;