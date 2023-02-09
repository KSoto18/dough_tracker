// Main Imports
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// Style Imports
import './App.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";

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

const bill = [
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

  const [newBill, setNewBill] = useState({ title: "", start: "", end: "" });
  const [allBills, setAllBills] = useState(bill);


  function handleAddBill() {
    setAllBills([...allBills, newBill])
  }

  return (

    <div className="App">

       <Header/>

      <h1>BILLS</h1>
      <h2>Add New Bill</h2>

      {/* NEW BILL INPUT AREA */}
      <div>
        <input type="text" placeholder="Add Bill"
          value={newBill.title} onChange={(e) => setNewBill({ ...newBill, title: e.target.value })}
        />

        {/* Start Date Picker */}
        <DatePicker placeholderText="Start Date"
          selected={newBill.start} onChange={(start) => setNewBill({ ...newBill, start })} />

        {/* End Date Picker */}
        <DatePicker placeholderText="End Date"
          selected={newBill.end} onChange={(end) => setNewBill({ ...newBill, end })} />

          <button onClick={handleAddBill}>Add!</button>
      </div>

      <Calendar
        localizer={localizer}
        events={allBills}
        startAccessor="start"
        endAccessort="end"
        style={{ height: 500, margin: "100px" }}
      />

      <Footer/>

    </div>
  );
}

export default App;
