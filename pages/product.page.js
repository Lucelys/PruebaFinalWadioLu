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
  get imgJean() {
    return $("//li[1]//a[1]//img[1]");
  }
  /**
   * Seleccionar una opción en el dropdown de color
   * @param {String} color
   */
  async selectColor(color) {
    await addStep(`Seleccionar color: ${color}`);
    await this.colorDropdown.selectByVisibleText(color);
    await this.selectColorOption(color).waitForDisplayed();
    
  }
  /**
   * Seleccionar una opción en el dropdown de tamaño
   * @param {String} selectedSize
   */
  async selectSize(selectedSize) {
    await addStep(`Seleccionar size: ${selectedSize}`);
    await this.sizeDropdown.selectByVisibleText(selectedSize);
    await this.selectSizeOption(selectedSize).waitForDisplayed();
    
  }
  /**
   * Hacer clic en el botón "Agregar al carrito"
   */
  async addToCart() {
    await addStep('Hacer clic en el botón "Agregar al carro"');
    await super.clickearElemento(this.addToCartButton);
    await browser.pause(2000);
  }
}
export default new ProductPage();


