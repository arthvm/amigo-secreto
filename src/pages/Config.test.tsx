import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Config } from "./Config";

const mockNavigation = vi.fn();

vi.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigation,
  };
});

describe("Config page", () => {
  test("Should render properly", () => {
    const { container } = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
