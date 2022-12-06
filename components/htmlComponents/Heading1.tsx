import { PropsWithChildren } from "react";

type Props = PropsWithChildren & { className?: string };

export default function Heading1({ children, className }: Props) {
  return (
    <h1
      className={`${
        className ? className : ""
      } text-4xl font-black text-gray-900 mb-2`}
    >
      {children}
    </h1>
  );
}
