import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("the counter starts at 0", () => {
  render(<Counter />);
  const conut = screen.getByTestId("counter");
  expect(conut).toHaveTextContent("0");
});

test("minus botton has correct text", () => {
  render(<Counter />);
  const minusButton = screen.getByRole("button", {
    name: "-",
  });
  expect(minusButton).toHaveTextContent("-");
});

test("plus botton has correct text", () => {
  render(<Counter />);
  const plusButton = screen.getByRole("button", {
    name: "+",
  });
  expect(plusButton).toHaveTextContent("+");
});

test("When the + button is pressed, the counter changes to 1", () => {
  render(<Counter />);
  const plusButton = screen.getByRole("button", {
    name: "+",
  });
  fireEvent.click(plusButton);
  expect(screen.getByText("1")).toBeTruthy();
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<Counter />);
  const minusButton = screen.getByRole("button", {
    name: "-",
  });
  fireEvent.click(minusButton);
  expect(screen.getByText("-1")).toBeTruthy();
});

test("on/off button has blue color", () => {
  render(<Counter />);
  const toggleButton = screen.getByRole("button", {
    name: "on/off",
  });
  expect(toggleButton).toHaveStyle("background-color: blue");
});

test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<Counter />);
  const toggleButton = screen.getByRole("button", {
    name: "on/off",
  });
  const minusButton = screen.getByRole("button", {
    name: "-",
  });
  const plusButton = screen.getByRole("button", {
    name: "+",
  });
  fireEvent.click(toggleButton);

  expect(minusButton.disabled).toBeTruthy();
  expect(plusButton.disabled).toBeTruthy();
});
