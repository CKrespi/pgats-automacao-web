class AuthPage {
  visitLogin() {
    cy.visit('/login');
  }

  signup(name, email) {
    cy.get('[data-qa="signup-name"]').clear().type(name);
    cy.get('[data-qa="signup-email"]').clear().type(email);
    cy.get('[data-qa="signup-button"]').click();
  }

  fillAccountDetails(user) {
    cy.get('h2').should('contain', 'Enter Account Information');
    cy.get('#id_gender1').check({ force: true });
    cy.get('[data-qa="password"]').clear().type(user.password);
    cy.get('#days').select('1');
    cy.get('#months').select('January');
    cy.get('#years').select('1990');
    cy.get('#newsletter').check({ force: true });
    cy.get('#optin').check({ force: true });
    cy.get('[data-qa="first_name"]').clear().type(user.firstName);
    cy.get('[data-qa="last_name"]').clear().type(user.lastName);
    cy.get('[data-qa="company"]').clear().type(user.company);
    cy.get('[data-qa="address"]').clear().type(user.address1);
    cy.get('[data-qa="country"]').select(user.country);
    cy.get('[data-qa="state"]').clear().type(user.state);
    cy.get('[data-qa="city"]').clear().type(user.city);
    cy.get('[data-qa="zipcode"]').clear().type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').clear().type(user.mobile);
    cy.get('[data-qa="create-account"]').click();
  }

  login(email, password) {
    cy.get('[data-qa="login-email"]').clear().type(email);
    cy.get('[data-qa="login-password"]').clear().type(password);
    cy.get('[data-qa="login-button"]').click();
  }

  verifyLoggedInUser(userName) {
    cy.contains('a', 'Logged in as').should('contain', userName);
  }

  verifyLoginError() {
    cy.contains('Your email or password is incorrect!').should('be.visible');
  }

  verifyExistingEmailError() {
    cy.contains('Email Address already exist!').should('be.visible');
  }

  deleteAccount() {
    cy.contains('a', 'Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');
  }
}

module.exports = new AuthPage();
