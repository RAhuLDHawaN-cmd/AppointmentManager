import {  BiArchive,BiTrash  } from "react-icons/bi"; 
import './App.css';

import Search from './components/Search/Search';
// import NameList from './data.json';
import AddAppointment from './components/AddAppointment/AddAppointment';
import AppointmentInfo from "./components/AppointmentInfo/AppointmentInfo";
import { useCallback, useEffect, useState } from "react";

function App() {
 
const [appointmentList,setappointmentList]=useState([]);

const [query,setquery]=useState("");

const filterList=appointmentList.filter(itx=>
  {
    itx.petName.tolowerCase().includes(query.toLowerCase())||
    itx.ownerName.tolowerCase().includes(query.toLowerCase())||
    itx.aptNotes.tolowerCase().includes(query.toLowerCase()
    )
  });

  const fetchData= useCallback(()=>{
    console.log("fetch called clbk")
    fetch('./data.json')
    .then(response=>response.json())
    .then(data=>{setappointmentList(data)
    });
  },[] )

  useEffect(()=>{
     fetchData()
      
  },[fetchData])

  return (

    <div className="App container mx-auto mt-3 font-thick">
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-400 align-top" />Your Appointments</h1>
      <AddAppointment/>
      <Search query={query} 
      findMe={(newquery)=>{
       console.log("change callled");
        setquery(newquery)



      }}/>
      <ul>
       { filterList.map((xi,key)=>(
          <AppointmentInfo x={xi} key={xi.id}
          onDeleteAppointment={(delid)=>
           setappointmentList(appointmentList.filter(x=>x.id!==delid))
             }
          />
        ))
       }
      </ul>
  </div>
  );
}

export default App;
