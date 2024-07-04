import { DrawForm } from "../components/DrawForm";

export function Draw() {
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
