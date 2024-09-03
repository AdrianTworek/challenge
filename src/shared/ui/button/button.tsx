import { ComponentProps, ReactNode } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  children?: ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-slate-800 text-white px-2 py-1 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      {children}
    </button>
  );
};
