import { shallow } from "enzyme";
import DrinksList from "../app/DrinksList";
import {
  mockAllCocktailsList,
  mockCategoriesList,
  mockIngredientsList,
} from "../mocks/MockData";

describe("Drink List Components", () => {
  test("Render Drink List error", () => {
    const allCocktailsList = [];
    const categoriesList = [];
    const IngredientsList = [];
    const totalSize = 0;
    const searchText = "";
    const setSearchText = jest.fn();
    const setSearchAlphabet = jest.fn();
    const setSearchCategory = jest.fn();
    const setSearchIngrediant = jest.fn();
    const favList = [];
    const addToFavourites = jest.fn();
    const removeFromFavourites = jest.fn();

    const wrapper = shallow(
      <DrinksList
        allCocktailsList={allCocktailsList}
        categoriesList={categoriesList}
        IngredientsList={IngredientsList}
        totalSize={totalSize}
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchAlphabet={setSearchAlphabet}
        setSearchCategory={setSearchCategory}
        setSearchIngrediant={setSearchIngrediant}
        favList={favList}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
    );
    expect(wrapper.find(".no-drinks").length).toEqual(1);
    expect(wrapper.find(".no-drinks").contains("No drinks found !"));
  });

  test("Render Drink List success", () => {
    const allCocktailsList = mockAllCocktailsList;
    const categoriesList = mockCategoriesList;
    const IngredientsList = mockIngredientsList;
    const totalSize = mockAllCocktailsList.length;
    const searchText = "";
    const setSearchText = jest.fn();
    const setSearchAlphabet = jest.fn();
    const setSearchCategory = jest.fn();
    const setSearchIngrediant = jest.fn();
    const favList = [];
    const addToFavourites = jest.fn();
    const removeFromFavourites = jest.fn();

    const wrapper = shallow(
      <DrinksList
        allCocktailsList={allCocktailsList}
        categoriesList={categoriesList}
        IngredientsList={IngredientsList}
        totalSize={totalSize}
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchAlphabet={setSearchAlphabet}
        setSearchCategory={setSearchCategory}
        setSearchIngrediant={setSearchIngrediant}
        favList={favList}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
    );

    expect(wrapper.find(".drinks-list-heading").contains("List of Drinks"));
  });

  test("Render Drinks without optional filters", () => {
    const allCocktailsList = mockAllCocktailsList;
    const categoriesList = [];
    const IngredientsList = [];
    const totalSize = mockAllCocktailsList.length;
    const searchText = "";
    const setSearchText = jest.fn();
    const setSearchAlphabet = jest.fn();
    const setSearchCategory = jest.fn();
    const setSearchIngrediant = jest.fn();
    const favList = [];
    const addToFavourites = jest.fn();
    const removeFromFavourites = jest.fn();

    const wrapper = shallow(
      <DrinksList
        allCocktailsList={allCocktailsList}
        categoriesList={categoriesList}
        IngredientsList={IngredientsList}
        totalSize={totalSize}
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchAlphabet={setSearchAlphabet}
        setSearchCategory={setSearchCategory}
        setSearchIngrediant={setSearchIngrediant}
        favList={favList}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
    );

    expect(wrapper.find(".drinks-list-heading").contains("List of Drinks"));
  });
});
