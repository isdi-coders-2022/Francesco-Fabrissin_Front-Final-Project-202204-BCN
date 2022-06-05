import { mockRecords } from "../../mocks/mockRecords";
import { IRecord } from "../../types/types";
import recordsSlice, {
  addRecordActionCreator,
  deleteRecordActionCreator,
  loadRecordsActionCreator,
} from "./recordsSlice";

describe("Given a recordsReducer", () => {
  describe("When it receives an initial state and a loadRecords action with 2 records as payload", () => {
    test("Then it should return a new records state with the 2 an array of the 2 records", () => {
      const initialStatus: IRecord[] = [];
      const recordsPayload = mockRecords;

      const expectedNewState = [...recordsPayload];

      const loadRecordsAction = loadRecordsActionCreator(recordsPayload);

      const newState = recordsSlice(initialStatus, loadRecordsAction);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it receives an initial state with an array of 1 record and a addRecord action with 1 new record as payload", () => {
    test("Then it should return a new records state with the new record added to the initial array", () => {
      const initialStatus: IRecord[] = [mockRecords[0]];
      const recordPayload = mockRecords[1];

      const expectedNewState = [...initialStatus, mockRecords[1]];

      const addRecordAction = addRecordActionCreator(recordPayload);

      const newState = recordsSlice(initialStatus, addRecordAction);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it receives an initial state with 3 records and a delete record action with the id of one of he 2 records", () => {
    test("Then it should return a new records state with an array without the record of the id in the action payloas", () => {
      const initialStatus: IRecord[] = mockRecords;
      const idPayload = "6294b3fc8ee0cb91581a8ce9";

      const expectedNewState = [mockRecords[1], mockRecords[2]];

      const delteRecordAction = deleteRecordActionCreator(idPayload);

      const newState = recordsSlice(initialStatus, delteRecordAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
