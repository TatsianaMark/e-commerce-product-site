
import React, {Component} from "react";
import TitleService from "./TitleService";

export  class Search extends Component{
    render(){
        return(
            <div className="filter-container">
                < TitleService title="search"/>
                <form className="filter-form">
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select
                            name="type"
                            id="type"
                            className="form-control"
                        >
                            gkg
                        </select>
                    </div>
                </form>
            </div>
        )

    }

}