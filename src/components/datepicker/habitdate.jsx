import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HabitDate = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  function onChangeDateHandler(value) {
    console.log(value);
    //setStartDate(value);
  };

  return (
    <div>
      <input
        type="date"
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={onChangeDateHandler}
        className="form-control fs-6 border border-lightgray bg-white w-100"
        id="habitDate"
      />
    </div>
  );
};

export default HabitDate;