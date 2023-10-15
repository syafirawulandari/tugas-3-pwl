import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("Header should have title text", () => {
  render(<Header title={"Example Title"} />);
  const titleText = screen.getByText("Example Title");
  expect(titleText).toBeInTheDocument();
});
