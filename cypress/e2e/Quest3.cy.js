describe('tests', () => {
  it('', () => {
    cy.tastediveSearchBySimilar('Guardians Of The Galaxy').then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.body[0].movie).eq('Guardians');
    });
  });
});
