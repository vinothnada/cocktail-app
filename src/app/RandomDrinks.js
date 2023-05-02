import * as React from "react";
import { ImageList, Typography, Box } from "@mui/material";
import DrinkItem from "./DrinkItem";

export default function RandomDrinks({
  randomCocktailsList,
  favList,
  addToFavourites,
  removeFromFavourites,
}) {
  if (randomCocktailsList.length === 0) {
    return (
      <div className="no-random-drinks gray-font">
        No Random drinks are found !
      </div>
    );
  }

  return (
    <Box>
      <Typography variant="h6" className="heading-random-drinks gray-font">
        Random Drinks
      </Typography>
      <ImageList cols={5} className="list-random-drinks">
        {randomCocktailsList.map((item) => (
          <DrinkItem
            item={item}
            key={item.idDrink}
            favList={favList}
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
          />
        ))}
      </ImageList>
    </Box>
  );
}
