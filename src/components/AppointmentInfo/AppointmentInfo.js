import React from 'react';
import {  BiArchive,BiTrash  } from "react-icons/bi"; 

// import PropTypes from 'prop-types';
import './AppointmentInfo.css';

const AppointmentInfo = ({x,onDeleteAppointment}) => (
  <div className="AppointmentInfo" data-testid="AppointmentInfo">
   <li className="px-3 py-3 flex items-start">

  <button type="button" onClick={()=>{
    onDeleteAppointment(x.id)
  }}
    className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    <BiTrash /></button>

  <div className="flex-grow">
    <div className="flex items-center">
      <span className="flex-none font-medium text-2xl text-blue-500">{x.petName}</span>
      <span className="flex-grow text-right">{x.aptDate}</span>
    </div>
    <div><b className="font-bold text-blue-500">Owner:</b> {x.ownerName}</div>
    <div className="leading-tight">{x.aptNotes}</div>
  </div>
</li>
  </div>
);

// AppointmentInfo.propTypes = {};

// AppointmentInfo.defaultProps = {};

export default AppointmentInfo;
