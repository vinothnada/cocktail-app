import { Star } from "@mui/icons-material";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";

const DrinkItem = ({
  item,
  favList,
  addToFavourites,
  removeFromFavourites,
}) => {
  const itemExist =
    favList && favList.length > 0
      ? favList.find((i) => i.idDrink === item.idDrink)
      : null;

  return (
    <>
      <ImageListItem key={item.idDrink} className="image-list-item">
        <img
          src={`${item.strDrinkThumb}?w=248&fit=crop&auto=format`}
          alt={item.strDrink}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.strDrink}
          subtitle={
            item.strCategory && item.strAlcoholic
              ? `${item.strCategory}  |  ${item.strAlcoholic}`
              : ""
          }
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${item.strDrink}`}
            ></IconButton>
          }
        />
        <ImageListItemBar
          sx={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
              "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
          }}
          position="top"
          actionIcon={
            <>
              <IconButton
                sx={{
                  color: "white",
                  display:
                    typeof itemExist === "undefined" || itemExist === null
                      ? "block"
                      : "none",
                }}
                onClick={() => addToFavourites(item)}
              >
                <Star />
              </IconButton>
              <IconButton
                sx={{
                  color: "yellow",
                  display:
                    typeof itemExist === "undefined" || itemExist === null
                      ? "none"
                      : "block",
                }}
                onClick={() => removeFromFavourites(item)}
              >
                <Star />
              </IconButton>
            </>
          }
          actionPosition="right"
        />
      </ImageListItem>
    </>
  );
};

export default DrinkItem;
