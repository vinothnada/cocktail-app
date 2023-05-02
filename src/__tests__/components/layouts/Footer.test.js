import { render, screen } from "@testing-library/react";
import Footer from "../../../app/components/layouts/Footer";

describe("Footer", () => {
  test("should render footer component", () => {
    render(<Footer />);
    const element = screen.getByText(/Copyright Cocktail App @2013/i);
    expect(element).toBeInTheDocument();
  });
});
