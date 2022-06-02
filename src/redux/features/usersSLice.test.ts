import { mockUsers } from "../../mocks/mockUser";
import { IUserCollection } from "../../types/types";
import usersSlice, { loadCollectionsActionCreator } from "./usersSlice";

describe("Given a usersReducer", () => {
  describe("When it receives an inital users status and a loadCollections action with the lusers collections info", () => {
    test("Then it should return the new users state with the received users collections info", () => {
      const initialStatus: IUserCollection[] = [];
      const usersCollections = mockUsers;
      const expectedStatus = [...mockUsers];

      const loadCollectionsAction =
        loadCollectionsActionCreator(usersCollections);

      const usersStatus = usersSlice(initialStatus, loadCollectionsAction);

      expect(usersStatus).toEqual(expectedStatus);
    });
  });
});
