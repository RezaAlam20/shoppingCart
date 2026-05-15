import { render } from "@testing-library/react";
import Shop from "../components/Shop";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { useOutletContext } from "react-router-dom";

vi.mock("react-router-dom", () => ({
  useOutletContext: vi.fn(),
}));
describe("Shop Ui tests", () => {
  it("testing the error screen in case the fetch request fails", async () => {
    useOutletContext.mockReturnValue({
      data: [],
      loading: false,
      error: { message: "API is down" },
    });
    render(<Shop></Shop>);
    const error = await screen.findByText("API is down");
    screen.debug();
    expect(error).toBeInTheDocument();
  });
});
