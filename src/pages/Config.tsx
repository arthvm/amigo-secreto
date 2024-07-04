import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { ParticipantsList } from "../components/ParticipantsList";

export function Config() {
  return (
    <>
      <h1 className="text-purple text-3xl md:text-4xl font-semibold">
        Vamos começar!
      </h1>
      <Form />
      <ParticipantsList />
      <Footer />
    </>
  );
}
