/// <reference types="Cypress" />
require('cypress-xpath');

describe('create_account', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it('should be able to create a new taxi account', () => {
        cy.visit('https://kane-taxi.web.app/login');

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-login/ion-content/div[2]/ion-button[2]').click();
        cy.wait(500);

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-signup/ion-content/form/ion-input[1]/input').type(
            "kanedriver13@mailinator.com");

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-signup/ion-content/form/ion-input[2]/input').type(
            "asdf1234");
        
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-signup/ion-content/form/ion-input[3]/input').type(
            "asdf1234");

        cy.wait(500);

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-signup/ion-content/form/div/ion-button').click();

        cy.wait(500);

        cy.url().should('eq', 'https://kane-taxi.web.app/login');
    });
});