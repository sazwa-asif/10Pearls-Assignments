class HomePage {
    constructor(page) {
        this.page = page;
        this.searchBox = 'input[name="q"]';
    }

    async navigate() {
        await this.page.goto('https://www.daraz.pk/');
    }

    async searchProduct(product) {
        await this.page.fill(this.searchBox, product);
        await this.page.keyboard.press('Enter');
    }
}

module.exports = HomePage;