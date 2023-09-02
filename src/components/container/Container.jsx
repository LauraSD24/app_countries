import React from 'react'
import Search from '../search/Search';
import GridCountry from '../GridCountry/GridCountry';
import { useContextCountry } from '../../context/ContextCountries';
import DetailsCountry from '../details/DetailsCountry';

const Container = () => {
    const {countrySelected}=useContextCountry();
  return (
    <>
         {countrySelected===null ? (
          <>
            <Search />
            <GridCountry />
          </>
        ) : (
            <DetailsCountry/>
        )}
    </>
  )
}

export default Container;