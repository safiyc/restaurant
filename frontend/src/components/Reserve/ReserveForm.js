import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default props => {
    const { partySize, partyName, startDate, handleChange, handleSubmit } = props;
    return (
            <form onSubmit={handleSubmit}>
                Party Size:
                <input 
                    name="partySize" 
                    value={partySize}
                    type='number'
                    onChange={handleChange}  
                />
                <br />
                Name:
                <input  name="partyName" value={partyName} type='text' onChange={handleChange} />
                
                <br />
                <DatePicker
                    name={startDate}
                    selected={startDate}
                />
                <button type='submit'>Reserve your table</button>
            </form>
        )
    }