import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navbar component function", () => {
  describe("When invoked", () => {
    test("Then it should render a nav  and a logout button", () => {
      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );

      const navbar = screen.getByRole("navigation");
      const logoutButton = screen.getByRole("button", { name: "Logout" });

      expect(navbar).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });
  });
});
