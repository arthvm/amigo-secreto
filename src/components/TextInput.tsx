interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  children: string;
}

export function TextInput({
  value,
  onChange,
  inputRef,
  children,
}: TextInputProps) {
  return (
    <div
      className="flex items-center py-3 px-6 rounded-[37px] border-2 border-black shadow-custom cursor-text gap-4 bg-white md:border-none md:shadow-none md:rounded-r-none md:px-14 md:py-7 md:flex-grow"
      onClick={() => inputRef.current?.focus()}
    >
      <img src="/images/person_add.png" />
      <input
        role="textbox"
        ref={inputRef}
        value={value}
        onChange={onChange}
        type="text"
        placeholder={children}
        className="flex-1 bg-transparent outline-none"
      />
    </div>
  );
}
