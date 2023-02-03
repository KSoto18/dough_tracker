// Main Imports
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

// Style Imports
import './App.css';
import "react-big-calendar/lib/css/react-big-calendar.css";


const locales = {
  "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const bills= [
  {
    title: "Capital One",
    start: new Date(2023, 1, 3),
    end: new Date(2023, 1, 3)
  },

  {
    title: "Netflix",
    start: new Date(2023, 1, 3),
    end: new Date(2023, 1, 3)
  },

]

function App() {
  return (

    <div className="App">

      <Calendar 
      localizer={localizer} 
      events={bills}
      startAccessor="start" 
      endAccessort="end" 
      style={{height: 500, margin: "100px"}}
      />

    </div>
  );
}

export default App;
