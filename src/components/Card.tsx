import React from "react";

interface CardProps {
  children: React.JSX.Element[] | React.JSX.Element | string;
}

export function Card({ children }: CardProps) {
  return (
    <div className="-mt-5 md:-mt-7 flex-grow bg-cream rounded-t-[64px] border-black border flex flex-col justify-center items-center py-12 px-4 md:py-20 md:px-36 gap-9">
      {children}
    </div>
  );
}
