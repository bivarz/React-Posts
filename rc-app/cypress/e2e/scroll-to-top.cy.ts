describe("Scroll To Top Button", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("should be hidden initially", () => {
    cy.get("#scroll-button").should("not.be");
  });

  it("should appear when scrolling down", () => {
    cy.scrollTo("bottom");
    cy.get(".scroll-to-top-button", { timeout: 10000 }).should("be.visible");
  });

  it("should show complete background when at the bottom of the page", () => {
    cy.scrollTo("bottom");
    cy.get(".scroll-to-top-button", { timeout: 10000 }).should("be.visible");
    cy.get(".scroll-to-top-button")
      .invoke("css", "background-color")
      .then((backgroundColor) => {
        expect(backgroundColor).to.equal("rgba(0, 0, 0, 0)");
      });
  });
});
