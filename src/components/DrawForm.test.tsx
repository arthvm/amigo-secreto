import { RecoilRoot } from "recoil"
import { fireEvent, render, screen } from "@testing-library/react";
import { useParticipantsList } from "../state/hooks/useParticipantsList.ts";
import { Mock } from "vitest";
import { useDraw } from "../state/hooks/useDraw.ts";
import { DrawForm } from "./DrawForm.tsx";
import { act } from "react";

vi.mock("../state/hooks/useParticipantsList.ts", () => {
    return {
        useParticipantsList: vi.fn()
    }
})

vi.mock("../state/hooks/useDraw.ts", () => {
    return {
        useDraw: vi.fn()
    }
})

describe("Draw form", () => {
    const participants = ['Arthur', "Mariano", "Developer"];
    const resultado = new Map([["Arthur", "Developer"], ["Developer", "Mariano"], ["Mariano", "Arthur"]])

    beforeEach(() => {
        (useParticipantsList as Mock).mockReturnValue({participantsList: participants});
        (useDraw as Mock).mockReturnValue({drawResult: resultado})
    })

    test("All participants can get their secret friend", () => {
        render(<RecoilRoot>
            <DrawForm/>
        </RecoilRoot>)

        const options = screen.queryAllByRole("option");
        expect(options).toHaveLength(participants.length + 1);
    })

    test("Secret Friend disappears after timers", () => {
        vi.useFakeTimers();

        render(<RecoilRoot>
            <DrawForm/>
        </RecoilRoot>)

        const select =  screen.getByTestId("participant-input")
        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        })

        const button = screen.getByRole("button");
        fireEvent.click(button);

        let secretFriend = screen.queryByRole("alert");
        expect(secretFriend).toBeInTheDocument();

        act(() => {
            vi.runAllTimers()
        })

        secretFriend = screen.queryByRole("alert");
        expect(secretFriend).toBeNull();
    })

    test("Secret friend is shown when option is selected", () => {
        render(<RecoilRoot>
            <DrawForm/>
        </RecoilRoot>)

        const select =  screen.getByTestId("participant-input")
        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        })

        const button = screen.getByRole("button");
        fireEvent.click(button);

        const secretFriend = screen.getByRole("alert");
        expect(secretFriend).toBeInTheDocument();
    })
})