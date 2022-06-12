import styled from "styled-components";
import { IUserCollection } from "../../types/types";
import UserCollection from "../UserCollection/UserCollection";

const UsersCollectionListStyled = styled.ul`
  width: 90%;
  display: flex;

  @media (min-width: 300px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const UsersCollectionsList = ({
  collections,
}: {
  collections: IUserCollection[];
}) => {
  return (
    <UsersCollectionListStyled className="users-list row justify-content-center m-0 p-0">
      {collections.map((collection: IUserCollection, position) => {
        return <UserCollection key={position} user={collection} />;
      })}
    </UsersCollectionListStyled>
  );
};

export default UsersCollectionsList;
