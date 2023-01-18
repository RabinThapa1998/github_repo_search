import React from 'react';

interface IBoxProps {
  direction?: 'row' | 'column';
  component?: 'flex' | 'block';

  children: React.ReactNode;
  className?: string;
}

export function Box({
  component = 'block',
  direction = 'row',
  className = '',

  children,
}: IBoxProps) {
  if (component === 'flex') {
    if (direction === 'row') {
      return <div className={`flex flex-row  ${className}`}>{children}</div>;
    } else {
      return <div className={`flex  flex-col  ${className}`}>{children}</div>;
    }
  } else {
    return <div className={className}>{children}</div>;
  }
}
