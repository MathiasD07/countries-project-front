import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CountryDetails from "./pages/CountryDetails";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/countries/:countryId" element={<CountryDetails/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </Router>
    );
};

export default App;