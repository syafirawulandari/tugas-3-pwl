import { render, screen } from "@testing-library/react";

// unit test
import { InputMessages, InputText } from "../Input";

it("Saya mau komponen input text bisa dirender", () => {
  render(<InputText placeholder={"Ini Input Text"} />);
  const inputTextResponse = screen.getByPlaceholderText(/ini input text/i);
  expect(inputTextResponse).toBeInTheDocument();
});

it("Saya mau agar komponen input messages dapat dirender", () => {
  render(<InputMessages placeholder={"Ini Input Messages"} />);
  const inputMessagesResponse =
    screen.getByPlaceholderText(/ini input messages/i);
  expect(inputMessagesResponse).toBeInTheDocument();
});

//result: semua komponen input yang dibuat dapat dirender berdasarkan parameter placeholder yang diberikan
