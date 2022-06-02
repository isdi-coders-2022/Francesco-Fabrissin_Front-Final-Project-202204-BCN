import { IUserCollection } from "../../types/types";
import UserCollection from "../UserCollection/UserCollection";

const UsersCollectionsList = ({ users }: { users: IUserCollection[] }) => {
  return (
    <ul className="users-list row justify-content-md-center">
      {users.map((user) => {
        return <UserCollection user={user} />;
      })}
    </ul>
  );
};

export default UsersCollectionsList;
