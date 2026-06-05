class ProductPage {
    constructor(page) {
        this.page = page;
    }

    async isFreeShippingAvailable() {

        const pageText = await this.page.textContent('body');

        return pageText.toLowerCase().includes('free shipping');
    }
}

module.exports = ProductPage;