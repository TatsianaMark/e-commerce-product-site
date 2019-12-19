import React from 'react';
import Hero from "./Hero";
import {Banner} from "../Banner";
import {Link} from "react-router-dom";
import {Services} from "./Services";


export default function () {
    return (
        <>
        <Hero>
        <Banner title="luxurious hotels" subtitle="deluxe apartments starting at $299">
            <Link to='/hotels/:apartments' className="btn-primary">
              our apartments
            </Link>
        </Banner>
        </Hero>
            <Services/>
        </>
    );

}


