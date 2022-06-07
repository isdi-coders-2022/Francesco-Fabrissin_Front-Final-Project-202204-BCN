import { mockRecords } from "../../mocks/mockRecords";
import recordSlice, { loadRecordActionCreator } from "./recordSlice";

describe("Given a recordReducer", () => {
  describe("When it receives an initial empty state and a loadRecords action with the new record info", () => {
    test("Then it should return a new record state with the new record info", () => {
      const initialStatus: IRecord = {};
      const recordPayload = mockRecords[0];

      const expectedNewState = { ...recordPayload };

      const loadRecordAction = loadRecordActionCreator(recordPayload);

      const newState = recordSlice(initialStatus, loadRecordAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
