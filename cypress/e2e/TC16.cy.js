const { buildUser } = require('../support/utils');
const CheckoutPage = require('../support/pages/CheckoutPage');
const AuthPage = require('../support/pages/AuthPage');

describe('TC16 - Place Order: Login before Checkout', () => {
  it('should login before checkout and place an order', () => {
    const user = buildUser('tc16');

    cy.registerUser(user);
    cy.visit('/products');
    cy.contains('a', 'View Product').first().click();
    cy.get('button.btn.btn-default.cart').click();
    cy.contains('View Cart').click();
    cy.contains('a', 'Proceed To Checkout').click();
    CheckoutPage.placeOrder();
    CheckoutPage.verifyOrderPlaced();
    AuthPage.deleteAccount();
  });
});
