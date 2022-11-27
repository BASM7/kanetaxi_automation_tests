/// <reference types="Cypress" />

describe('pictureUpdate', () => {
    it('should login with valid credentials', () => {
        cy.visit('https://kane-taxi.web.app/login');

        cy.pictureUpdate('kanedriver01@mailinator.com', 'asdf1234');

        cy.url().should('eq', 'https://kane-taxi.web.app/login');
    });
});
