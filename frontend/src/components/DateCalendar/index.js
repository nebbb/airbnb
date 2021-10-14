import React from "react";
import { useState } from "react";
import moment from "moment";
import { DayPickerRangeController } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

const DateCalendar = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState("startDate");
  const [initialMonth, setInitialMonth] = useState(moment("01-01-2021"));

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(moment(startDate, "MMM DD, YYYY"));
    setEndDate(moment(endDate, "MMM DD, YYYY"));
  };

  const handleMonthChange = () => {
    setInitialMonth(null);
    setTimeout(() => setInitialMonth(moment("01-06-2021")), 0);
  };

  if (!initialMonth) return <div>Loading...</div>;

  return (
    <div>
      <DayPickerRangeController
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        startDate={startDate}
        endDate={endDate}
        numberOfMonths={2}
        initialVisibleMonth={() => initialMonth}
      />
    </div>
  );
};

export default DateCalendar;
