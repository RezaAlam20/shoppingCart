import { render } from "@testing-library/react";
import Item from "../components/Item";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { useOutletContext } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  useOutletContext: vi.fn(),
}));

describe("Item Ui tests", () => {
  it("Clicking add to cart should change the amount to 1", async () => {
    const mockCart = [];
    const mockAddToCart = vi.fn();
    const mockRemoveItem = vi.fn();
    useOutletContext.mockReturnValue({
      addToCart: mockAddToCart,
      cart: mockCart,
      removeItem: mockRemoveItem,
    });
    render(
      <Item id={1} title="Test" price={100} image={null} alt="" url={null} />,
    );

    const user = userEvent.setup();

    await user.click(screen.getByText("Add to Cart"));
    await user.click(screen.getByText("Add to Cart"));

    expect(mockAddToCart).toHaveBeenCalledTimes(2);
  });

  it("Clicking the + button should increment the count", async () => {
    const mockCart = [
      { title: "test", url: "", amount: 1, id: 1, price: 10, alt: "" },
    ];
    const mockAddToCart = vi.fn();
    const mockRemoveItem = vi.fn();
    useOutletContext.mockReturnValue({
      addToCart: mockAddToCart,
      cart: mockCart,
      removeItem: mockRemoveItem,
    });
    render(
      <Item id={1} title="Test" price={100} image={null} alt="" url={null} />,
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("+"));
    await user.click(screen.getByText("+"));
    expect(mockAddToCart).toHaveBeenCalled(2);
  });

  it("Clicking the - button shuld decrement the item count", async () => {
    const mockCart = [
      { title: "test", url: "", amount: 3, id: 1, price: 10, alt: "" },
    ];
    const mockAddToCart = vi.fn();
    const mockRemoveItem = vi.fn();
    useOutletContext.mockReturnValue({
      addToCart: mockAddToCart,
      cart: mockCart,
      removeItem: mockRemoveItem,
    });
    render(
      <Item id={1} title="Test" price={100} image={null} alt="" url={null} />,
    );

    const user = userEvent.setup();

    expect(screen.getByText("3")).toBeInTheDocument();

    await user.click(screen.getByText("-"));
    await user.click(screen.getByText("-"));

    expect(mockRemoveItem).toHaveBeenCalledTimes(2);
  });
});
