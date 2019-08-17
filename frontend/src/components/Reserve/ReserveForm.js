import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default props => {
    const { partySize, name, startDate, handleChange, handleAdd, handleSubmit } = props;
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
                    value="Pick a Date and Time"
                />
                <br />
                <button type="submit" onClick={handleAdd} >Reserve your table</button>
            </form>
        )
    }