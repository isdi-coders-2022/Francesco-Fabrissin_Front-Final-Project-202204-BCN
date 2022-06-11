import { IUserCollection } from "../../types/types";
import UserCollection from "../UserCollection/UserCollection";

const UsersCollectionsList = ({
  collections,
}: {
  collections: IUserCollection[];
}) => {
  return (
    <ul className="users-list row flex-wrap justify-content-center m-0 p-0">
      {collections.map((collection: IUserCollection, position) => {
        return <UserCollection key={position} user={collection} />;
      })}
    </ul>
  );
};

export default UsersCollectionsList;
