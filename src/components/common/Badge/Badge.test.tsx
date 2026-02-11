import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge Component", () => {
  it("renders label correctly", () => {
    render(<Badge label="Yesterday" />);
    expect(screen.getByText("Yesterday")).toBeInTheDocument();
  });
});
