import { mockRecords } from "../../mocks/mockRecords";
import {
  addRecordActionCreator,
  deleteRecordActionCreator,
  loadRecordsActionCreator,
} from "../features/recordsSlice";
import {
  addRecordThunk,
  deleteRecordThunk,
  loadMyRecordsThunk,
} from "./recordsThunks";

describe("Given a loadMyRecordsThunk function", () => {
  describe("When it's called with an authorized token", () => {
    test("Then it should dispatch the loadRecordsActionCreator with the recordsData from the api", async () => {
      const dispatch = jest.fn();
      const recordsData = mockRecords.map((record) => ({
        ...record,
        image: record.image
          ? `${process.env.REACT_APP_API_URL}${record.image}`
          : "",
      }));
      const token = "right token";

      const loadRecordsAction = loadRecordsActionCreator(recordsData);

      const thunk = loadMyRecordsThunk(token);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadRecordsAction);
    });
  });
});

describe("Given a addRecordThunk function", () => {
  describe("When it's called with an new record", () => {
    test("Then it should dispatch the addRecordActionCreator with the new record received from the api", async () => {
      const dispatch = jest.fn();
      const recordData = mockRecords[0];

      const addRecordAction = addRecordActionCreator(recordData);

      const thunk = addRecordThunk(recordData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(addRecordAction);
    });
  });
});

describe("Given a delteRecordThunk function", () => {
  describe("When it's called with a record id", () => {
    test("Then it should dispatch the addRecordActionCreator with the same record id", async () => {
      const dispatch = jest.fn();
      const recordId = "1";

      const deleteRecordAction = deleteRecordActionCreator(recordId);

      const thunk = deleteRecordThunk(recordId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(deleteRecordAction);
    });
  });

  describe("When it's called with a record id 4 which does not correspond to any record in the database", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();
      const recordId = "4";

      const deleteRecordAction = deleteRecordActionCreator(recordId);

      const thunk = deleteRecordThunk(recordId);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalledWith(deleteRecordAction);
    });
  });
});
