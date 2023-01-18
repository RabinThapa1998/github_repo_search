import React from 'react';

interface IHeadingProps {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
}

export function Heading({ component = 'h5', className = '', children }: IHeadingProps) {
  if (component === 'h1') {
    return <h1 className={`text-4xl font-extrabold ${className}`}>{children}</h1>;
  } else if (component === 'h2') {
    return <h2 className={`text-3xl font-bold  ${className}`}>{children}</h2>;
  } else if (component === 'h3') {
    return <h3 className={`text-2xl font-bold  ${className}`}>{children}</h3>;
  } else if (component === 'h4') {
    return <h4 className={`text-xl font-bold ${className}`}>{children}</h4>;
  } else if (component === 'h5') {
    return <h5 className={`text-lg font-bold ${className}`}>{children}</h5>;
  } else {
    return <h6 className={`text-base font-bold ${className}`}>{children}</h6>;
  }
}
