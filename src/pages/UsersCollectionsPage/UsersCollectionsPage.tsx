import { useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
import User from "../../components/User/User";
import UsersCollectionsList from "../../components/UsersCollectionsList/UsersCollectionsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadCollectionsThunk } from "../../redux/thunks/usersThunks";
import UsersCollectionsPageStyled from "./UsersCollectionsPageStyled";

const UsersCollectionsPage = () => {
  const { collections, filter } = useAppSelector((state) => state.users);
  const { pagination } = useAppSelector((state) => state.pagination);
  const { loading } = useAppSelector((state) => state.ui);
  const { userInfo } = useAppSelector((state) => state.user);
  const { pages, currentPage } = useAppSelector((state) => state.pagination);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadCollectionsThunk(filter, pagination));
  }, [dispatch, filter, pagination]);

  return (
    <>
      <UsersCollectionsPageStyled>
        <User userInfo={userInfo} />
        {!loading && collections.length !== 0 && (
          <h3 className="page-info">
            Users {filter === "All" ? "" : filter} Collections
          </h3>
        )}

        {!loading && collections.length === 0 && (
          <span className="not-found">Sorry, no collections found</span>
        )}

        <UsersCollectionsList collections={collections} />
      </UsersCollectionsPageStyled>
      {pages > currentPage && <Pagination />}
    </>
  );
};

export default UsersCollectionsPage;
