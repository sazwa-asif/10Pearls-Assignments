const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const SearchResultsPage = require('../pages/SearchResultsPage');
const ProductPage = require('../pages/ProductPage');

test.setTimeout(60000);

test('Daraz Product Search Automation', async ({ page }) => {

    const home = new HomePage(page);
    const results = new SearchResultsPage(page);

    // Navigate to Daraz
    await home.navigate();

    // Search Electronics
    await home.searchProduct('electronics');

    // Apply Brand Filter
    await results.applyBrandFilter('Samsung');

    // Apply Price Filter
    await results.applyPriceFilter();

    // Validate Product Count > 0
    const count = await results.getProductCount();

    console.log('Products Found:', count);

    expect(count).toBeGreaterThan(0);

    // Open Product Details
    await results.openFirstProduct();

    // Give page/tab time to open
    await page.waitForTimeout(3000);

    const pages = page.context().pages();

    console.log('Number of pages:', pages.length);

    let productPage;

    if (pages.length > 1) {
        // Product opened in a new tab
        productPage = pages[pages.length - 1];
    } else {
        // Product opened in the same tab
        productPage = page;
    }

    await productPage.waitForLoadState('domcontentloaded');

    const productObj = new ProductPage(productPage);

    const freeShipping =
        await productObj.isFreeShippingAvailable();

    console.log('Free Shipping:', freeShipping);

    expect(typeof freeShipping).toBe('boolean');
});