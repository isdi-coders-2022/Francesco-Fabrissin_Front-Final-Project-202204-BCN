describe("Given an App component", () => {
  describe("when a user logs in", () => {
    it("Then he should be able, when navigating to his collection, to create a record, visit the record page, delete the record and the log out", () => {
      const username = "test";
      const password = "1234";
      const buttonAddText = "Add record";
      const youtubeLink = "https://www.youtube.com/watch?v=EfK-WX2pa8c";
      const logoutText = "Logout";

      cy.visit("user/login");

      cy.get("label")
        .contains(/username/i)
        .type(username);

      cy.get("label")
        .contains(/password/i)
        .type(`${password}{enter}`);

      cy.contains("My Collection").click();

      cy.get("button").contains(buttonAddText).click();

      cy.get("#title").type("London Calling");
      cy.get("#artist").type("The Clash");
      cy.get("#year").type("1979");
      cy.get("#genre").select("Rock");
      cy.get("#conditions").select("VG");
      cy.get("#price").type("10");
      cy.get("#youtube_url").type(youtubeLink);

      cy.get("button").contains(buttonAddText).click();

      cy.url().should("include", "my_collection");

      cy.get('[data-testid="icon-delete"]').first().click();

      cy.get("button").contains(logoutText).click();

      cy.url().should("include", "user/login");
    });
  });
});
