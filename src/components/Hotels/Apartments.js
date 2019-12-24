import React from 'react';
import Hero from "./Hero";
import {Link} from "react-router-dom";
import {Banner} from "../Banner";


export function Apartments () {

    return (
        <Hero hero="roomsHero">
            <Banner title="our apartments">
                <Link to='/hotels' className="btn-primary" >
                    return hotels
                </Link>
            </Banner>
        </Hero>
    )
}