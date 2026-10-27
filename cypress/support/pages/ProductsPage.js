class ProductsPage {
  visitProducts() {
    cy.visit('/products');
  }

  verifyAllProductsVisible() {
    cy.contains('h2', 'All Products').should('be.visible');
    cy.get('.single-products').should('have.length.at.least', 1);
  }

  openFirstProduct() {
    cy.get('a[href*="/product_details/"]').first().click();
  }

  searchProduct(term) {
    cy.get('#search_product').clear().type(term);
    cy.get('#submit_search').click();
  }

  verifySearchedProduct(term) {
    cy.contains('h2', 'Searched Products').should('be.visible');
    cy.get('.product-image-wrapper').should('contain.text', term);
  }

  verifyProductDetails(productName) {
    cy.contains('h2', productName).should('be.visible');
    cy.contains('Category: Women > Tops').should('be.visible');
  }
}

module.exports = new ProductsPage();
