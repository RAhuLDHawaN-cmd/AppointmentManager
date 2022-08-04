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
const [sortBy,setsortBy]=useState("petName");
const [orderBy,setorderBy]=useState("Asc");



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

console.log("filter run");
const filterList=appointmentList.filter(
  itx=>
    (
    itx.petName.toLowerCase().includes(query.toLowerCase())||
    itx.ownerName.toLowerCase().includes(query.toLowerCase())||
    itx.aptNotes.toLowerCase().includes(query.toLowerCase()))
).sort((a,b)=>{
  let order=orderBy==="asc"?1:-1;
  return(
    a[sortBy].toLowerCase()<b[sortBy].toLowerCase()?-1*order:1*order
  )
  })

  return (

    <div className="App container mx-auto mt-3 font-thick">
      <h1 className="text-5xl">
        <BiArchive className="inline-block text-red-400 align-top" />Your Appointments</h1>
      <AddAppointment lastid={appointmentList.reduce((max,itx)=>Number(itx.id)>max?Number(itx.id):max,0)} 
      onSendAppointment={(newAppInfo)=>{setappointmentList([...appointmentList,newAppInfo])}}/>

      <Search query={query} 
      findMe={(newquery)=>setquery(newquery)}
      
      sortBy={sortBy} orderBy={orderBy}
      onChangeOrder={(order)=>setorderBy(order)}

      onChangeSort={(name)=>{
        console.log(sortBy);
        setsortBy(name)}
      }
    
      />
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
