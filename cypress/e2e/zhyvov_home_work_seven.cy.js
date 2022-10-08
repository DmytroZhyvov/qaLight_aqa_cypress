const params = [{
    arg: {
        position: 'top-right',
        title: 'top-right title',
        content: 'top-right content',
        timeOut: '1000',
        type: 'primary'
    },
    expected: {
        title: 'top-right title',
        content: 'top-right content',
        position: {
            alignItems: 'flex-start',
            justifyContent: 'flex-end'
        },
        color: 'rgb(233, 29, 99)',
        icon: 'email'
        }
    },
    {
        arg: {
            position: 'bottom-right',
            title: 'bottom-right title',
            content: 'bottom-right content',
            timeOut: '1500',
            type: 'success'
        },
        expected: {
            title: 'bottom-right title',
            content: 'bottom-right content',
            position: {
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
            },
            color: 'rgb(96, 175, 32)',
            icon: 'checkmark'
        }
    },
    {
        arg: {
            position: 'bottom-left',
            title: 'bottom-left title',
            content: 'bottom-left content',
            timeOut: '2000',
            type: 'info'
        },
        expected: {
            title: 'bottom-left title',
            content: 'bottom-left content',
            position: {
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
            },
            color: 'rgb(4, 149, 238)',
            icon: 'question-mark'
        }
    },
    {
        arg: {
            position: 'top-left',
            title: 'top-left title',
            content: 'top-left content',
            timeOut: '2500',
            type: 'warning'
        },
        expected: {
            title: 'top-left title',
            content: 'top-left content',
            position: {
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
            },
            color: 'rgb(255, 159, 5)',
            icon: 'alert-triangle'
        }
    }
]

before(()=> {
    //Open the site
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    //Select a theme
    cy.get("[alt='Material Dark Theme']").click();
    //Click on Modal & Overlays
    cy.get('.menu-title.ng-tns-c141-19').click();
    //Click on Toast
    cy.get('.menu-title.ng-tns-c141-23').click();
})


params.forEach(({arg, expected})=>{
    it('User can configure a toast', ()=> {
        //Select position
        cy.get('.mat-ripple.position-select').click();
        cy.get(`[ng-reflect-value=${arg.position}]`).click();
        //Fill title
        cy.get(`[name='title']`).clear().type(arg.title);
        //Fill content
        cy.get(`[name='content']`).clear().type(arg.content);
        //Fill timeout
        cy.get(`[name='timeout']`).clear().type(arg.timeOut);
        //Select type
        cy.get('.mat-ripple.appearance-outline').eq(2).click();
        cy.get(`[ng-reflect-value=${arg.type}]`).click();
        //Click the SHOW TOAST button
        cy.get('nb-card-footer button.status-basic').click();

        cy.get('nb-toast[ng-reflect-toast]').then(toast => {
            //Check toast title
            cy.wrap(toast).find('.title.subtitle').should('contain', expected.title);
            //Check toast content
            cy.wrap(toast).find('.content-container .message').should('contain', expected.content);
            //Check toast position
            cy.get('div[dir=ltr]').should('have.css', 'align-items').and('eq', expected.position.alignItems);
            cy.get('div[dir=ltr]').should('have.css', 'justify-content').and('eq', expected.position.justifyContent);
            //Check toast color
            cy.wrap(toast).should('have.css', 'background-color').and('eq', expected.color);
            //Check toast icon
            cy.get(`nb-toast [data-name=${expected.icon}]`).should('exist');
        })
    });
});