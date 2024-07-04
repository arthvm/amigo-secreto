import { useState } from "react";
import { useParticipantsList } from "../state/hooks/useParticipantsList"
import { useDraw } from "../state/hooks/useDraw";
import { Button } from "./Button";

export function DrawForm(){
    const {participantsList} = useParticipantsList()
    const {drawResult} = useDraw()

    const [currParticipant, setCurrParticipant] = useState("")
    const [secretFriend, setSecretFriend] = useState("")

    const getParticipantDraw = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setTimeout(() => {
            setCurrParticipant("")
            setSecretFriend("")
        }, 3000)

        const currSecretFriend = drawResult.get(currParticipant) ?? ""
        setSecretFriend(currSecretFriend)
    }

    return <section>
        <form className="flex flex-col gap-8 items-center" onSubmit={getParticipantDraw}>
            <select required aria-placeholder="Selecione seu nome" className="w-full px-7 py-4 rounded-[32px] shadow-custom borde-black border before:right-2 custom-select" 
            value={currParticipant} onChange={event => setCurrParticipant(event.target.value)} name="currParticipant" id="currParticipant" data-testid="participant-input">
                <option value="">Selecione seu nome</option>
                {participantsList.map(participant => <option key={participant}>{participant}</option>)}
            </select>
            <h2 className="text-xl text-center text-black">Clique em sortear para ver quem é seu amigo secreto!</h2>
            <Button type="draw">Sortear</Button>
        </form>
        {secretFriend && <p role="alert" className="text-lg text-orange text-center mt-4">{secretFriend}</p>}
    </section>
}