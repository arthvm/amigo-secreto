import { useRef, useState } from "react";
import { useParticipantsList } from "../state/hooks/useParticipantsList";
import { useErrorState } from "../state/hooks/useErrorState";
import { TextInput } from "./TextInput";

export function Form() {
  const { addParticipant } = useParticipantsList();
  const { errorMsg } = useErrorState();

  const [name, setName] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addParticipant(name);

    setName("");
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <form onSubmit={onFormSubmit} className="flex flex-col gap-2 w-full md:flex-row md:bg-black md:rounded-[40px] md:p-[2px] md:gap-[2px] md:shadow-custom">
        <TextInput
          inputRef={inputRef}
          value={name}
          onChange={(event) => setName(event.target.value)}
        >
          Insira os nomes dos participantes
        </TextInput>
        <button className="bg-grey w-40 h-12 self-center rounded-[38px] border-black border shadow-custom text-base md:h-20 md:w-56 md:border-none md:shadow-none md:rounded-l-none cursor-pointer" disabled={!name}>Adicionar</button>
      </form>
      {errorMsg && <p role="alert" className="self-center text-lg bg-[#fca5a5] px-4 py-2 text-[#dc2626] rounded-lg mt-4 font-bold">{errorMsg}</p>}
    </div>
  );
}
