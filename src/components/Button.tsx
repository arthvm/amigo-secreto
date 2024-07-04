interface ButtonProps {
  type?: "start" | "draw";
  children: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  type = "start",
  onClick,
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-orange border-2 border-black rounded-[36px] py-5 px-10 md:py-4 md:px-6 flex gap-6 items-center h-fit shadow-custom hover:bg-purple cursor-pointer"
    >
      <img
        className="max-w-10 hidden md:block"
        src={type == "start" ? "/images/play_circle.png" : "/images/dice.png"}
      />
      <span className="text-base text-center font-semibold text-white">
        {children}
      </span>
    </button>
  );
}
