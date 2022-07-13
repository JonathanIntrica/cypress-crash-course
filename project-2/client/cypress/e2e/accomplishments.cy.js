describe('Accomplishment dashboard', () => {
    beforeEach(() => {
        cy.visit("/accomplishments");
    });


    it('Should display error when inappropriate word is typed', () => {
       cy.getByTestId('accomplishment-title-input')
           .type('This is my accomplishment');

       cy.getByTestId('accomplishment-input')
           .type('I pet a giraffe');

       cy.getByTestId('accomplishment-checkbox')
           .click();

       cy.get('.Accomplishment-btn')
           .click();

       cy.contains('Your content is not appropriate')
           .should('be.visible');
    });


    it('Should display error when inappropriate word is typed, but with intercept', () => {
        cy.intercept('POST', 'http://localhost:4000', (req) => {
           req.reply((res) => {
               res.send({
                   msg: "Your content is not appropriate"
               });
            });
        });

        cy.getByTestId('accomplishment-title-input')
            .type('This is my accomplishment');

        cy.getByTestId('accomplishment-input')
            .type('I pet a giraffe');

        cy.getByTestId('accomplishment-checkbox')
            .click();

        cy.get('.Accomplishment-btn')
            .click();

        cy.contains('Your content is not appropriate')
            .should('be.visible');
    });
});