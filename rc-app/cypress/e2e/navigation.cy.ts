describe("Pagination Tests", () => {
  it("should change the page and URL when pagination buttons are clicked", () => {
    cy.visit("localhost:3000/");

    cy.get("ul.inline-flex").should("be.visible");

    cy.get('button[id="2"]').click();

    cy.url().should("include", "?page=2");

    cy.get('button[id="3"]').click();

    cy.url().should("include", "?page=3");

    cy.get("#card-wrapper .card-container").should("have.length", 10);
  });
});

describe("PaginationSelector Component", () => {
  it("should change the number of items displayed when the limit is changed", () => {
    cy.visit("localhost:3000/");

    const initialValue = 10;
    cy.get("#card-wrapper .card-container");
    cy.get("#card-wrapper .card-container").should("have.length", initialValue);

    cy.get("#card-wrapper .card-container");
    cy.get("#pagination-limit").select("5");
    cy.get("#card-wrapper .card-container").should("have.length", 5);

    cy.get("#card-wrapper .card-container");
    cy.get("#pagination-limit").select("15");

    cy.url().should("include", "limit=15");
    cy.get("#card-wrapper .card-container").should("have.length", 15);

    cy.get("#pagination-limit").select("25");
    cy.url().should("include", "limit=25");
    cy.get("#card-wrapper .card-container").should("have.length", 25);
  });
});
