const { buildUser } = require('./utils');

Cypress.Commands.add('registerUser', (userData = buildUser('tc')) => {
  cy.visit('/login');
  cy.get('[data-qa="signup-name"]').clear().type(userData.name);
  cy.get('[data-qa="signup-email"]').clear().type(userData.email);
  cy.get('[data-qa="signup-button"]').click();

  cy.get('h2').should('contain', 'Enter Account Information');
  cy.get('#id_gender1').check({ force: true });
  cy.get('[data-qa="password"]').type(userData.password);
  cy.get('#days').select('1');
  cy.get('#months').select('January');
  cy.get('#years').select('1990');
  cy.get('#newsletter').check({ force: true });
  cy.get('#optin').check({ force: true });
  cy.get('[data-qa="first_name"]').clear().type(userData.firstName);
  cy.get('[data-qa="last_name"]').clear().type(userData.lastName);
  cy.get('[data-qa="company"]').clear().type(userData.company);
  cy.get('[data-qa="address"]').clear().type(userData.address1);
  cy.get('[data-qa="country"]').select(userData.country);
  cy.get('[data-qa="state"]').clear().type(userData.state);
  cy.get('[data-qa="city"]').clear().type(userData.city);
  cy.get('[data-qa="zipcode"]').clear().type(userData.zipcode);
  cy.get('[data-qa="mobile_number"]').clear().type(userData.mobile);
  cy.get('[data-qa="create-account"]').click();

  cy.contains('Account Created!').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
  cy.contains('Logged in as').should('contain', userData.name);
});

Cypress.Commands.add('loginUser', (email, password) => {
  cy.visit('/login');
  cy.get('[data-qa="login-email"]').clear().type(email);
  cy.get('[data-qa="login-password"]').clear().type(password);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('logoutUser', () => {
  cy.contains('a', 'Logout').click();
  cy.url().should('include', '/login');
});

Cypress.Commands.add('addProductToCart', (productPath = '/product_details/1') => {
  cy.visit(productPath);
  cy.get('button.btn.btn-default.cart').click();
  cy.contains('View Cart').click();
});
