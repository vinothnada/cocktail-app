import React, { useState } from "react";

import Select from "react-select";

const FilterBar = ({ data, name, setVar }) => {
  const data2 = [];

  data.forEach((element) => {
    let obj = {};
    if (name === "Ingredient") {
      obj = {
        value: element.strIngredient1,
        label: element.strIngredient1,
      };
    } else if (name === "Category") {
      obj = {
        value: element.strCategory,
        label: element.strCategory,
      };
    } else {
      obj = {
        value: element.value,
        label: element.label,
      };
    }
    data2.push(obj);
  });

  const handleChange = (e) => {
    e !== null ? setVar(e.value) : setVar("");
  };

  return (
    <>
      <div className="filter-heading">&nbsp;Filter by {name}</div>
      <Select
        className="dropdown-filter"
        classNamePrefix="select"
        defaultValue={name === "Alphabet" ? data2[0] : ""}
        isSearchable={true}
        name="color"
        options={data2}
        onChange={(e) => handleChange(e)}
      />
      <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          marginTop: "1em",
        }}
      ></div>
    </>
  );
};

export default FilterBar;
