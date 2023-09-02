import { useContextCountry } from "../../context/ContextCountries";

function Country(props) {
  const {setCountrySelected} = useContextCountry();
  return (
    <div className="grid_item" key={props.value.name} onClick={()=>setCountrySelected({...props.value})}>
      <img src={props.value.flag} alt="" className="item_img" />
      <div className="item_content">
        <h3 className="item_name">{props.value.name}</h3>
        <p className="item_data">
          <strong>Population:</strong> {props.value.population}{" "}
        </p>
        <p className="item_data">
          <strong>Region:</strong> {props.value.region}{" "}
        </p>
        <p className="item_data">
          <strong>Capital:</strong> {props.value.capital}{" "}
        </p>
      </div>
    </div>
  );
}

export default Country;
