import React, { Component } from 'react';
import ReserveForm from './ReserveForm';

export default class ReserveButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            partySize: 1,
            name: 'john'

        }
    }

    render(){
        const { partySize, name } = this.state;
        return (
            <div>
                <ReserveForm partySize={partySize} name={name} />
            </div>
        )
    }
}
