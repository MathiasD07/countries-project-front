import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Details from "../components/Details";

const CountryDetails = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const { countryId } = useParams();

    useEffect(() => {
        axios.get('https://mysterious-woodland-00550.herokuapp.com/api/countries/' + countryId)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            });
    }, [countryId]);

    return (
        <div className="countrydetails">
            <Logo />
            <Navigation />
            { isLoading ? <div>Loading...</div> : <Details country={data} /> }
        </div>
    );
};

export default CountryDetails;