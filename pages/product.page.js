import BasePage from '../pages/base.page';


class ProductPage extends BasePage {
     //WebElements
   get selectC(){ return $("//select[@id='attribute92']") }
   get selectColor(){ return $("//option[text()='Indigo']") }
   get selectSize(){ return $("//option[text()='32']") }
   get addCart(){ return $("xpath=//div[2]/button/span/span") }

   /**
     * Click en el elemento select
    * */
   async selectC() {
    addStep(`clic en el select: ${this.selectC}`)
    await super.clickearElemento(this.selectC);
}

   /**
     * Click en el elemento seleccionar color
    * */
    async selecionarColor() {
        
        await super.clickearElemento(this.selectColor);
        /*const selectBox = await $(this.selectC);    
        await selectBox.selectByVisibleText('Indigo');*/
    
    }
    /**
     * Click en el elemento seleccionar size
    * */
    async selecionarSize() {
        addStep(`Seleccionar size: ${selecionarSize}`)
        await super.clickearElemento(this.selectSize);
    }

     /**
     * Click en el elemento agregar al carro
    * */
     async addCart() {
        addStep(`Agragar al carro: ${this.addCart}`)
        await super.clickearElemento(this.addCart);
    }

}
export default new ProductPage();
