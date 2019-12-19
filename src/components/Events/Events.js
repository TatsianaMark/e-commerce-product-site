import React from 'react';
// import Form from "./Form";
import '../../styles/events/events.css';
import  { EventsForm } from "./EventsForm";

export class Events extends React.PureComponent {
    render() {
        return (
            <div>
                <EventsForm/>
            </div>
        )
    }
}

