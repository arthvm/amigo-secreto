import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { ParticipantsList } from "./ParticipantsList";
import { useParticipantsList } from "../state/hooks/useParticipantsList";
import { Mock } from "vitest";

vi.mock("../state/hooks/useParticipantsList", () => {
  return {
    useParticipantsList: vi.fn(),
  };
});

describe("Empty participants list", () => {
  beforeEach(() => {
    (useParticipantsList as Mock).mockReturnValue({ participantsList: [] });
  });

  test("Should not have any elements", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
  });
});

describe("Populated participants list", () => {
  const participants = ["Arthur", "Mariano"];

  beforeEach(() => {
    (useParticipantsList as Mock).mockReturnValue({
      participantsList: participants,
    });
  });

  test("Should not have any elements", () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(participants.length);
  });
});
