const params = [
    {arg: ['UserFirstName1', 'UserLastName1', 'user1@gmail.com', 'www.user1.com'],
        expected: ['UserFirstName1', 'UserLastName1', 'user1@gmail.com', 'www.user1.com']},
    {arg: ['UserFirstName2', 'UserLastName2', 'user2@gmail.com', 'www.user2.com'],
        expected: ['UserFirstName2', 'UserLastName2', 'user2@gmail.com', 'www.user2.com']},
    {arg: ['UserFirstName3', 'UserLastName3', 'user3@gmail.com', 'www.user3.com'],
        expected: ['UserFirstName3', 'UserLastName3', 'user3@gmail.com', 'www.user3.com']}
]

before(()=> {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('.theme-preview[alt="Dark Theme"]').click();
    cy.get("[data-name='menu-2']").click();
    cy.get('.menu-title.ng-tns-c141-9').click({force: true});
    cy.get('.menu-title.ng-tns-c141-11').click();
    cy.get("[data-name='menu-2']").click();
});

params.forEach(({arg, expected})=>{
    it('Fulfill the Block form', ()=> {
        cy.get('#inputFirstName').clear().type(arg[0]);
        cy.get('#inputFirstName').should('contain.value', expected[0]);
        cy.get('#inputLastName').clear().type(arg[1]);
        cy.get('#inputLastName').should('contain.value', expected[1]);
        cy.get('#inputEmail').clear().type(arg[2]);
        cy.get('#inputEmail').should('contain.value', expected[2]);
        cy.get('#inputWebsite').clear().type(arg[3]);
        cy.get('#inputWebsite').should('contain.value', expected[3]);
    });
});