import { render, screen } from "@testing-library/react";
import AntiController from "./AntiCOntroller";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = true;

jest.mock("../../redux/hooks", () => ({
  useAppSelector: () => ({ logged: mockLogged }),
}));

describe("Given a Controller function", () => {
  describe("When it's invoked", () => {
    test("Then it should navigate to the login when the user is not logged", () => {
      render(
        <AntiController>
          <h1>Hello</h1>
        </AntiController>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/users/collections");
    });

    test("Then it should render its children when the user is logged", () => {
      mockLogged = false;

      render(
        <AntiController>
          <h1>Hello</h1>
        </AntiController>
      );

      const header = screen.getByRole("heading", { name: "Hello" });

      expect(header).toBeInTheDocument();
    });
  });
});
