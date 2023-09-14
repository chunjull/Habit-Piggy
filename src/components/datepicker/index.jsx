import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <input
        type="date"
        onChange={date => setSelectedDate(date)}
        className="form-control fs-6 border border-lightgray bg-white w-100"
        id="contactDate"
      />
    </div>
  );
};

export default ContactDate;