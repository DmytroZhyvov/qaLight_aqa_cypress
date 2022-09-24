/// <reference types="cypress"/>
// before(()=> {
//     cy.visit('https://google.com');
// });

beforeEach(()=> {
    cy.visit('https://google.com');
});

after(()=> {
    cy.log('This is a lig for after method');
});

afterEach(()=> {
    cy.log('This is a lig for afterEach method');
});

describe('Перший тест-cьют', () => {
    it('Пошук в гугл', () => {
        // cy.visit('https://google.com');
        cy.get('input.gLFyf.gsfi').type('Cypress');
        cy.get('div.wM6W7d').first().click();
    });
});

describe('Другий тест-сьют', () => {
    it("Пошук в гугл 1", () => {
        cy.get('input.gLFyf.gsfi').clear().type('Cypress');
    });

    it("Пошук в гугл 2", () => {
        cy.get('input.gLFyf.gsfi').clear().type('Cypress');
    });

    it("Пошук в гугл 3", () => {
        cy.get('input.gLFyf.gsfi').clear().type('Cypress');
    });
});

describe('Третій тест-сьют', () => {
    describe('Вкладений тест-сьют', ()=> {
        it("Пошук в гугл 1", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        });

        it("Пошук в гугл 2", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        });

        it("Пошук в гугл 3", () => {
            cy.get('input.gLFyf.gsfi').clear().type('Cypress');
        });
    });
});

describe('Четвертий тест-сьют', () => {
    // пропустити тест
    it.skip("Пошук в гугл 1", () => {
        cy.get('input.gLFyf.gsfi').clear().type('Cypress');
    });

    it("Пошук в гугл 2", () => {
        cy.get('input.gLFyf.gsfi').clear().type('Cypress');
    });

    //запустити лише цей тест
    // it.only("Пошук в гугл 3", () => {
    //     cy.visit('https://google.com');
    //     cy.get('input.gLFyf.gsfi').clear().type('Cypress');
    // });
});

