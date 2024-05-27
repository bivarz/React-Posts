describe("ThemeToggle Component", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/");
  });

  it("should toggle the theme between light and dark", () => {
    cy.get("html").should("have.class", "light");

    // Verificar se o ícone do botão é o ícone da lua (indicando modo claro)
    cy.get('[data-cy="theme-toggle-button"]').within(() => {
      cy.get('[data-cy="moon-icon"]').should("exist");
    });

    // Clicar no botão para alternar o tema para escuro
    cy.get('[data-cy="theme-toggle-button"]').click();

    // Verificar se a classe do tema mudou para escuro
    cy.get("html").should("have.class", "dark");

    // Verificar se o ícone do botão é o ícone do sol (indicando modo escuro)
    cy.get('[data-cy="theme-toggle-button"]').within(() => {
      cy.get('[data-cy="sun-icon"]').should("exist");
    });

    // Clicar novamente no botão para alternar o tema de volta para claro
    cy.get('[data-cy="theme-toggle-button"]').click();

    // Verificar se a classe do tema mudou de volta para claro
    cy.get("html").should("have.class", "light");

    // Verificar se o ícone do botão voltou a ser o ícone da lua (indicando modo claro)
    cy.get('[data-cy="theme-toggle-button"]').within(() => {
      cy.get('[data-cy="moon-icon"]').should("exist");
    });
  });
});
