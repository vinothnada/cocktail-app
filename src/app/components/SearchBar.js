import React from "react";
import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ searchText, setSearchText }) => {
  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <TextField
        id="search"
        type="search"
        label="Search"
        variant="outlined"
        size="small"
        value={searchText}
        onChange={handleChange}
        sx={{ width: "80%" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchBar;
