import BasePage from '../pages/base.page';

class ProductPage extends BasePage {
  // WebElements
  get colorDropdown() {
    return browser.$('#attribute92');
  }
  get sizeDropdown() {
    return browser.$('#attribute180');
  }

  get selectColorOption() {
    return (color) => $(`//option[text()='${color}']`);
  }
  get selectSizeOption() {
    return (size) => $(`//option[text()='${size}']`);
  }
  get addToCartButton() {
    return $("//div[2]/button/span/span");
  }

  /**
   * Seleccionar una opción en el dropdown de color
   * @param {String} color
   */
  async selectColor(color) {
    await this.colorDropdown.selectByVisibleText(color);
    await this.selectColorOption(color).waitForDisplayed();
    await addStep(`Seleccionar color: ${color}`);
  }

  /**
   * Seleccionar una opción en el dropdown de tamaño
   * @param {String} selectedSize
   */
  async selectSize(selectedSize) {
    await this.sizeDropdown.selectByVisibleText(selectedSize);
    await this.selectSizeOption(selectedSize).waitForDisplayed();
    await addStep(`Seleccionar size: ${selectedSize}`);
  }

  /**
   * Hacer clic en el botón "Agregar al carrito"
   */
  async addToCart() {
    await super.clickearElemento(this.addToCartButton);
    await addStep('Hacer clic en el botón "Agregar al carrito"');
    await browser.pause(2000);
  }
}

export default new ProductPage();
