import { IUserCollection } from "../../types/types";
import UserCollection from "../UserCollection/UserCollection";

const UsersCollectionsList = ({ users }: { users: IUserCollection[] }) => {
  return (
    <ul className="users-list row justify-content-md-center">
      {users.map((user: IUserCollection, position) => {
        return <UserCollection key={position} user={user} />;
      })}
    </ul>
  );
};

export default UsersCollectionsList;
