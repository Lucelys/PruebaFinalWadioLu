import BasePage from '../pages/base.page';

class CartPage extends BasePage {
  // WebElements
  get deleteProduct() {
    return browser.$("td[class='a-center product-cart-remove last'] a[title='Remove Item']");
  }
  

  /**
 * Hacer clic en el botón "Remove item"
 */
async removeItem() {
    await addStep('Hacer clic en el botón "Remove Item"');
    await super.clickearElemento(this.deleteProduct);
    console.log('Se hizo clic en el botón "Remove Item"');
    await browser.pause(2000);
  }
}

export default new CartPage();