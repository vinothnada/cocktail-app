import { shallow } from "enzyme";
import SearchBar from "../../app/components/SearchBar";

describe("Search Bar", () => {
  test("Render Search Bar", () => {
    const searchText = "dummy text";
    const setSearchText = jest.fn();

    const wrapper = shallow(
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
    );

    expect(wrapper.find("#search").length).toEqual(1);
  });
});
