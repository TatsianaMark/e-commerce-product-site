import React from 'react';
import Hero from "./Hero";
import {Link} from "react-router-dom";
import {Banner} from "../Banner";

// import {Link} from "react-router-dom";


export function Apartments () {
    return <Hero hero="roomsHero">
        <Banner title="our apartments">
            <Link to='/' className="btn-primary" >
                return home
            </Link>
        </Banner>
    </Hero>;

}