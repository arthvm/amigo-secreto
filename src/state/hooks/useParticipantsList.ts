import { useRecoilState } from "recoil";
import { participantsListState } from "../atom";
import { useErrorState } from "./useErrorState";

export function useParticipantsList() {
  const [participantsList, setParticipantsList] = useRecoilState(
    participantsListState
  );

  const { setErrorMsg } = useErrorState();

  const showError = (errorMsg: string) => {
    setErrorMsg(errorMsg);
    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  };

  const addParticipant = (participantsName: string) => {
    participantsList.includes(participantsName)
      ? showError("Nomes nao podem ser duplicados!")
      : setParticipantsList((oldList) => [...oldList, participantsName]);
  };

  return {
    participantsList,
    addParticipant,
  };
}
