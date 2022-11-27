/// <reference types="Cypress" />
require('cypress-xpath')

describe('panic_button_sends_location', () => {
    it('should display message on alert', () => {
        cy.visit('https://kane-taxi.web.app/login');
        cy.login('kanedriver06@mailinator.com', 'asdf1234');

        cy.wait(5000);
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-home/ion-content/app-panic-fab/ion-fab/ion-fab-button').click()

        cy.wait(500);

        cy.xpath('/html/body/app-root/ion-app/ion-modal/app-panic-modal/ion-content/div/ion-label').should(
            'contain', 'Centro de Asistencia'
        );

        cy.xpath('/html/body/app-root/ion-app/ion-modal/app-panic-modal/ion-content/div/div/ion-list/ion-item-sliding/ion-item/ion-label').should(
            'contain', 'ACTIVAR ALERTA'
        );
    });
});