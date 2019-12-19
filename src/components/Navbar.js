import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logo from '../logoEco.png';
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ButtonContainer} from "./Button";
// import styled from 'styled-components';
import {FaBars} from "react-icons/fa";


export class Navbar extends Component {
    state = {
        isOpen: false

    };
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to='/'>
                        <img src={logo} alt="OpenEcoBel"/>
                    </Link>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaBars className='nav-icon'/>
                    </button>
                </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/" className="nav-link">
                            product
                        </Link>
                    </li>
                    <li>
                        <Link to="/tours" className="nav-link">
                            tours
                        </Link>
                    </li>
                    <li>
                        <Link to="/hotels" className="nav-link">
                            hotels
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="nav-link">
                            blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/events" className="nav-link">
                            events
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-5">
                    <ButtonContainer>
                        <span className="mr-2">
                            <FontAwesomeIcon icon={faCartPlus}/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </div>
        </nav>
    }
}
