
beforeEach(()=> {
    cy.visit('https://google.com');
});

//added retries
describe('Ретрай', {retries: 2}, () => {
    //Add retries
    it("Пошук в гугл 1", {retries: 2},() => {
        cy.get('input.gLFyf.gsfi1').clear().type('Cypress');
    });

    it("Пошук в гугл 2", () => {
        cy.get('input.gLFyf.gsfi').clear().type('Cypress');
    });

    it("Пошук в гугл 3", () => {
        cy.get('input.gLFyf.gsfi2').clear().type('Cypress');
    });
});