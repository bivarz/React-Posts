describe("ThemeToggle Component", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/");
  });

  it("should toggle the theme between light and dark", () => {
    cy.get("html").should("have.class", "light");

    cy.get('[data-cy="theme-toggle-button"]').within(() => {
      cy.get('[data-cy="moon-icon"]').should("exist");
    });

    cy.get('[data-cy="theme-toggle-button"]').click();

    cy.get("html").should("have.class", "dark");

    cy.get('[data-cy="theme-toggle-button"]').within(() => {
      cy.get('[data-cy="sun-icon"]').should("exist");
    });

    cy.get('[data-cy="theme-toggle-button"]').click();

    cy.get("html").should("have.class", "light");

    cy.get('[data-cy="theme-toggle-button"]').within(() => {
      cy.get('[data-cy="moon-icon"]').should("exist");
    });
  });
});
