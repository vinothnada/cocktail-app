import { shallow } from "enzyme";
import FilterBar from "../../app/components/FilterBar";
import Alphabet from "../../app/components/Alphabet";

describe("Filter Bar Elements", () => {
  test("Render FilterBar with Alphabet", () => {
    const setVar = jest.fn();

    const wrapper = shallow(
      <FilterBar data={Alphabet} name="Alphabet" setVar={setVar} />
    );

    expect(wrapper.find(".filter-heading").contains("Filter by Alphabet"));
    expect(wrapper.find(".dropdown-filter").length).toEqual(1);
  });

  test("Render FilterBar with Ingrediant", () => {
    const mockIngrediantData = [
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

    const setVar = jest.fn();

    const wrapper = shallow(
      <FilterBar data={mockIngrediantData} name="Ingredient" setVar={setVar} />
    );

    expect(wrapper.find(".filter-heading").contains("Filter by Ingredient"));
    expect(wrapper.find(".dropdown-filter").length).toEqual(1);
  });

  test("Render FilterBar with Category", () => {
    const mockIngrediantData = [
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

    const setVar = jest.fn();

    const wrapper = shallow(
      <FilterBar data={mockIngrediantData} name="Category" setVar={setVar} />
    );

    expect(wrapper.find(".filter-heading").contains("Filter by Category"));
    expect(wrapper.find(".dropdown-filter").length).toEqual(1);
  });
});
