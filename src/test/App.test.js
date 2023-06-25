import React from "react";
import '@testing-library/jest-dom';
import {render,screen} from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import { initializeTimes } from "../components/BookingForm";
import {reducer} from "../components/BookingForm";
import { hightField } from "../components/BookingForm";


test("Renders the Form label", () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Your name");
  expect(labelElement).toBeInTheDocument();
});

test("input guests should have min attribute", () => {
  render(<BookingForm />);
  const inputGuests = screen.getByTestId("number");
  expect(inputGuests.getAttribute("min")).toBe("1");
});

test("should test that initializeTimes returns an array", () => {
  render(<BookingForm />);
  // expect(initializeTimes()).toBeTruthy();
  expect(initializeTimes()).toBeInstanceOf(Array);
});

test("should test that reducer returns a an array", () => {
  render(<BookingForm />);
  let state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  let action = "2023-06-23";
  expect(reducer(state, action)).toBeInstanceOf(Array);
});

test("should test that name field is highlighted if the value is empty", () => {
  render(<BookingForm />);
  highltghtField("", "name");
  const selectedField = screen.getByTestId("name");
  expect(selectedField.classList).toMatchObject({ 0: "highlighted" });
});

test("should test that name field is not highlighted if the value is not empty", () => {
  render(<BookingForm />);
  hightField("Ellie", "name");
  const selectedField = screen.getByTestId("name");
  expect(selectedField.classList).toMatchObject({});
});