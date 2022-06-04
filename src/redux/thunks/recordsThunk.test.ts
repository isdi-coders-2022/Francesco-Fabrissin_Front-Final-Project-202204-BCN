import { mockRecords } from "../../mocks/mockRecords";
import { loadRecordsActionCreator } from "../features/recordsSlice";
import { loadMyRecordsThunk } from "./recordsThunks";

describe("Given a loadMyRecordsThunk function", () => {
  describe("When it's called with an authorized token", () => {
    test("Then it should dispatch the loadRecordsActionCreator with the recordsData from the api", async () => {
      const dispatch = jest.fn();
      const recordsData = mockRecords.map((record) => ({
        ...record,
        image: `${process.env.REACT_APP_API_URL}${record.image}`,
      }));
      const token = "right token";

      const loadRecordsAction = loadRecordsActionCreator(recordsData);

      const thunk = loadMyRecordsThunk(token);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadRecordsAction);
    });
  });
});
