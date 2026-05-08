import { render } from "@testing-library/react";
import Shop from "../components/Shop";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";

describe("Shop Ui tests", () => {
  it("testing the error screen in case the fetch request fails", async () => {
    window.fetch = vi.fn().mockRejectedValueOnce({ message: "API is down" });
    render(<Shop></Shop>);
    const error = await screen.findByText("API is down");
    expect(error).toBeInTheDocument();
  });
});
