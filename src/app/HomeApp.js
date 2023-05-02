import * as React from "react";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import { brown, deepOrange } from "@mui/material/colors";
import DrinksList from "./DrinksList";
import { Container } from "@mui/material";
import {
  retrieveRandomCocktail,
  retrieveCocktailByAlphabet,
  retrieveCocktailByIngredient,
  retrieveCocktailByCategory,
  retrieveCocktailBySearchText,
} from "./store/cocktailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { retrieveIngredients } from "./store/ingredientsSlice";
import { retrieveCategories } from "./store/categorySlice";
import RandomDrinks from "./RandomDrinks";
import FavouriteDrinks from "./FavouriteDrinks";

const theme = createTheme({
  palette: {
    primary: {
      main: deepOrange["A700"],
    },
    secondary: {
      main: brown[900],
    },
  },
});

export default function HomeApp() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchAlphabet, setSearchAlphabet] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchIngrediant, setSearchIngrediant] = useState("");
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    getRandomDrinks();
    dispatch(retrieveCocktailByAlphabet("A"));
    dispatch(retrieveIngredients());
    dispatch(retrieveCategories());
  }, []);

  const getRandomDrinks = () => {
    for (let i = 0; i < 5; i++) {
      dispatch(retrieveRandomCocktail());
    }
  };

  const randomCocktailsList = useSelector(
    (state) => state.cocktails.list.randomDrinks
  );
  const allCocktailsList = useSelector(
    (state) => state.cocktails.list.drinksByFilter
  );
  const IngredientsList = useSelector((state) => state.ingredients.list.values);
  const categoriesList = useSelector((state) => state.categories.list.values);

  useEffect(() => {
    if (searchText !== null && searchText !== "") {
      dispatch(retrieveCocktailBySearchText(searchText));
    }
  }, [searchText]);

  useEffect(() => {
    if (searchAlphabet !== null && searchAlphabet !== "") {
      dispatch(retrieveCocktailByAlphabet(searchAlphabet));
    }
  }, [searchAlphabet]);

  useEffect(() => {
    if (searchCategory !== null && searchCategory !== "") {
      dispatch(retrieveCocktailByIngredient(searchCategory));
    }
  }, [searchCategory]);

  useEffect(() => {
    if (searchIngrediant !== null && searchIngrediant !== "") {
      dispatch(retrieveCocktailByCategory(searchIngrediant));
    }
  }, [searchIngrediant]);

  const addToFavourites = (item) => {
    const favListNew = [];
    favListNew.push(...favList);
    favListNew.push(item);
    setFavList(favListNew);
  };

  const removeFromFavourites = (item) => {
    let favListNew = [];
    favListNew.push(...favList);
    favListNew = favListNew.filter(function (obj) {
      return obj.idDrink !== item.idDrink;
    });

    setFavList(favListNew);
  };

  const handleChangeAlphabet = (value) => {
    setSearchAlphabet(value);
  };

  const handleChangeIngrediant = (value) => {
    setSearchIngrediant(value);
  };

  const handleChangeCategory = (value) => {
    setSearchCategory(value);
  };

  const handleSearchText = (value) => {
    setSearchText(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Header />
        <Container>
          <div>
            {randomCocktailsList.length > 0 ? (
              <RandomDrinks
                randomCocktailsList={randomCocktailsList}
                favList={favList}
                addToFavourites={addToFavourites}
                removeFromFavourites={removeFromFavourites}
              />
            ) : (
              ""
            )}
          </div>
          <div style={{ marginTop: "80px" }}>
            {IngredientsList.length > 0 && categoriesList.length > 0 ? (
              <DrinksList
                allCocktailsList={allCocktailsList}
                totalSize={
                  allCocktailsList && allCocktailsList.length > 0
                    ? Math.ceil(allCocktailsList.length / 10)
                    : 10
                }
                IngredientsList={IngredientsList}
                categoriesList={categoriesList}
                searchText={searchText}
                setSearchText={handleSearchText}
                searchAlphabet={searchAlphabet}
                setSearchAlphabet={handleChangeAlphabet}
                searchCategory={searchCategory}
                setSearchCategory={handleChangeCategory}
                searchIngrediant={searchIngrediant}
                setSearchIngrediant={handleChangeIngrediant}
                favList={favList}
                addToFavourites={addToFavourites}
                removeFromFavourites={removeFromFavourites}
              />
            ) : (
              ""
            )}
          </div>
          <div style={{ marginTop: "80px" }}>
            {FavouriteDrinks.length > 0 ? (
              <FavouriteDrinks
                favList={favList}
                addToFavourites={addToFavourites}
                removeFromFavourites={removeFromFavourites}
              />
            ) : (
              ""
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
