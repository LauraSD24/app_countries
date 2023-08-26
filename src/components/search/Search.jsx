import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import {ContextProviderCountries} from '../../context/ContextCountries.jsx';
import "./Search.css";

function Search() {
    const [isOpen,setIsOpen]=useState(false);
    const {setListSearch,listCountries,loader, setLoader} = useContext(ContextProviderCountries);

    const [search,setSearch] = useState("");
    const [valueFilter,setValueFilter]=useState("Filter by region");


    useEffect(()=>{
      setLoader(true)
      setListSearch([...listCountries.filter((co)=>co.name.toLowerCase().includes(search.toLowerCase()))])
      setLoader(false)
      
    },[search])

    function changeTextFilter(value) {
      setIsOpen(false);
      setValueFilter(value);
    }

    useEffect(()=>{

      setListSearch([...listCountries.filter((co)=>co.region.toLowerCase()===valueFilter.toLowerCase())]);

    },[valueFilter])

  return (
    <div className="search">
      <div className="search_input">
        <i className="uil uil-search icon_search"></i>
        <input onInput={(e)=>setSearch(e.target.value)} type="text" placeholder="Search for a country..." />
      </div>
      <div className="filter_container">
        <div onClick={()=>setIsOpen(!isOpen)} className="search_filter">
          <input value={valueFilter}  readOnly type="text" placeholder="Filter by region" />
          <i className="uil uil-angle-down icon_filter"></i>
        </div>
        {isOpen===true ? 
        <div className="filter_options">
        <span onClick={(e)=>changeTextFilter(e.target.textContent)}>Africa</span>
        <span onClick={(e)=>changeTextFilter(e.target.textContent)}>Americas</span>
        <span onClick={(e)=>changeTextFilter(e.target.textContent)}>Asia</span>
        <span onClick={(e)=>changeTextFilter(e.target.textContent)}>Europe</span>
        <span onClick={(e)=>changeTextFilter(e.target.textContent)}>Oceania</span>
        <span onClick={(e)=>changeTextFilter("Filter by region")}>Clear filter</span>

        </div> : ""}
        
      </div>
    </div>
  );
}

export default Search;
