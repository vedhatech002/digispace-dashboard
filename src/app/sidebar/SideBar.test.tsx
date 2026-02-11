import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SideBar from "./SideBar";

describe("Sidebar", () => {
  it("renders navigation links", () => {
    render(
      <MemoryRouter>
        <SideBar />
      </MemoryRouter>,
    );

    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Analyse").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Control").length).toBeGreaterThan(0);
  });
});
