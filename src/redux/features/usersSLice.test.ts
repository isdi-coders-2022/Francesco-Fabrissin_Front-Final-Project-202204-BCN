import { mockUsers } from "../../mocks/mockUser";
import { UsersState } from "../../types/types";
import usersSlice, {
  loadCollectionsActionCreator,
  setFilterActionCreator,
} from "./usersSlice";

describe("Given a usersReducer", () => {
  describe("When it receives an inital users status and a loadCollections action with the lusers collections info", () => {
    test("Then it should return the new users state with the received users collections info", () => {
      const initialStatus: UsersState = {
        collections: [],
        filter: "All",
        pages: 0,
        pagination: 8,
      };
      const usersCollections = mockUsers;
      const expectedStatus = {
        ...initialStatus,
        collections: [...mockUsers],
      };

      const loadCollectionsAction =
        loadCollectionsActionCreator(usersCollections);

      const usersStatus = usersSlice(initialStatus, loadCollectionsAction);

      expect(usersStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an inital users status and a setFilter action with the filter information 'Rock'", () => {
    test("Then it should return the new users state with the filter property set to'Rock'", () => {
      const initialStatus: UsersState = {
        collections: [],
        filter: "All",
        pages: 0,
        pagination: 8,
      };
      const filterInfo = "Rock";
      const expectedStatus = {
        ...initialStatus,
        filter: filterInfo,
      };

      const setFilterAction = setFilterActionCreator(filterInfo);

      const usersStatus = usersSlice(initialStatus, setFilterAction);

      expect(usersStatus).toEqual(expectedStatus);
    });
  });
});
