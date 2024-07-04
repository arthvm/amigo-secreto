import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "../state/hooks/useParticipantsList";
import { Button } from "./Button";
import { useDraw } from "../state/hooks/useDraw";

export function Footer() {
  const { participantsList } = useParticipantsList();
  const navigateTo = useNavigate();
  const {drawParticipants} = useDraw()

  const startGame = () => {
    drawParticipants();
    navigateTo("/draw");
  };

  return (
    <footer className="flex flex-col gap-6 md:flex-row justify-around items-center w-full">
      <Button onClick={startGame} disabled={participantsList.length < 3}>
        Iniciar Brincadeira!
      </Button>
      <img
        className="w-[127px] h-[98px] md:w-[237px] md:h-[183px]"
        src="/images/sacolas.png"
      />
    </footer>
  );
}
