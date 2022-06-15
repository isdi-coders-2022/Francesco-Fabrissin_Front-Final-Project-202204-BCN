import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { mockAppDispatch } from "../../mocks/mockHooks";
import store from "../../redux/store/store";
import Modal from "./Modal";

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockAppDispatch,
}));

describe("Given a Modal component", () => {
  describe("When invoked and a openModal action with 'Record added succesfully!' is dispatched", () => {
    test("Then it should render a div element with the text 'Record added succesfully!'", () => {
      const expectedText = "Record added succesfully!";

      const openModalAction = {
        type: "ui/openModal",
        payload: expectedText,
      };

      store.dispatch(openModalAction);

      render(
        <Provider store={store}>
          <Modal />
        </Provider>
      );

      const modalText = screen.getByText(expectedText);

      expect(modalText).toBeInTheDocument();
    });
  });

  describe("When invoked", () => {
    test("Then the setTimeout function should be called", () => {
      jest.useFakeTimers();
      jest.spyOn(global, "setTimeout");

      render(
        <Provider store={store}>
          <Modal />
        </Provider>
      );

      jest.useFakeTimers();
      jest.spyOn(global, "setTimeout");

      jest.advanceTimersByTime(3000);

      expect(setTimeout).toHaveBeenCalled();

      expect(mockAppDispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked  and the user clicks on the message", () => {
    test("Then the dispatch should be called", () => {
      jest.useFakeTimers();
      jest.spyOn(global, "setTimeout");

      render(
        <Provider store={store}>
          <Modal />
        </Provider>
      );

      const modal = screen.getByTestId("modal");

      userEvent.click(modal);

      expect(mockAppDispatch).toHaveBeenCalled();
    });
  });
});
