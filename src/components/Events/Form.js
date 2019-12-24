import React, {Component, Fragment} from 'react';

const Positions = [
    {
        id: 'mi',
        value:'Minsk',
        title:'Minsk region',
    },
    {
        id: 'gr',
        value:'Grodno',
        title:'Grodno region',
    },
    {
        id: 'br',
        value:'Brest',
        title:'Brest region',
    }  ,
    {
        id: 'go',
        value:'Gomel',
        title:'Gomel region',
    },
    {
        id: 'vi',
        value:'Vitebsk',
        title:'Vitebsk region',
    },
    {
        id: 'mo',
        value:'Mogilev',
        title:'Mogilev region',
    }  ,
];

class Form extends Component{

    state ={
        inputText:'',
        inputDate:'',
        showData:{
            name:'',
            number:'',
        }
    };

    handleInputChange = ({ target: {value}})=>{
        this.setState({
            inputText:value,
        })
    };
    handleInputDateChange = ({ target: {value}})=>{
        this.setState({
            inputDate:value,
        })
    };
    handleSelectChange = ({ target: {value}})=>{
        this.setState({
            selectText:value,
        })
    };

    handleShow =(e) =>{
        e.preventDefault();
        const { inputText, inputDate,selectText } = this.state;
        this.setState({
            inputText:'',
            inputDate:'',
            selectText:'',
            showDate:{
                name: inputText,
                number: inputDate,
                position:'',
            }

        })
    };


    render(){
        const{ inputText, inputDate,selectText,showData } = this.state;
        const {name, number, position } = showData;
        return(
            <Fragment>
             <form action="/" method="GET" className="events-form">
                <label>
                    I'm looking for :
                    <input type="text" name="name" value={inputText} onChange={this.handleInputChange}/>
                    <select value={selectText} onChange={this.handleSelectChange}>
                        {Positions.map(({id, value, title})=>(
                            <option key={id} value={value}>{title}</option>
                        ))}
                    </select>
                </label>
                <label>
                    When?
                    <input type="date" name="number" value={inputDate} onChange={this.handleInputDateChange}/>
                </label>
                <button onClick={this.handleShow}>Show</button>
             </form>
                <h2>{name}</h2>
                <h3>{number}</h3>
                <h3>{position}</h3>

            </Fragment>
        );
    }
}

export default Form;