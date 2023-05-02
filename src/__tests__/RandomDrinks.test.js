import RandomDrinks from "../app/RandomDrinks";
import { shallow } from "enzyme";

describe("Random Drinks", () => {
  test("Render Random drinks Not found div", () => {
    const randomCocktailsList = [];
    const favList = [];
    const addToFavourites = jest.fn();
    const removeFromFavourites = jest.fn();

    const wrapper = shallow(
      <RandomDrinks
        randomCocktailsList={randomCocktailsList}
        favList={favList}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
    );

    expect(wrapper.find(".no-random-drinks").length).toEqual(1);
    expect(
      wrapper.find(".no-random-drinks").contains("No Random drinks are found !")
    );
  });

  test("Render Random drinks successfully", () => {
    const mockFavList = [
      {
        strDrink: "151 Florida Bushwacker",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
        idDrink: "14588",
      },
    ];

    const mockRandomCocktailsList = [
      {
        strDrink: "151 Florida Bushwacker",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg",
        idDrink: "14588",
      },
      {
        strDrink: "155 Belmont",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg",
        idDrink: "15346",
      },
      {
        strDrink: "3-Mile Long Island Iced Tea",
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
        idDrink: "15300",
      },
    ];

    const addToFavourites = jest.fn();
    const removeFromFavourites = jest.fn();

    const wrapper = shallow(
      <RandomDrinks
        randomCocktailsList={mockRandomCocktailsList}
        favList={mockFavList}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
    );

    expect(wrapper.find(".heading-random-drinks").contains("Random Drinks"));
    expect(wrapper.find(".list-random-drinks").length).toEqual(1);
  });
});
