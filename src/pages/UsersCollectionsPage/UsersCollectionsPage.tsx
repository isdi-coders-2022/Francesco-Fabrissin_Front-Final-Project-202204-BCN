import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import Pagination from "../../components/Pagination/Pagination";
import RecordsList from "../../components/RecordsList/RecordsList";
import User from "../../components/User/User";
import UsersCollectionsList from "../../components/UsersCollectionsList/UsersCollectionsList";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loadMyRecordsThunk } from "../../redux/thunks/recordsThunks";
import { loadCollectionsThunk } from "../../redux/thunks/usersThunks";
import UsersCollectionsPageStyled from "./UsersCollectionsPageStyled";

const UsersCollectionsPage = () => {
  const { collections, filter } = useAppSelector((state) => state.users);
  const { pagination } = useAppSelector((state) => state.pagination);
  const { loading } = useAppSelector((state) => state.ui);
  const { my_collection } = useParams();
  const { userInfo } = useAppSelector((state) => state.user);
  const records = useAppSelector((state) => state.records);
  const { pages, currentPage } = useAppSelector((state) => state.pagination);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const navigateToAddForm = () => {
    navigate("/my_collection/addRecord");
  };

  useEffect(() => {
    dispatch(loadCollectionsThunk(filter, pagination));
  }, [dispatch, filter, pagination]);

  useEffect(() => {
    dispatch(loadMyRecordsThunk());
  }, [dispatch, navigate]);

  return (
    <>
      <UsersCollectionsPageStyled>
        <User userInfo={userInfo} />
        <h3 className={my_collection ? "my-collection" : "page-info"}>
          {my_collection
            ? "My Collection"
            : !loading && collections.length !== 0
            ? `Users ${filter === "All" ? "" : filter} Collections`
            : ""}
        </h3>
        {!loading && collections.length === 0 && (
          <span>Sorry, no collections found</span>
        )}
        {my_collection && (
          <Button
            type="button"
            add={true}
            className="button"
            text="Add record"
            action={navigateToAddForm}
          />
        )}
        {my_collection ? (
          <RecordsList ownCollection={true} records={records} />
        ) : (
          <UsersCollectionsList collections={collections} />
        )}
      </UsersCollectionsPageStyled>
      {!my_collection && pages > currentPage && <Pagination />}
    </>
  );
};

export default UsersCollectionsPage;
