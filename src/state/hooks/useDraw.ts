import { useParticipantsList } from "./useParticipantsList";
import { useRecoilState } from "recoil";
import { drawResultState } from "../atom";
import { drawResults } from "../../util/drawResults";

export function useDraw(){
    const [drawResult, setDrawResult] = useRecoilState(drawResultState);
    const {participantsList} = useParticipantsList()

    const drawParticipants = () => {
        const result = drawResults(participantsList);
        setDrawResult(result)
    }

    return{
        drawResult,
        drawParticipants,
    }
}