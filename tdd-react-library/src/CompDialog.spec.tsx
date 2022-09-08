import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CompDialog from './CompDialog';

describe("CompDalog", () => {
  it("should wrap chid text", () => {
    render(<CompDialog>Hello</CompDialog>);
    expect(screen.getByRole("textbox")).toHaveTextContent("Hello");
    expect(screen.getByText("Hello")).toBeInTheDocument()
  })
})