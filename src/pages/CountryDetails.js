import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const CountryDetails = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const { countryId } = useParams();

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

    useEffect(() => {
        axios.get('https://mysterious-woodland-00550.herokuapp.com/api/countries/' + countryId)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            });
    }, [countryId]);

    if (isLoading) {
        return <div className="countrydetails">Loading...</div>;
    }

    return (
        <div className="countrydetails">
            <Logo />
            <Navigation />
            <h1>{data.flag_emoji} {data.common_name}</h1>
            <ul>
                <li>Official Name : {data.official_name}</li>
                <li>Domain Name : {data.tld}</li>
                <li>Female Demonym : {data.female_demonym}</li>
                <li>Male Demonym : {data.male_demonym}</li>
                <li>Independent : {boolFormat(data.independent)}</li>
                <li>United Nations Member : {boolFormat(data.unMember)}</li>
                <li>Latitude : {data.lat}</li>
                <li>Longitude : {data.lng}</li>
                <li>Population : {numberFormat(data.population)}</li>
                <li>Continent : {data.continent.name}</li>
                <li>Region : {data.region.name}</li>
                <li><a href={data.openstreetmap} rel="noopener noreferrer" target='_blank'>Click here to see in OpenStreetMap</a></li>
                <li>Flag : <br /><img src={data.flag_png} alt={data.common_name} /></li>
                <li>Coat of arms : <br /><img src={data.coat_of_arms} alt={data.common_name} /></li>
            </ul>
        </div>
    );
};

export default CountryDetails;