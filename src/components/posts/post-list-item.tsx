import { Post } from '@models';

type PostListItemProps = {
  id: Post['id'];
  title: Post['title'];
};

export const PostListItem = ({ id, title }: PostListItemProps) => {
  return (
    <div className="flex items-center gap-2">
      <p>
        {id}. {title}
      </p>
    </div>
  );
};
