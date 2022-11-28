/// <reference types="Cypress" />
require('cypress-xpath');

describe('testLogin', () => {
    it('should login with valid credentials', () => {
        cy.visit('https://kane-taxi.web.app/login');

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-login/ion-content/form/ion-input[1]').type('kanedriver01@mailinator.com');

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-login/ion-content/form/ion-input[2]').type('asdf1234');

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-login/ion-content/form/div/ion-button').click();
    });
});