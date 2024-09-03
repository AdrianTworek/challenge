import { User } from '@models';

type UserListItemProps = {
  name: User['name'];
};

export const UserListItem = ({ name }: UserListItemProps) => {
  return (
    <div className="flex items-center gap-2">
      <DummyAvatar />
      <p>{name}</p>
    </div>
  );
};

const DummyAvatar = () => {
  return <div className="w-10 h-10 bg-gray-300 rounded-full" />;
};
