import axios from "axios";
import { mockToast } from "../../mocks/mockHooks";
import { mockRecords } from "../../mocks/mockRecords";
import { mockUsers } from "../../mocks/mockUser";
import {
  addRecordActionCreator,
  deleteRecordActionCreator,
  editRecordActionCreator,
  loadRecordsActionCreator,
} from "../features/recordsSlice";
import {
  addRecordThunk,
  deleteRecordThunk,
  editRecordThunk,
  loadMyRecordsThunk,
  loadUserCollectionThunk,
} from "./recordsThunks";

jest.mock("react-hot-toast", () => ({
  error: mockToast,
}));

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

      const loadRecordsAction = loadRecordsActionCreator(recordsData);

      const thunk = loadMyRecordsThunk();

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(loadRecordsAction);
    });
  });

  describe("When it's called with an authorized token but the api responds with an error", () => {
    test("Then it should call the tost's error method", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockRejectedValue({});

      const thunk = loadMyRecordsThunk();

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
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

  describe("When it's called with an new record but the api responds with an error", () => {
    test("Then it should call the tost's error method", async () => {
      const dispatch = jest.fn();
      const recordData = mockRecords[0];

      axios.post = jest.fn().mockRejectedValue({});

      const thunk = addRecordThunk(recordData);

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
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

describe("Given a editRecordThunk function", () => {
  describe("When it's called with an id of a record to edit and a new edited record", () => {
    test("Then it should dispatch the editRecordActionCreator with the new edited record received from the api", async () => {
      const dispatch = jest.fn();
      const idToEdit = "1";
      const recordData = {
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
        id: "1",
      };

      const editRecordAction = editRecordActionCreator(recordData);

      const thunk = editRecordThunk(idToEdit, recordData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(editRecordAction);
    });
  });

  describe("When it's called with an id 4 not present in the database", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();
      const idToEdit = "4";
      const recordData = mockRecords[0];

      const thunk = editRecordThunk(idToEdit, recordData);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given a loadUserCollectionThunk function", () => {
  describe("When it's called with a user id", () => {
    test("Then it should dispatch the twice", async () => {
      const dispatch = jest.fn();
      const userId = "1";
      const expectedNumberOfDispatchCalls = 4;

      axios.get = jest.fn().mockResolvedValue({
        data: { userInfo: mockUsers[0], records: mockRecords },
      });

      const thunk = loadUserCollectionThunk(userId);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(expectedNumberOfDispatchCalls);
    });
  });

  describe("When it's called with a user id but the api responds with an error", () => {
    test("Then it should call the toast's error method", async () => {
      const dispatch = jest.fn();
      const userId = "1";

      axios.get = jest.fn().mockRejectedValue({});

      const thunk = loadUserCollectionThunk(userId);

      await thunk(dispatch);

      expect(mockToast).toHaveBeenCalled();
    });
  });
});
