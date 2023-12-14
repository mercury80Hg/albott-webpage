describe('App.jsx, allanbott.com', () => {
  beforeEach(() => {
    cy.visit('https://allanbott.com')
      .url()
      .should('eq', 'https://allanbott.com/');
  });

  Cypress.Commands.add('headerSubBar', (title, buttons) => {
    cy.contains(`${title}`).click();
    cy.url().should('eq', `https://allanbott.com/${title}`);
    cy.get('#about').should('exist');
    cy.get('a').should('have.length', buttons);
    cy.get('h2').contains(`${title}`).should('exist');
    cy.get('img')
      .should('exist')
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0);
    cy.contains('allan E bott').should('exist');
    cy.get('h2').should('exist');
    cy.get('[alt="beauty button"]').should('exist');
    cy.get('[alt="excitement button"]').should('exist');
    cy.get('[alt="adventure button"]').should('exist');
    cy.get('[alt="travel button"]').should('exist');
    cy.get('a').contains('about').should('exist');
    cy.get('a').contains('contact').should('exist');
    cy.get('a').contains('projects').should('exist');
  });

  Cypress.Commands.add('beatBody', () => {
    cy.get('.carousel', { timeout: 15000 }).should('exist');
    cy.get('img')
      .should('exist')
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0);
    cy.get('img').should('have.length.above', 2);
    cy.get('.content-paragraph > p')
      .invoke('text')
      .its('length')
      .should('be.gte', 11);
  });

  it('Should load allanbott.com', () => {
    cy.get('a').should('have.length', 11);
    cy.get('header').should('exist');
    cy.contains('excitement').should('exist');
    cy.contains('adventure').should('exist');
    cy.contains('beauty').should('exist');
    cy.contains('travel').should('exist');
    cy.get('.logo').should('exist');
    cy.get('img')
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0);
    cy.contains('about').should('exist');
    cy.contains('contact').should('exist');
    cy.contains('allan E bott').should('exist');
  });

  it('Should visit /about and load all content', () => {
    cy.headerSubBar('about', 12);
    cy.beatBody();
  });

  it('Should visit /contact and load all content', () => {
    cy.headerSubBar('contact', 17);
  });

  it('Should visit /projects and load all content', () => {
    cy.headerSubBar('projects', 12);
  });

  it('Should visit /beauty and load all content', () => {
    cy.headerSubBar('beauty', 12);
    cy.beatBody();
  });

  it('Should visit /excitement and load all content', () => {
    cy.headerSubBar('excitement', 12);
    cy.beatBody();
  });

  it('Should visit /adventure and load all content', () => {
    cy.headerSubBar('adventure', 12);
    cy.beatBody();
  });

  it('Should visit /travel and load all content', () => {
    cy.headerSubBar('travel', 12);
    cy.beatBody();
  });
});
