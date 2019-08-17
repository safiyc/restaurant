import React, { Component } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// import ReserveForm from './ReserveForm';


export default class Reserve extends Component {
    constructor(props){
        super(props);
        this.state = {
            partySize: "",
            name: "",
            startDate: new Date()
        }
    }

    handleAdd = () => {
        console.log(this);
    }

    handleChange = (e) => {
        this.setState({
            partySize: e.target.value,
            name: e.target.value,
            startDate: e.target.value
        });

        // this is a way to do it.
        // this.setState(prevState => ({
        //     ...prevState,
        //     partySize: e.target.value,
        //     name: e.target.value,
        //     startDate: e.target.value
        // }))

        // this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render(){
        const { partySize, name, startDate, handleChange, handleAdd, handleSubmit } = this.state;
        return (

            <form onSubmit={handleSubmit}>
                Party Size:
                <input  value={partySize} onChange={handleChange} />
                <br />
                Name:
                <input  value={name} onChange={handleChange}/>
                <br />

                <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                    value={startDate}
                />
                <br />
                <button type="submit" onClick={handleAdd} >Reserve your table</button>
            </form>

            // <div>
            //     <ReserveForm 
            //         partySize={partySize} 
            //         name={name} 
            //         startDate={startDate}
            //         handleChange={handleChange}
            //         handleAdd={handleAdd}
            //         handleSubmit={handleSubmit}
            //     />
            // </div>
        )
    }
}