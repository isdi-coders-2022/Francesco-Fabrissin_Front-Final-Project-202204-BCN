import uiSlice, {
  closeModalActionCreator,
  openModalActionCreator,
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "./uiSlice";

describe("Given a uiReucer", () => {
  describe("When it receives an initial state with the loading property set to false and a setLoadingOn action", () => {
    test("Then it should return a ui state with the loading property set to false", () => {
      const initialState = {
        loading: false,
        modal: "",
      };

      const expectedStatus = {
        loading: true,
        modal: "",
      };

      const loadingOnAction = setLoadingOnActionCreator();

      const newStatus = uiSlice(initialState, loadingOnAction);

      expect(newStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an initial state with the loading property set to true and a setLoadingOff action", () => {
    test("Then it should return a ui state with the loading property set to true", () => {
      const initialState = {
        loading: true,
        modal: "",
      };

      const expectedStatus = {
        loading: false,
        modal: "",
      };

      const loadingOffAction = setLoadingOffActionCreator();

      const newStatus = uiSlice(initialState, loadingOffAction);

      expect(newStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an initial state with the modal property set to '' and a openModal action with the text 'Record added succesfully!'", () => {
    test("Then it should return a ui state with the modal property set to 'Record added succesfully!'", () => {
      const initialState = {
        loading: false,
        modal: "",
      };

      const expectedStatus = {
        loading: false,
        modal: "Record added succesfully!",
      };

      const modalPayload = "Record added succesfully!";

      const openModalAction = openModalActionCreator(modalPayload);

      const newStatus = uiSlice(initialState, openModalAction);

      expect(newStatus).toEqual(expectedStatus);
    });
  });

  describe("When it receives an initial state with the modal property set to 'Record added succesfully!' and a closeModal action", () => {
    test("Then it should return a ui state with the modal property set to ''", () => {
      const initialState = {
        loading: false,
        modal: "Record added succesfully!",
      };

      const expectedStatus = {
        loading: false,
        modal: "",
      };

      const closeModalAction = closeModalActionCreator();

      const newStatus = uiSlice(initialState, closeModalAction);

      expect(newStatus).toEqual(expectedStatus);
    });
  });
});
