
import React from 'react';
import { BiSearch, BiCaretDown,BiCheck } from "react-icons/bi";
import { useState } from 'react';
// import PropTypes from 'prop-types';
import './Search.css';

const Dropdown=({sortBy,orderBy,onChangeOrder,onChangeSort,showDropDown,setShowDropDown})=>{
  return(
    <div className="origin-top-right absolute right-0 mt-2 w-56
    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu"  >
      <div onClick={()=>onChangeSort("petName")}
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        role="menuitem"> Pet Name {sortBy==="petName" &&<BiCheck />}</div>
      <div onClick={()=>onChangeSort("ownerName")}
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        role="menuitem">Owner Name  {sortBy==="ownerName" &&<BiCheck />}</div>
      <div  onClick={()=>onChangeSort("aptDate")}
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        role="menuitem">Date {sortBy==="Date" &&<BiCheck />}</div>
      <div onClick={()=>onChangeOrder("Asc")}
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
        role="menuitem">Asc {orderBy==="Asc" &&<BiCheck />}</div>
      <div onClick={()=>onChangeOrder("Dsc")}
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        role="menuitem">Desc {orderBy==="Dsc" &&<BiCheck />}</div>
    </div>
  </div>
  )
}


const Search = ({query,findMe,sortBy,orderBy,onChangeOrder,onChangeSort,}) => {
const [showDropDown,setShowDropDown]=useState(false);

return(
  <div className="py-5">
    <div className="mt-1 relative rounded-md shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <BiSearch />
        <label htmlFor="query" className="sr-only" />
      </div>
      
      <input type="text" name="query" id="query" value={query}
      onChange={(event)=>{findMe(event.target.value)}}
        className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Search" />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <div>
          <button type="button" onClick={()=>setShowDropDown(!showDropDown)}
            className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center" id="options-menu" aria-haspopup="true" aria-expanded="true">
            Sort By <BiCaretDown className="ml-2" />
          </button>
         {showDropDown && <Dropdown  
          sortBy={sortBy}
          orderBy={orderBy}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
          setShowDropDown={setShowDropDown}
          showDropDown={showDropDown}
          />}
        </div>
      </div>
    </div>
</div>
)};


export default Search;
