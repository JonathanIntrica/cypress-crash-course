describe('Rewards Dashboard', () => {
    beforeEach(() => {
        cy.visit("/rewards");
    });


    it('Should display a list of rewards', () => {
        cy.get('ul.Rewards-cards-container')
            .find('li.Rewards-cards-list')
            // Tutorial suggests finding the first element and checking it's value,
            // This is bad since that value is likely to change, this is a better more
            // dynamic solution
            .then((res) => {
                cy.log('Assert that there are elements within the ul');

                assert(res.length > 0);
            });
    });

    it('Should display a list of rewards with mock', () => {
        cy.intercept(
            'GET', 'http://localhost:4000/rewards', {
                fixture: 'rewards.json'
            });

        cy.get('ul.Rewards-cards-container')
            .then((res) => {
                cy.log('Assert that there are elements within the ul');

                assert(res.length > 0);
            });
    });
});