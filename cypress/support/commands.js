Cypress.Commands.add('tastediveSearchBySimilar', (movie) => {
  cy.get({
    url: `https://tastedive.com/api/similar?q=${movie}`,
  });
});
