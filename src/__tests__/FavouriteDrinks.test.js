import FavouriteDrinks from "../app/FavouriteDrinks";
import { shallow } from "enzyme";

describe("Favourite Drinks", () => {
  test("Render Favourite drinks Not found div", () => {
    const favList = [];
    const addToFavourites = jest.fn();
    const removeFromFavourites = jest.fn();

    const wrapper = shallow(
      <FavouriteDrinks
        favList={favList}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
    );

    expect(wrapper.find(".not-found-drinks").length).toEqual(1);
    expect(
      wrapper
        .find(".not-found-drinks")
        .contains(
          "No favourite drinks are found click on any Star icon to add!"
        )
    );
  });

  test("Render Favourite drinks successfully", () => {
    const mockFavList = [
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
      <FavouriteDrinks
        favList={mockFavList}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
    );

    expect(
      wrapper.find(".heading-favourite-drinks").contains("Favourite Drinks")
    );
    expect(wrapper.find(".list-favourite-drinks").length).toEqual(1);
  });
});
