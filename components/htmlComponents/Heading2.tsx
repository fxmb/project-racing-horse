import { PropsWithChildren } from "react";

type Props = PropsWithChildren & { className?: string };

export default function Heading2({ children, className }: Props) {
  return (
    <h2
      className={`${
        className ? className : ""
      } text-2xl font-black text-gray-900 mb-3 `}
    >
      {children}
    </h2>
  );
}
