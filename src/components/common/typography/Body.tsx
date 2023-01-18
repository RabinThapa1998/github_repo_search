import React from 'react';

interface IBodyProps {
  children: React.ReactNode;
  className?: string;
}
export function Body({ children, className }: IBodyProps) {
  return <p className={`text-base font-normal ${className}`}>{children}</p>;
}
