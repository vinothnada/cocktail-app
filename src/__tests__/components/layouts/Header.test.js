import { render, screen } from "@testing-library/react";
import Header from "../../../app/components/layouts/Header";

describe("Header", () => {
  test("should render header component", () => {
    render(<Header />);

    const element = screen.getByText("The CockTail App");
    expect(element).toBeInTheDocument();

    const element2 = screen.getByText("Welcome to The Cocktail App");
    expect(element2).toBeInTheDocument();

    const element3 = screen.getByText(
      "An open, crowd-sourced database of drinks and cocktails from around the world."
    );
    expect(element3).toBeInTheDocument();
  });
});
