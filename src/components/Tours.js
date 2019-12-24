import React from 'react';
import city1 from '../images/city1.jpg';
import city3 from '../images/city3.jpeg';

import {FaStar} from "react-icons/fa";
import{FaStarHalf} from "react-icons/fa";

 export class Tours extends React.Component {
        render() {
            return (
                <div className="toursPage">
                    <section className="features py-5 text-center">
                        <h1> Your Feature Destinations</h1>
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="feature-box">
                                        <div className="feature-img">
                                            <img src={city1} alt="cit1"/>
                                            <div className="price">
                                                <p>600$</p>
                                            </div>
                                            <div className="rating">
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStarHalf/>
                                            </div>
                                        </div>
                                        <div className="features-details py-3">
                                            <h4 >Los Angeles</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius hic neque quia quod, reprehenderit sapiente vel? Aliquid nemo neque provident?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at beatae cum deserunt nobis quaerat quas reiciendis repellendus sed veniam!</p>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4 ">
                                    <div className="feature-box">
                                        <div className="feature-img">
                                            <img src={city3} alt="cit1"/>
                                            <div className="price">
                                                <p>600$</p>
                                            </div>
                                            <div className="rating">
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStarHalf/>
                                            </div>
                                        </div>
                                        <div className="features-details py-3">
                                            <h4 >Los Angeles</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius hic neque quia quod, reprehenderit sapiente vel? Aliquid nemo neque provident?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at beatae cum deserunt nobis quaerat quas reiciendis repellendus sed veniam!</p>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="feature-box">
                                        <div className="feature-img">
                                            <img src={city1} alt="cit1"/>
                                            <div className="price">
                                                <p>600$</p>
                                            </div>
                                            <div className="rating">
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStarHalf/>
                                            </div>
                                        </div>
                                        <div className="features-details py-3">
                                            <h4 >Los Angeles</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius hic neque quia quod, reprehenderit sapiente vel? Aliquid nemo neque provident?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at beatae cum deserunt nobis quaerat quas reiciendis repellendus sed veniam!</p>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="feature-box">
                                        <div className="feature-img">
                                            <img src={city3} alt="cit1"/>
                                            <div className="price">
                                                <p>600$</p>
                                            </div>
                                            <div className="rating">
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStarHalf/>
                                            </div>
                                        </div>
                                        <div className="features-details py-3">
                                            <h4 >Los Angeles</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius hic neque quia quod, reprehenderit sapiente vel? Aliquid nemo neque provident?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at beatae cum deserunt nobis quaerat quas reiciendis repellendus sed veniam!</p>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="feature-box">
                                        <div className="feature-img">
                                            <img src={city1} alt="cit1"/>
                                            <div className="price">
                                                <p>600$</p>
                                            </div>
                                            <div className="rating">
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStarHalf/>
                                            </div>
                                        </div>
                                        <div className="features-details py-3">
                                            <h4 >Los Angeles</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius hic neque quia quod, reprehenderit sapiente vel? Aliquid nemo neque provident?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at beatae cum deserunt nobis quaerat quas reiciendis repellendus sed veniam!</p>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="feature-box">
                                        <div className="feature-img">
                                            <img src={city3} alt="cit1"/>
                                            <div className="price">
                                                <p>600$</p>
                                            </div>
                                            <div className="rating">
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStar/>
                                                <FaStarHalf/>
                                            </div>
                                        </div>
                                        <div className="features-details py-3">
                                            <h4 >Los Angeles</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius hic neque quia quod, reprehenderit sapiente vel? Aliquid nemo neque provident?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at beatae cum deserunt nobis quaerat quas reiciendis repellendus sed veniam!</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
    }

