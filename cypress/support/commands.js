// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-xpath')
import 'cypress-file-upload'
Cypress.Commands.add('login', (email, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    cy.get('ion-button[type=submit]').click();
})

Cypress.Commands.add('pictureUpdate', (email, password) => {
    cy.viewport(360, 740)
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    
    cy.get('ion-button[type=submit]').click();

    cy.wait(5000)
    cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-home/ion-header/ion-toolbar/ion-title/ion-button[1]').click()
    
    cy.wait(7000)
    cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[5]/div/app-camera-button/ion-button').click()

    cy.wait(500)
    cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click()

    cy.wait(500)
    cy.get('#_capacitor-camera-input').attachFile('fpn.jpg')
    
    cy.wait(500)
    cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-footer/ion-toolbar/ion-grid/ion-row/ion-col[2]/ion-button').click()

    cy.wait(500)
    cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-footer/ion-toolbar/ion-grid/ion-row/ion-col[2]/ion-button').click()

    cy.wait(500)
    cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-footer/ion-toolbar/ion-grid/ion-row/ion-col[2]/ion-button').click()
    cy.wait(500)
    cy.xpath('/html/body/app-root/ion-app/ion-alert/div[2]/div[3]/button[2]').click()

})

Cypress.Commands.add('testAlert', (email, password) => {
    cy.viewport(360, 740)
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);

    cy.get('ion-button[type=submit]').click();
})