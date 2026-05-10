import { findByText, render } from "@testing-library/react";
import Item from "../components/Item";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Item Ui tests", () => {
  it("Clicking add to cart should change the amount to 1", async () => {
    render(<Item></Item>);
    const user = userEvent.setup();
    await user.click(screen.getByText("Add to Cart"));
    expect(await screen.findByText("1")).toBeInTheDocument();
  });
  it("Clicking the + button should increment the count", async () => {
    render(<Item></Item>);
    const user = userEvent.setup();
    await user.click(screen.getByText("Add to Cart"));
    await user.click(screen.getByText("+"));
    await user.click(screen.getByText("+"));
    expect(await screen.findByText("3")).toBeInTheDocument();
  });
  it("Clicking the - button shuld decrement the item count", async () => {
    render(<Item></Item>);
    const user = userEvent.setup();
    await user.click(screen.getByText("Add to Cart"));
    await user.click(screen.getByText("+"));
    await user.click(screen.getByText("-"));
    expect(await screen.findByText("1")).toBeInTheDocument();
  });
});
