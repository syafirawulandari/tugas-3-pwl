import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

it("Footer should have footer text", () => {
  render(<Footer />);
  const footerText = screen.getByText(/toko safira/i);
  expect(footerText).toBeInTheDocument();
});
