const { buildUser } = require('../support/utils');
const CheckoutPage = require('../support/pages/CheckoutPage');
const AuthPage = require('../support/pages/AuthPage');

describe('TC15 - Place Order: Register before Checkout', () => {
  it('should register before checkout and place an order', () => {
    const user = buildUser('tc15');

    CheckoutPage.addProduct(1);
    cy.contains('a', 'Proceed To Checkout').click();
    cy.contains('a', 'Register / Login').click();

    AuthPage.signup(user.name, user.email);
    AuthPage.fillAccountDetails(user);
    cy.get('[data-qa="continue-button"]').click();
    cy.visit('/view_cart');
    cy.contains('a', 'Proceed To Checkout').click();
    CheckoutPage.placeOrder();
    CheckoutPage.verifyOrderPlaced();
    cy.contains('a', 'Delete Account').click();
    cy.contains('Account Deleted!').should('be.visible');
  });
});
