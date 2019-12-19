import React from 'react';
import Title from "./Title";
// import React ,{useState, useEffect} from 'react';


    // useEffect(  // const[items,setItems]= useState([]);
    //     //
    //     // const fetchItem = async ()=>{
    //     //     const data = await fetch(
    //     //         'https://fortnite-api.theapinetwork.com/upcoming/get'
    //     //     );
    //     //
    //     //     const items = await data.json();
    //     //     console.log(items.items);
    //     //     setItems(items.items)() =>{
    //    fetchItem();
    // },[]);


    // };
 export class Tours extends React.Component {
        render() {
            return (
                <div className="toursPage">
                    <div className="container">
                        <Title name="tours"/>

                    </div>
                </div>
            )
        }
    }