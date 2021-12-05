import React from 'react';

const Details = (props) => {
    const { country } = props;

    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const boolFormat = (x) => {
        if (x === 1) {
            return "Yes";
        } else {
            return "No";
        }
    };

    return (
        <div className="details">
            <h1>{country.flag_emoji} {country.common_name}</h1>
            <ul>
                <li>Official Name : {country.official_name}</li>
                <li>Domain Name : {country.tld}</li>
                <li>Female Demonym : {country.female_demonym}</li>
                <li>Male Demonym : {country.male_demonym}</li>
                <li>Independent : {boolFormat(country.independent)}</li>
                <li>United Nations Member : {boolFormat(country.unMember)}</li>
                <li>Latitude : {country.lat}</li>
                <li>Longitude : {country.lng}</li>
                <li>Population : {numberFormat(country.population)}</li>
                <li>Continent : {country.continent.name}</li>
                <li>Region : {country.region.name}</li>
                <li><a href={country.openstreetmap} rel="noopener noreferrer" target='_blank'>Click here to see in OpenStreetMap</a></li>
                <li>Flag : <br /><img src={country.flag_png} alt={country.common_name} /></li>
                <li>Coat of arms : <br /><img src={country.coat_of_arms} alt={country.common_name} /></li>
            </ul>
        </div>
    );
};

export default Details;