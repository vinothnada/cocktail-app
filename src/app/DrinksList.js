import * as React from "react";
import { useState, useEffect } from "react";
import {
  ImageList,
  Typography,
  Pagination,
  Box,
  Grid,
  Button,
} from "@mui/material";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import Alphabet from "./components/Alphabet";
import DrinkItem from "./DrinkItem";

export default function DrinksList({
  allCocktailsList,
  categoriesList,
  IngredientsList,
  totalSize,
  searchText,
  setSearchText,
  setSearchAlphabet,
  setSearchCategory,
  setSearchIngrediant,
  favList,
  addToFavourites,
  removeFromFavourites,
}) {
  const [renderCocktailsList, setRenderCocktailsList] = useState([]);
  const [filterText, setFilterText] = useState(false);

  const pageChangeHandler = (event, pageNumber) => {
    const end = pageNumber * 10;
    const start = end - 10;
    setRenderCocktailsList(allCocktailsList.slice(start, end));
  };

  useEffect(() => {
    setCocktailsList();
  }, [allCocktailsList]);

  const setCocktailsList = () => {
    if (allCocktailsList && allCocktailsList.length > 0) {
      pageChangeHandler("e", 1);
    }
  };

  if (renderCocktailsList.length === 0) {
    return <div className="no-drinks gray-font">No drinks found !</div>;
  }

  return (
    <Box>
      <Typography variant="h6" className="drinks-list-heading gray-font">
        List of Drinks
      </Typography>
      <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="text"
              color="secondary"
              style={{ float: "right" }}
              onClick={() => setFilterText(!filterText)}
            >
              {filterText ? "Hide Filters" : "Show Filters"}
            </Button>
          </Grid>
          {filterText ? (
            <>
              <Grid item xs={4} className="alphabet-filter-bar">
                <FilterBar
                  data={Alphabet}
                  name="Alphabet"
                  setVar={setSearchAlphabet}
                />
              </Grid>

              {IngredientsList && IngredientsList.length > 0 ? (
                <Grid item xs={4} className="Ingredient-filter-bar">
                  <FilterBar
                    data={IngredientsList}
                    name="Ingredient"
                    setVar={setSearchCategory}
                  />
                </Grid>
              ) : (
                ""
              )}

              {categoriesList && categoriesList.length > 0 ? (
                <Grid item xs={4} className="Category-filter-bar">
                  <FilterBar
                    data={categoriesList}
                    name="Category"
                    setVar={setSearchIngrediant}
                  />
                </Grid>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}
        </Grid>
      </Box>
      {renderCocktailsList && renderCocktailsList.length > 0 ? (
        <ImageList cols={5} className="drinks-list-content">
          {renderCocktailsList.map((item) => (
            <DrinkItem
              item={item}
              key={item.idDrink}
              favList={favList}
              addToFavourites={addToFavourites}
              removeFromFavourites={removeFromFavourites}
            />
          ))}
        </ImageList>
      ) : (
        <div className="im-here"> testetstetst</div>
      )}

      <Pagination
        count={totalSize}
        onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)}
        style={{ float: "right", marginTop: "10px" }}
      />
    </Box>
  );
}
