import React from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default props => {
    const { partySize, name, startDate, handleChange } = props;
    return (
            <form onChange={handleChange}>
                Party Size:
                <input type='text' value={partySize} />
                <br />
                Name:
                <input type='text' value={name}/>
                <br />
                Date:

                <DatePicker
                    selected={startDate}
                    onChange={handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="time"
                    value="Pick a Date and time"
                />
                <br />
                <button type="submit">Reserve your table</button>
            </form>
        )
    }