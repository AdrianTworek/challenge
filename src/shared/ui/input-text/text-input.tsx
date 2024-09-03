import { ReactNode } from 'react';

type TextInputProps = React.ComponentProps<'input'> & {
  icon?: ReactNode;
};

export const TextInput = ({ icon, ...otherProps }: TextInputProps) => {
  return (
    <div className="relative flex items-center bg-white rounded-full">
      {icon}
      <input
        type="text"
        className={`w-full p-3 rounded-full ${icon ? 'pl-10' : 'p-3'}`}
        {...otherProps}
      />
    </div>
  );
};
