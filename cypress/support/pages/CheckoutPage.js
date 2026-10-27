const { buildOrder } = require('../utils');

class CheckoutPage {
  addProduct(productId = 1) {
    cy.visit(`/product_details/${productId}`);
    cy.get('button.btn.btn-default.cart').click();
    cy.contains('View Cart').click();
  }

  viewCart() {
    cy.get('a[href="/view_cart"]').click();
  }

  proceedToCheckout() {
    cy.contains('a', 'Proceed To Checkout').click();
  }

  registerAndCheckout(user) {
    cy.contains('Register / Login').click();
    cy.get('[data-qa="signup-name"]').clear().type(user.name);
    cy.get('[data-qa="signup-email"]').clear().type(user.email);
    cy.get('[data-qa="signup-button"]').click();
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
    cy.get('[data-qa="continue-button"]').click();
  }

  placeOrder(orderData = buildOrder()) {
    cy.contains('a', 'Place Order').click();
    cy.get('[data-qa="name-on-card"]').clear().type(orderData.name);
    cy.get('[data-qa="card-number"]').clear().type(orderData.cardNumber);
    cy.get('[data-qa="cvc"]').clear().type(orderData.cvc);
    cy.get('[data-qa="expiry-month"]').clear().type(orderData.expiryMonth);
    cy.get('[data-qa="expiry-year"]').clear().type(orderData.expiryYear);
    cy.get('[data-qa="pay-button"]').click();
  }

  verifyOrderPlaced() {
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
  }
}

module.exports = new CheckoutPage();
