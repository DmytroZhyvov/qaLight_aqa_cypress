describe('Find Locators', ()=> {
    it('should find all locators', ()=>{

        //Open home page
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');

        //Select a theme and click
        cy.get('.theme-preview[alt="Dark Theme"]').click();

        //Click on the menu
        cy.get("[data-name='menu-2']").click();

        //Menu Forms click
        cy.get('.menu-title.ng-tns-c141-9').click({force: true});

        //Menu Form Layouts click
        cy.get('.menu-title.ng-tns-c141-11').click();

        //click on the menu
        cy.get("[data-name='menu-2']").click();


        //header
        //Burger menu
        cy.get("[data-name='menu-2']");

        //Logo
        cy.get('.logo');

        //Theme button
        cy.get("ngx-header [type='button']");

        //Github button
        cy.get('iframe.ng-star-inserted');

        //Contact Us link
        cy.get('.mat-ripple.control-item.contact-us');

        //Profile image
        cy.get('.user-picture');


        //body

        //Inline form
        // Name/Last Name input
        cy.get("input[type='text'][placeholder='Jane Doe']");

        //Email input
        cy.get("input[type='text'][placeholder='Email']");

        //Remember me checkbox
        cy.get('.col-md-12 .custom-checkbox');

        //Submit button
        cy.get(".col-md-12 [type='submit']");


        //Using the Grid
        //Email input
        cy.get('#inputEmail1');

        //Password input
        cy.get('#inputPassword2');

        //Radios Option 1
        cy.get('nb-radio:nth-child(1)');

        //Radios Option 2
        cy.get('nb-radio:nth-child(2)');

        //Radios Option 3
        cy.get('nb-radio:nth-child(3)');

        //Sign In button
        cy.get(".offset-sm-3 [status='primary']");


        //Basic form
        //Email input
        cy.get('#exampleInputEmail1');

        //Password input
        cy.get('#exampleInputPassword1');

        //Check me out checkbox
        cy.get('.form-group > nb-checkbox .custom-checkbox');

        //Submit button
        cy.get("[status='danger']");


        //Form without labels

        //Recipients input
        cy.get("[placeholder='Recipients']");

        //Subject input
        cy.get("[placeholder='Subject']");

        //Message input
        cy.get('textarea');

        //Send button
        cy.get('.status-success');


        //Block form
        //First Name input
        cy.get('#inputFirstName');

        //Last Name input
        cy.get('#inputLastName');

        //Email input
        cy.get('#inputEmail');

        //Website input
        cy.get('#inputWebsite');

        //Submit button
        cy.get("[type='submit'].appearance-filled:nth-child(3)");


        //Horizontal form
        //Email input
        cy.get('#inputEmail3');

        //Password input
        cy.get('#inputPassword3');

        //Remember me checkbox
        cy.get('.offset-sm-3.col-sm-9 .checkbox');

        //Sign in button
        cy.get("[status='warning']");


        //footer
        //Created by link
        cy.get(".created-by a:contains('Akveo')");

        //Made with link
        cy.get(".created-by a:contains(' Nebular. ')");

        //Github icon
        cy.get('.ion.ion-social-github');

        //Facebook icon
        cy.get('.ion.ion-social-facebook');

        //Twitter icon
        cy.get('.ion.ion-social-twitter');

        //Linkedin icon
        cy.get('.ion.ion-social-linkedin');

    })
})