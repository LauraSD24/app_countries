import { useEffect, useState } from "react";
import { useContextCountry } from "../../context/ContextCountries";
import Country from "../country/Country";
import Loader from "../loader/Loader";
import "./GridCountry.css";

function GridCountry() {
  const valuesCountries = useContextCountry();

  const [style] = useState({
    display: "flex",
    height: "200px",
    justifyContent: "center",
  });

  const [list, setList] = useState([]);

  useEffect(() => {
    setList([...valuesCountries.listCountries]);
    setTimeout(() => {
      valuesCountries.setLoader(false);
    }, 1000);
  }, []);

  return (
    <div className="grid" style={valuesCountries.loader === true ? style : {}}>
      {valuesCountries.loader === true ? (
        <Loader />
      ) : valuesCountries.listSearch.length > 0 ? (
        <>
          {valuesCountries.listSearch.map((country, index) => {
            return <Country value={country} />;
          })}
        </>
      ) : (
        <>
          {list.map((country, index) => {
            return <Country value={country} />;
          })}
        </>
      )}
    </div>
  );
}

export default GridCountry;
