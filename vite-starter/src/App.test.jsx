import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/learn react/i);
  expect(headingElement).toBeInTheDocument();
});

test('blank test check', () => {
  expect(true).toBe(true)
})

test('App Contains heading using role', () => {
  render(<App />);

  const headingElement = screen.getByRole("heading", {name: /learn react/i})
  expect(headingElement).toBeInTheDocument()
})