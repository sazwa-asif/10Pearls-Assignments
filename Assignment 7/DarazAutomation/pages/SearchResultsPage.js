class SearchResultsPage {
    constructor(page) {
        this.page = page;

        this.productCards = 'div[data-qa-locator="product-item"]';
    }

    async applyBrandFilter(brand) {

        const brandLocator = this.page.locator(`text=${brand}`);

        if (await brandLocator.count() > 0) {
            await brandLocator.first().click();
        }
    }

    async applyPriceFilter() {

        const minPrice = this.page.locator('input[placeholder="Min"]');
        const maxPrice = this.page.locator('input[placeholder="Max"]');

        await minPrice.fill('500');
        await maxPrice.fill('5000');

        await this.page.keyboard.press('Enter');
    }

    async getProductCount() {
        return await this.page.locator(this.productCards).count();
    }

    async openFirstProduct() {
        await this.page.locator(this.productCards).first().click();
    }
}

module.exports = SearchResultsPage;