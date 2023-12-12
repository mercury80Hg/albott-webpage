/// <reference types="Cypress" />
import { MemoryRouter } from 'react-router-dom';
import Splash from '../../src/components/Splash';

describe('Splash component', () => {
  it('Should mount Splash component', () => {
    cy.mount(
      <MemoryRouter>
        <Splash />
      </MemoryRouter>
    );
    cy.get('link').should('exist');
    cy.contains('beauty');
  });
});
