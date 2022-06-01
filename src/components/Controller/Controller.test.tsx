import { render, screen } from "@testing-library/react";

import Controller from "./Controller";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = false;

jest.mock("../../redux/hooks", () => ({
  useAppSelector: () => ({ logged: mockLogged }),
}));

describe("Given a Controller function", () => {
  describe("When it's invoked", () => {
    test("Then it should navigate to the login when the user is not logged", () => {
      render(
        <Controller>
          <h1>Hello</h1>
        </Controller>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/user/login");
    });

    test("Then it should render its children when the user is logged", () => {
      mockLogged = true;

      render(
        <Controller>
          <h1>Hello</h1>
        </Controller>
      );

      const header = screen.getByRole("heading", { name: "Hello" });

      expect(header).toBeInTheDocument();
    });
  });
});
