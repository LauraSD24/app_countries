import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {ContextProviderCountries} from '../../context/ContextCountries.jsx';
import "./Search.css";

function Search() {
    const [isOpen,setIsOpen]=useState(false);
    const listCountries = useContext(ContextProviderCountries);

  return (
    <div className="search">
      <div className="search_input">
        <i className="uil uil-search icon_search"></i>
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div className="filter_container">
        <div onClick={()=>setIsOpen(!isOpen)} className="search_filter">
          <input readOnly type="text" placeholder="Filter by region" />
          <i className="uil uil-angle-down icon_filter"></i>
        </div>
        {isOpen===true ? 
        <div className="filter_options">
        <span>Africa</span>
        <span>América</span>
        <span>Asia</span>
        <span>Europa</span>
        <span>Oceanía</span>
        </div> : ""}
        
      </div>
    </div>
  );
}

export default Search;
