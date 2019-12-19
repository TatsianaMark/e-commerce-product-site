import React from 'react';
import '../../styles/events/dropdownEvent.css';


export class DropdownCity extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            drop_filter_city:[
                { id: "minsk",  filter: "Minsk"},
                { id: "minsk_reg",  filter: "Minsk region"},
                { id: "brest_reg",  filter: "Brest region"},
                { id: "grodno_reg",  filter: "Grodno region"},
                { id: "mogilev_reg",  filter: "Mogilev region"},
                { id: "gomel_reg",  filter: "Gomel region"},
                { id: "vitebsk_reg",  filter: "Vitebsk region"},
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <select id ="city" className="dropdown_select">
                {this.state.drop_filter_city.map(filter =>(
                    <option key={filter.id} value={filter.filter}> {filter.filter}</option>
                ))}
            </select>

        );
    }
}