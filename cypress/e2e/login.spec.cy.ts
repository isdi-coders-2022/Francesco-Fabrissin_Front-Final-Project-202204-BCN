describe("Given a login form", () => {
  describe("when a the user 'test' logs in", () => {
    it("Then the app should redirect you to the users collection page and find a a heading with the name of the user", () => {
      const username = "test";
      const password = "1234";

      cy.visit("user/login");

      cy.get("label")
        .contains(/username/i)
        .type(username);

      cy.get("label")
        .contains(/password/i)
        .type(`${password}{enter}`);

      cy.url().should("include", "users/collections");

      cy.get("ul").should("contain.text", "fra432");
      cy.get("h2").should("contain.text", username);
    });
  });
});
