import { mockRecords } from "../../mocks/mockRecords";
import { IRecord } from "../../types/types";
import recordsSlice, {
  addRecordActionCreator,
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
});
