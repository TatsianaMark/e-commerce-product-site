import React, {Component} from 'react';
import TitleService from "./TitleService";
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "free cocktails",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ratione? '

            },
            {
                icon: <FaHiking/>,
                title: "Endless hiking",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ratione? '

            },
            {
                icon: <FaShuttleVan/>,
                title: "free shuttle",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ratione? '

            },
            {
                icon: <FaBeer/>,
                title: "strongest beer",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, ratione? '
            }
        ]
    };

    render() {
        return (
            <div className="services">
                <TitleService title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return (
                            <article key ={index} className="service">
                                <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                    );
                    })}
                </div>
            </div>
        );
    }
}





































