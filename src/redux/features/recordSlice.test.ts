import { mockRecords } from "../../mocks/mockRecords";
import { IRecord } from "../../types/types";
import recordSlice, { loadRecordActionCreator } from "./recordSlice";

describe("Given a recordReducer", () => {
  describe("When it receives an initial empty state and a loadRecords action with the new record info", () => {
    test("Then it should return a new record state with the new record info", () => {
      const initialStatus: IRecord = {
        id: "",
        title: "",
        artist: "",
        year: "",
        genre: "",
        conditions: "",
        image: "",
        imageBackup: "",
        price: "",
        owner: "",
        youtube_url: "",
      };
      const recordPayload = mockRecords[0];

      const expectedNewState = { ...recordPayload };

      const loadRecordAction = loadRecordActionCreator(recordPayload);

      const newState = recordSlice(initialStatus, loadRecordAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
