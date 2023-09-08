import React from 'react'
import { useContextCountry } from '../../context/ContextCountries';

const DetailsCountry = () => {
    const {countrySelected,setCountrySelected}=useContextCountry();

  return (
    <div>
        <button onClick={()=>setCountrySelected(null)}>Back</button>
        {JSON.stringify(countrySelected)}
    </div>
  )
}

export default DetailsCountry;