import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";

test("button has a default color", () => {
  render(<App />)

  const buttonElement = screen.getByRole("button", {name: /blue/i});
  expect(buttonElement).toHaveClass("red");
})


test("button has a default text", () => {
})


test("button color is changed on btn click", () => {
})

test("button text is changed on btn click", () => {
})