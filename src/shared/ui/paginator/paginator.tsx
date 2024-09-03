import { Button } from '@shared/ui';

type PaginatorProps = {
  page: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  totalPages: number;
};

export const Paginator = ({
  page,
  handlePrevClick,
  handleNextClick,
  totalPages,
}: PaginatorProps) => {
  return (
    <div className="flex gap-2 pb-3 mt-3">
      <Button onClick={handlePrevClick} disabled={page === 1}>
        Previous
      </Button>
      <Button onClick={handleNextClick} disabled={page === totalPages}>
        Next
      </Button>
    </div>
  );
};
