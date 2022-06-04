import { mockRecords } from "../../mocks/mockRecords";
import { IRecord } from "../../types/types";
import recordsSlice, { loadRecordsActionCreator } from "./recordsSlice";

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
});
