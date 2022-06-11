import {
  setCurrentPageActionCreator,
  setPaginationActionCreator,
} from "../../redux/features/paginationSlice";
import { useAppDispatch } from "../../redux/hooks";

const Pagination = () => {
  const dispatch = useAppDispatch();

  const loadMore = async () => {
    await dispatch(setPaginationActionCreator());
    await dispatch(setCurrentPageActionCreator());
  };

  return (
    <button onClick={loadMore} className="pagination">
      Load More
    </button>
  );
};

export default Pagination;
