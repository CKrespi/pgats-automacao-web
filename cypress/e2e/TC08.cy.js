const ProductsPage = require('../support/pages/ProductsPage');

describe('TC08 - Verify All Products and product detail page', () => {
  it('should display products and open product details', () => {
    ProductsPage.visitProducts();
    ProductsPage.verifyAllProductsVisible();
    ProductsPage.openFirstProduct();
    cy.url().should('include', '/product_details/');
    ProductsPage.verifyProductDetails('Blue Top');
  });
});
