import { useNavigate } from "react-router-dom";
import { DrawForm } from "../components/DrawForm";
import { useParticipantsList } from "../state/hooks/useParticipantsList";
import { useEffect } from "react";

export function Draw() {
  const {participantsList} = useParticipantsList()
  const navigateTo = useNavigate()

  useEffect(() => {
    if(participantsList.length <= 0) navigateTo("/")
  }, [participantsList, navigateTo])

  return (
    <>
      <h1 className="text-purple text-3xl md:text-4xl font-semibold text-center">
        Quem vai tirar o papelzinho?
      </h1>
      <DrawForm />
      <img
        className="w-[127px] h-[98px] md:w-[150px] md:h-[130px]"
        src="/images/aviao.png"
      />
    </>
  );
}
