import React, { Component } from 'react';

import ReserveForm from './ReserveForm';


export default class Reserve extends Component {
    constructor(props){
        super(props);
        this.state = {
            partySize: 1,
            name: 'john',
            startDate: new Date()
        }
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    handleAdd = () => {
        console.log(this);
    }

    render(){
        const { partySize, name, startDate, handleChange, handleAdd } = this.state;
        return (
            <div>
                <ReserveForm 
                    partySize={partySize} 
                    name={name} 
                    date={startDate}
                    handleChange={handleChange}
                    handleAdd={handleAdd}
                />
            </div>
        )
    }
}