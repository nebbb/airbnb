import React, { Component } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
    };
  }

  render() {
    return (
      <DateRangePicker
        startDate={this.state.startDate}
        startDateId="aa_start_date_id"
        endDate={this.state.endDate}
        endDateId="aa_end_date_id"
        onDatesChange={({ startDate, endDate }) => {
          this.setState({ startDate, endDate });
        }}
        focusedInput={this.state.focusedInput}
        onFocusChange={(focusedInput) => this.setState({ focusedInput })}
      />
    );
  }
}
export default DatePicker;
