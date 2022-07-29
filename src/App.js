import {  BiArchive,BiTrash  } from "react-icons/bi"; 
import './App.css';
import Search from './components/Search/Search';
import NameList from './data.json';

import AddAppointment from './components/AddAppointment/AddAppointment';
import AppointmentInfo from "./components/AppointmentInfo/AppointmentInfo";

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thick">
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-400 align-top" />Your Appointments</h1>
      <AddAppointment/>
      <Search />
      <ul>
       { NameList.map(x =>(
          <AppointmentInfo x={x}/>
        ))
       }
      </ul>
  </div>
  );
}

export default App;
