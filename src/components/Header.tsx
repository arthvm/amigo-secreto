export function Header() {
  return (
    <header className="bg-purple flex flex-col items-center justify-center pt-14 md:flex-row">
      <picture>
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
