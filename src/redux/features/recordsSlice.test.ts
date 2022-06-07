import { mockRecords } from "../../mocks/mockRecords";
import { IRecord } from "../../types/types";
import recordsSlice, {
  addRecordActionCreator,
  deleteRecordActionCreator,
  editRecordActionCreator,
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

  describe("When it receives an initial state with an array of 2 records and a edit record action with the edited record", () => {
    test("Then it should return a new records state with the array with the record edited", () => {
      const initialStatus: IRecord[] = [mockRecords[0], mockRecords[1]];
      const editedRecordPayload = {
        title: "Neptune's Lairs",
        artist: "Drexciya",
        year: "2002",
        genre: "Electronic",
        price: "30",
        conditions: "VG",
        youtube_url: "https://www.youtube.com/watch?v=tF9rKnOqWfk",
        image:
          "https://i.discogs.com/MfE22D_C9EA8XEvN62IeSEjazP2mkpss7bVtzp614fg/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzODY2/LTE1NDE0MzA3ODct/NzM3MC5qcGVn.jpeg",
        owner: "6294b3038ee0cb91581a8ce6",
        id: "6294b3fc8ee0cb91581a8ce5",
      };

      const expectedNewState = [mockRecords[0], editedRecordPayload];

      const editRecordAction = editRecordActionCreator(editedRecordPayload);

      const newState = recordsSlice(initialStatus, editRecordAction);

      expect(newState).toEqual(expectedNewState);
    });
  });
});
