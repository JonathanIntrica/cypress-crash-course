describe('Tests the habit dashboard', () => {
    beforeEach(() => {
        cy.visit("/habits");
    });


    it('Should display modal when add button is clicked', () => {
        // Course solution
        // cy.contains('button', 'Add')
        //     .click();
        //
        // cy.contains('div', 'Add a new habit')
        //     .should('be.visible');

        // My solution
        cy.get('#habit-add-btn')
            .click();

        // I would say this is the best method of selecting element based on what data is available
        cy.get('div.modal-title.h4')
            .should('be.visible');
    });


    it('Should display habit card when new habit is added', () => {
        cy.get('#habit-add-btn')
            .click();

        cy.get('input[placeholder="Habit"]')
            .type('Drink a cup of water');

        // Being super specific here cos selectors are naff
        cy.get('button[type="button"].btn.btn-primary')
            .contains('Save Changes')
            .click();

        cy.contains('Drink a cup of water')
            .should('be.visible')
            .and('have.class', 'HabitCard__habit-container');
    });


    it("Should toggle icon when habit card is clicked", () => {
        cy.get('#habit-add-btn')
            .click();

        cy.get('input[placeholder="Habit"]')
            .type('Drink a cup of water');

        cy.get('button[type="button"].btn.btn-primary')
            .contains('Save Changes')
            .click();

       cy.get('[src="/static/media/close.fa7e5ead.svg"]')
           .should('be.visible');

        cy.contains('Drink a cup of water')
            .click();

        cy.get('[src="/static/media/check.9e8832df.svg"]')
            .should('be.visible');
    });
});