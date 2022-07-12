describe('Tests the accomplishment section', () => {
    beforeEach(() => {
        cy.visit('/accomplishments')
    });

    it('Should showcase error if information is missing', () => {
        cy.getByTestId('accomplishment-title-input')
            .type('My Basketball Accomplishment');

        cy.getByTestId('accomplishment-input')
            .type('I made 10 threes in a row');

        cy.get('.Accomplishment-btn')
            .click();

        cy.get('.Accomplishment-error-container')
            .find('p')
            .should('be.visible');
    });

    it('Should display validation component when all inputs are filled', () => {
        cy.getByTestId('accomplishment-title-input')
            .type('My Basketball Accomplishment');

        cy.getByTestId('accomplishment-input')
            .type('I made 10 threes in a row');

        cy.getByTestId('accomplishment-checkbox')
            .click();

        cy.get('.Accomplishment-btn')
            .click();

        cy.get('[src="/static/media/confetti.36cf59bd.svg"]')
            .should('be.visible');
    });


    it('Should return back to accomplishment dashboard with empty inputs when "Go Back" button is clicked',
        () => {
            cy.getByTestId('accomplishment-title-input')
                .type('My Basketball Accomplishment');

            cy.getByTestId('accomplishment-input')
                .type('I made 10 threes in a row');

            cy.getByTestId('accomplishment-checkbox')
                .click();

            cy.get('.Accomplishment-btn')
                .click();

            cy.get('.Accomplishment-btn')
                .click();

            cy.getByTestId('accomplishment-title-input')
                .should('have.value', '');

            cy.getByTestId('accomplishment-input')
                .should('have.value', '');

            cy.getByTestId('accomplishment-checkbox')
                .should('not.be.checked');
        });
});