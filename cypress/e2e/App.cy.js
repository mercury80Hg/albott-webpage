describe('App.jsx, allanbott.com', () => {
  beforeEach(() => {
    cy.visit('https://allanbott.com')
      .url()
      .should('eq', 'https://allanbott.com/');
  });

  Cypress.Commands.add('headerSubBar', (name) => {
    cy.contains(`${name}`).click();
    cy.url().should('eq', `https://allanbott.com/${name}`);
    cy.get('#about').should('exist');
    cy.get('h2').contains(`${name}`).should('exist')
    cy.get('img')
      .should('exist')
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0);
    cy.contains('allan E bott').should('exist');
    cy.get('h2').should('exist')
    cy.get('[alt="beauty button"]').should('exist');
    cy.get('[alt="excitement button"]').should('exist');
    cy.get('[alt="adventure button"]').should('exist');
    cy.get('[alt="travel button"]').should('exist');
    cy.get('a').contains('about').should('exist');
    cy.get('a').contains('contact').should('exist');
    cy.get('a').contains('projects').should('exist');

  });

  Cypress.Commands.add('beatBody', () => {
    cy.get('SimpleSlider').should('exist')

  })

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

  it('Should visit /about and load all conent', () => {
    cy.headerSubBar('about')
    cy.get('a').should('have.length', 12);
  });

  it('Should visit /contact and load all conent', () => {
    cy.headerSubBar('contact')
    cy.get('a').should('have.length', 12);
  });

  it('Should visit /projects and load all conent', () => {
    cy.headerSubBar('projects')
    cy.get('a').should('have.length', 12);
  });

  it('Should visit /beauty and load all content', () => {
    cy.headerSubBar('beauty')
    cy.get('a').should('have.length', 12);
  })

  it('Should visit /excitement and load all content', () => {
    cy.headerSubBar('excitement')
    cy.get('a').should('have.length', 12);
  })

  it('Should visit /adventure and load all content', () => {
    cy.headerSubBar('adventure')
    cy.get('a').should('have.length', 12);
  })

  it('Should visit /travel and load all content', () => {
    cy.headerSubBar('travel')
    cy.get('a').should('have.length', 12);
  })


});
