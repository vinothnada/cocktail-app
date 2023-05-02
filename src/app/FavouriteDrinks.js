import * as React from "react";
import { ImageList, Typography, Box } from "@mui/material";
import DrinkItem from "./DrinkItem";

export default function FavouriteDrinks({
  favList,
  addToFavourites,
  removeFromFavourites,
}) {
  /* Not rendering favourite drinks component*/
  if (favList.length === 0) {
    return (
      <div className="not-found-drinks gray-font">
        No favourite drinks are found click on any Star icon to add!
      </div>
    );
  }

  /* Render favourite drinks */
  return (
    <Box>
      <Typography variant="h6" className="heading-favourite-drinks gray-font">
        Favourite Drinks
      </Typography>
      <ImageList cols={5} className="list-favourite-drinks">
        {favList.map((item) => (
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
