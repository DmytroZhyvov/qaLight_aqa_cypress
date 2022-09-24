//Variant I

const testWithParams = ({arg, expected}) =>
    function(){
            cy.visit('https://google.com/');
            cy.get('input.gLFyf.gsfi').clear().type(arg[0]);
            cy.get('input.gLFyf.gsfi').should('contain.value', expected[0]);
            cy.get('input.gLFyf.gsfi').clear().type(arg[1]);
            cy.get('input.gLFyf.gsfi').should('contain.value', expected[1]);
            cy.get('input.gLFyf.gsfi').clear().type(arg[2]);
            cy.get('input.gLFyf.gsfi').should('contain.value', expected[2]);
    };

describe('Параметризований тест', ()=> {
    it('Через функцію', testWithParams({arg: ['1', '2', '3'], expected: ['1' , '2', '3']}));
});


//Variant II

const params = [
    {arg: ['1','2','3'], expected: ['1','2','3']},
    {arg: ['a','b','c'], expected: ['a','b','c']},
    {arg: ['aasdasd','asdsad','asdasd'], expected: ['aasdasd','asdsad','asdasd']}
]

params.forEach(({arg, expected}) => {
    it(`Type some field ${arg}`, ()=> {
        cy.visit('https://google.com/');
        cy.get('input.gLFyf.gsfi').clear().type(arg[0]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[0]);
        cy.get('input.gLFyf.gsfi').clear().type(arg[1]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[1]);
        cy.get('input.gLFyf.gsfi').clear().type(arg[2]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[2]);
    })

})