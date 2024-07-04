import { useParticipantsList } from "../state/hooks/useParticipantsList";

export function ParticipantsList() {
  const { participantsList } = useParticipantsList();

  return (
    <ul>
      {participantsList.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  );
}
