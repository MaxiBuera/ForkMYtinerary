import React from "react";

const AllCitiesComponent = ({ data }) => {
  return (
    <div>
      <h1>AllCitiesComponent</h1>
      {data &&
        data.ciudades.map((item, i) => (
          <div key={i}>
            <h1>{item.name}</h1>
            <h5>{item.country}</h5>
          </div>
        ))}
    </div>
  );
};

export default AllCitiesComponent;
