import { render } from "@testing-library/react";
import LaunchCard from "./";

let elem;
const img = "test-image";
const desc = "test-desc";
const ttl = "test-title";

beforeAll(() => {
  const { getByTestId } = render(
    <LaunchCard image={img} description={desc} title={ttl} />
  );
  elem = getByTestId("launch-card");
});

test("it renders a launch card", () => {
  expect(elem).toBeInTheDocument();
});

test("launch card uses image prop", () => {
  expect(elem).toContainHTML(img);
});

test("launch card uses description prop", () => {
  expect(elem).toContainHTML(desc);
});

test("launch card uses title prop", () => {
  expect(elem).toContainHTML(ttl);
});
