import { render } from "@testing-library/react";
import Header from "../components/Header";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { describe, it, expect } from "vitest";

describe("Header Ui tests", () => {
  it("checks if header is in document", () => {
    render(<Header></Header>);
    screen.debug();
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("checks if buttons in the header are rendered", () => {
    render(<Header></Header>);
    const shopBtn = screen.getByText("Shop");
    const CartBtn = screen.getByText("Cart");
    expect(shopBtn).toBeInTheDocument();
    expect(CartBtn).toBeInTheDocument();
  });
  it("checks if the heading title is rendered", () => {
    render(<Header></Header>);
    const title = screen.getByText("Fade Out");
    expect(title).toBeInTheDocument();
  });
});
