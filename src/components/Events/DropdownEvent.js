import React from 'react';
import '../../styles/events/dropdownEvent.css';


export class DropdownEvent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            drop_filter:[
                { id: "theatre",  filter: "Theatre"},
                { id: "museum",  filter: "Museum"},
                { id: "concert",  filter: "Concert"},
                { id: "art",  filter: "Аrt"},
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <select id="entertainment" className="dropdown_select" placeholder="I'm looking">
                {this.state.drop_filter.map(filter =>(
                    <option key={filter.id} value={filter.filter}> {filter.filter}</option>
                ))}
                {/*<option value="theatre">Theatre</option>*/}
                {/*<option value="museum">Museum</option>*/}
                {/*<option value="exhibition">Exhibition</option>*/}
                {/*<option value="concert">Concert</option>*/}
                {/*<option value=" art">Аrt</option>*/}
            </select>

        );
    }
}


