import uiSlice, {
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
});
