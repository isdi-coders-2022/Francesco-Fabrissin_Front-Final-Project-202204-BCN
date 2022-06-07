import { mockRecords } from "../../mocks/mockRecords";
import { loadRecordActionCreator } from "../features/recordSlice";
import { loadRecordThunk } from "./recordThunk";

describe("Given a loadRecordThunk function", () => {
  describe("When it's called with a record id and authorized token", () => {
    test("Then it should dispatch the loadRecordActionCreator with the record info from the api", async () => {
      const dispatch = jest.fn();
      const recordId = "1";
      const recordInfo = mockRecords[0];
      window.localStorage.setItem("token", "token");

      const loadRecordAction = loadRecordActionCreator(recordInfo);

      const thunk = loadRecordThunk(recordId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadRecordAction);
    });
  });

  describe("When it's called with a record id 4 not present in thye database", () => {
    test("Then it should not dispatch the loadRecordActionCreator", async () => {
      const dispatch = jest.fn();
      const recordId = "4";

      window.localStorage.setItem("token", "token");

      const thunk = loadRecordThunk(recordId);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
