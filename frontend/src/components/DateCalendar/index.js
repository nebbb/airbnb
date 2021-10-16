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
  const [initialMonth, setInitialMonth] = useState(
    moment("10-18-2021", "MM-DD-YYYY")
  );

  if (!initialMonth) return <div>Loading...</div>;

  return (
    <div>
      <DayPickerRangeController
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
