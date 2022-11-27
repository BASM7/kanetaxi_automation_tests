/// <reference types="Cypress" />
require('cypress-xpath')

describe('data_registration', () => {
    it('should be able to register a new taxi documents', () => {
        cy.viewport(360, 740);

        cy.visit('https://kane-taxi.web.app/login');
        cy.login('kanedriver15@mailinator.com', 'asdf1234');

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[2]/ion-input/input').type('Marta');

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[3]/ion-input/input').type('Perez');

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[4]/ion-input/input').type('50687455698');

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[5]/div/app-camera-button/ion-button').click();

        cy.wait(500);

        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();

        cy.wait(500);

        cy.xpath('//*[@id="_capacitor-camera-input"]').attachFile('photo.jpg');

        cy.wait(500);

        // Hoja de Delicuencia.

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[6]/div/app-camera-button/ion-button').click();

        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();

        cy.wait(500);

        cy.get('input[type="file"]').attachFile('carro.png');

        cy.wait(500);

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[7]/ion-input/input').type('5-7845-6589');
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[8]/ion-input/input').type('2025-01-10');

        cy.xpath('html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[9]/div/app-camera-button/ion-button').click();
        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();

        cy.wait(500);

        cy.get('input[type="file"]').attachFile('carro.png');

        cy.wait(500);

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[10]/ion-input/input').type('DF87458962')

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[11]/ion-input/input').type('2024-05-10');


        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[1]/form/ion-row/ion-col[12]/div/app-camera-button/ion-button').click();
        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();

        cy.wait(500);

        cy.get('input[type="file"]').attachFile('carro.png');

        cy.wait(500);

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-footer/ion-toolbar/ion-grid/ion-row/ion-col[2]/ion-button').click();


        // carro foto 1.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[2]/form/ion-row/ion-col[2]/div/app-camera-button/ion-button').click();
        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();
        cy.wait(500);
        cy.get('input[type="file"]').attachFile('carro.png');
        cy.wait(500);

        // carro foto 2.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[2]/form/ion-row/ion-col[3]/div/app-camera-button/ion-button').click();
        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();
        cy.wait(500);
        cy.get('input[type="file"]').attachFile('carro.png');
        cy.wait(500);

        // carro foto 3.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[2]/form/ion-row/ion-col[4]/div/app-camera-button/ion-button').click();
        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();
        cy.wait(500);
        cy.get('input[type="file"]').attachFile('carro.png');
        cy.wait(500);

        // carro foto 4.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[2]/form/ion-row/ion-col[5]/div/app-camera-button/ion-button').click();
        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();
        cy.wait(500);
        cy.get('input[type="file"]').attachFile('carro.png');
        cy.wait(500);

        // carro foto 5.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[2]/form/ion-row/ion-col[6]/div/app-camera-button/ion-button').click();
        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();
        cy.wait(500);
        cy.get('input[type="file"]').attachFile('carro.png');
        cy.wait(500);

        // vencimiento ins.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[2]/form/ion-row/ion-col[7]/ion-input/input').type('2025-01-10');
        
        // vencimiento rtv.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[2]/form/ion-row/ion-col[8]/ion-input/input').type('2025-01-10');

        // numero de placa.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[2]/form/ion-row/ion-col[9]/ion-input/input').type('DF87458962');

        // vencimiento del marchamo.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[2]/form/ion-row/ion-col[10]/ion-input/input').type('2025-01-10');

        // buton siguiente.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-footer/ion-toolbar/ion-grid/ion-row/ion-col[2]/ion-button').click();


        // vehiculo foto 1.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[3]/form/ion-row/ion-col[2]/div/app-camera-button/ion-button').click();
        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();
        cy.wait(500);
        cy.get('input[type="file"]').attachFile('carro.png');
        cy.wait(500);

        // vehiculo foto 2.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[3]/form/ion-row/ion-col[3]/div/app-camera-button/ion-button').click();
        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();
        cy.wait(500);
        cy.get('input[type="file"]').attachFile('carro.png');
        cy.wait(500);

        // vehiculo foto 3.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[3]/form/ion-row/ion-col[4]/div/app-camera-button/ion-button').click();
        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();
        cy.wait(500);
        cy.get('input[type="file"]').attachFile('carro.png');
        cy.wait(500);

        // vehiculo foto 4.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[3]/form/ion-row/ion-col[5]/div/app-camera-button/ion-button').click();
        cy.xpath('/html/body/app-root/ion-app/ion-action-sheet/div[2]/div/div[1]/button[1]').click();
        cy.wait(500);
        cy.get('input[type="file"]').attachFile('carro.png');
        cy.wait(500);

        // buton enviar.
        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-footer/ion-toolbar/ion-grid/ion-row/ion-col[2]/ion-button').click();

        cy.wait(5000);

        cy.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-upload-docs/ion-content/ion-slides/div/ion-slide[4]/ion-row/ion-col/ion-label').should(
            'contain', '¡Documentos enviados!');
    });
});