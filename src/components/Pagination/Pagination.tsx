import {
  setCurrentPageActionCreator,
  setPaginationActionCreator,
} from "../../redux/features/paginationSlice";
import { useAppDispatch } from "../../redux/hooks";
import PaginationStyled from "./PaginationStyled";

const Pagination = () => {
  const dispatch = useAppDispatch();

  const loadMore = () => {
    dispatch(setPaginationActionCreator());
    dispatch(setCurrentPageActionCreator());
  };

  return (
    <PaginationStyled onClick={loadMore} className="pagination">
      Load More
    </PaginationStyled>
  );
};

export default Pagination;
