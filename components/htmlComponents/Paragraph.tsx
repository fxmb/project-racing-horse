import { PropsWithChildren } from "react";

type Props = PropsWithChildren & { className?: string };

export default function Paragraph({ children, className }: Props) {
  return (
    <p className={`leading-relaxed ${className ? className : ""}`}>
      {children}
    </p>
  );
}
