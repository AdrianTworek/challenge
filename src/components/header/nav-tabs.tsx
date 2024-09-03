import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export const NavTabs = () => {
  return (
    <nav className="flex">
      <Tab to="/users">Users</Tab>
      <Tab to="/posts">Posts</Tab>
    </nav>
  );
};

type TabProps = {
  to: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
};

const Tab = ({
  to,
  children,
  className = 'w-full text-center bg-blue-400 text-white p-3 hover:bg-blue-600',
  activeClassName = 'bg-blue-500',
}: TabProps) => {
  const getClassName = (isActive: boolean) => {
    return `${className} ${isActive ? activeClassName : ''}`;
  };

  return (
    <NavLink to={to} className={({ isActive }) => getClassName(isActive)}>
      {children}
    </NavLink>
  );
};
