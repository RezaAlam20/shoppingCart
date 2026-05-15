import { render } from "@testing-library/react";
import Header from "../components/Header";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

const mockCalcSum = vi.fn(() => 0);
function renderWithRouter(component) {
  return render(<MemoryRouter>{component}</MemoryRouter>);
}
describe("Header Ui tests", () => {
  it("checks if header is in document", () => {
    renderWithRouter(<Header calcSum={mockCalcSum}></Header>);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("checks if buttons in the header are rendered", () => {
    renderWithRouter(<Header calcSum={mockCalcSum}></Header>);
    const shopBtn = screen.getByText("Shop");
    const CartBtn = screen.getByText("Cart");
    expect(shopBtn).toBeInTheDocument();
    expect(CartBtn).toBeInTheDocument();
  });
  it("checks if the heading title is rendered", () => {
    renderWithRouter(<Header calcSum={mockCalcSum}></Header>);
    const title = screen.getByText("Fade Out");
    expect(title).toBeInTheDocument();
  });
});
