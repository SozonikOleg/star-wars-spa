import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
/**
 * @jest-environment jsdom
 */

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});
