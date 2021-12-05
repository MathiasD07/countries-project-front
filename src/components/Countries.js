import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from "./Card";

const Countries = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://mysterious-woodland-00550.herokuapp.com/api/countries', {params: {fields: 'flag_png,common_name,official_name,tld'}})
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className="countries">
            <ul className="countries-list">
                {data.map((country) => (
                    <Card country={country} key={country.common_name} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;