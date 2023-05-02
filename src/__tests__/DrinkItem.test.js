import DrinkItem from "../app/DrinkItem";
import { shallow } from "enzyme";

describe("Drink Item", () => {
  test("Render Drink item successfully", () => {
    const item = [];
    const favList = [];
    const addToFavourites = jest.fn();
    const removeFromFavourites = jest.fn();

    const wrapper = shallow(
      <DrinkItem
        item={item}
        favList={favList}
        addToFavourites={addToFavourites}
        removeFromFavourites={removeFromFavourites}
      />
    );

    expect(wrapper.find(".image-list-item").length).toEqual(1);
  });
});
