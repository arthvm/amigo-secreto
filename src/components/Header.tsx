import { useNavigate } from "react-router-dom";

export function Header() {
  const navigateTo = useNavigate()

  return (
    <header className="bg-purple flex flex-col items-center justify-center pt-14 md:flex-row">
      <picture onClick={() => navigateTo("/")} className="cursor-pointer">
        <source media="(min-width: 768px)" srcSet="/images/logo.png" />
        <img
          src="/images/logo-pequeno.png"
          alt="Logo | Sorteador de Amigo Secreto"
        />
      </picture>
      <img
        src="/images/participante.png"
        className="z-[1] max-w-[328px] md:max-w-[450px]"
      ></img>
    </header>
  );
}
