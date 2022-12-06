import { PropsWithChildren } from "react";

type Props = PropsWithChildren & { className?: string };

export default function Heading3({ children, className }: Props) {
  return (
    <h3
      className={`${
        className ? className : ""
      } text-lg font-black text-gray-900 mb-2`}
    >
      {children}
    </h3>
  );
}
