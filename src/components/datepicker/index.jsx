import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HabitDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <input
        type="date"
        onChange={date => setSelectedDate(date)}
        className="form-control bg-white fs-6 py-3"
        id="habitDate"
      />
    </div>
  );
};

export default HabitDate;