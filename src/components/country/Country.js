import React from "react";

const Country = (props) => {
  const { name, population, region, subregion, flag } = props.country;
  const flagStyle = { height: "50px" };
  const countryStyle = {
    border: "1px solid red",
    margin: "10px",
    padding: "10px",
  };
  const handleAddCountry = props.handleAddCountry;

  return (
    <div style={countryStyle}>
      <h3>This is a {name}</h3>
      <img style={flagStyle} src={flag} alt="" />
      <p>Population :{population} </p>
      <p>Region :{region}</p>
      <p>Sub Region :{subregion}</p>
      <button onClick={() => handleAddCountry(props.country)}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
