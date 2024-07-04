import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Footer } from "./Footer";
import { useParticipantsList } from "../state/hooks/useParticipantsList";
import { Mock } from "vitest";

const navigationMock = vi.fn();
const mockDraw = vi.fn();

vi.mock("../state/hooks/useParticipantsList", () => {
  return { useParticipantsList: vi.fn() };
});

vi.mock("react-router-dom", () => {
  return {
    useNavigate: () => navigationMock,
  };
});

vi.mock("../state/hooks/useDraw", () => {{
  return{
    useDraw: () => ({drawParticipants: mockDraw}),
  }
}})

describe("Not enough participants to play", () => {
  beforeEach(() => {
    (useParticipantsList as Mock).mockReturnValue({ participantsList: [] });
  });

  test("Can't start the game", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});

describe("Enough participants to play", () => {
  beforeEach(() => {
    (useParticipantsList as Mock).mockReturnValue({
      participantsList: ["Arthur", "Mariano", "Developer"],
    });
  });

  test("Can start the game", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();
  });

  test("Game has started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockDraw).toBeCalledTimes(1);
    expect(navigationMock).toHaveBeenCalledWith("/draw");
  });
});
