import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import HeroHeader from "./HeroHeader";

expect.extend(toHaveNoViolations);

describe("HeroHeader", () => {
  it("renders without accessibility issues", async () => {
    const { container } = render(
      <HeroHeader title="My Title" subtitle="Subtitle" img="src/img.png" />
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
