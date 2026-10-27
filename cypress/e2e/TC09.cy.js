const ProductsPage = require('../support/pages/ProductsPage');

describe('TC09 - Search Product', () => {
  it('should return search results for the selected product', () => {
    ProductsPage.visitProducts();
    ProductsPage.searchProduct('Blue Top');
    ProductsPage.verifySearchedProduct('Blue Top');
  });
});
