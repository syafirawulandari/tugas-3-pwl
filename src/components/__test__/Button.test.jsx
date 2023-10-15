import { render, screen } from "@testing-library/react";

// unit test
import {
  BuyButton,
  PlusButton,
  DetailsButton,
  SubmitButton,
  BackButton,
} from "../Button";

it("Buy Button can be render", () => {
  // saya pengen tombol beli ini bisa dirender
  render(<BuyButton />);
  const buyClassNameButton = screen.getByRole("button", { name: /beli/i });
  expect(buyClassNameButton).toHaveClass("buy");
});

it("Detail button can be render", () => {
  // saya pengen tombol rincian ini bisa dirender
  render(<DetailsButton />);
  const detailButtonResponse = screen.getByRole("button", { name: /rincian/i });
  expect(detailButtonResponse).toHaveClass("details");
});

it("Plus Button can be render", () => {
  // saya pengen tombol tambah ini bisa dirender
  render(<PlusButton text={"Tambah"} />);
  const plusButtonResponse = screen.getByRole("button", { name: /tambah/i });
  expect(plusButtonResponse).toHaveClass("increment");
});

it("Submit Button can be render", () => {
  // saya pengen tombol kirim ini bisa dirender
  render(<SubmitButton />);
  const submitButtonResponse = screen.getByRole("button", { name: /kirim/i });
  expect(submitButtonResponse).toHaveClass("submit");
});

it("Back button can be render", () => {
  // saya pengen tombol kembali bisa dirender
  render(<BackButton />);
  const backButtonResponse = screen.getByRole("button", { name: /kembali/i });
  expect(backButtonResponse).toHaveClass("back");
});

// result: semua komponen tombol berhasil dirender
