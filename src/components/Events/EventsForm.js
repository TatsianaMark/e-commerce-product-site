import React from 'react';
import '../../styles/events/events.css';
import {DropdownEvent} from "./DropdownEvent";
import {DropdownCity} from "./DropdownCity";
import {DatePicker} from "../DatePicker/DatePicker";


export class EventsForm extends React.PureComponent {
    render() {
        return (
            <div className="bg_events_forms">
                <div className="bg_events_forms_content">
                    <h2>Events in Belarus</h2>
                </div>
                    <form action="/" method="GET" className="event-search">
                        <div className="field">
                            <DropdownEvent/>
                        </div>
                        <div className="field-group">
                         <div className="field">
                             <div className="field-date-picker">
                                <DatePicker/>
                             </div>
                         </div>
                        </div>
                        <div className="field">
                            <DropdownCity/>
                            {/*/!*<label htmlFor="I'm looking for">*!/*/}
                            {/*<input type="text" id="where" name="where" placeholder="Where?"/>*/}
                            {/*/!*</label>*!/*/}
                        </div>
                        <div className="field">
                            <button className="button">Show</button>
                        </div>
                    </form>
            </div>
        )
    }
}