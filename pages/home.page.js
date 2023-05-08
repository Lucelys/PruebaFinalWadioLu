import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   get barraDeBusqueda(){ return $('#search') }
   get linkMenuWomen(){ return $('a[href="http://magento-demo.lexiconn.com/women.html"]') }
   get usuarioConectado(){ return $('.welcome-msg') }



   //-------------------------------------------------------------------------------------------------------//

   async obtenerUsuarioConectado() {
    return await this.usuarioConectado.getText();
}

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
   async buscar(articulo) {
    addStep(`Buscar artículo: ${articulo}`)
    await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
    await this.barraDeBusqueda.keys('Enter');
   }

   /**
    * Obtener texto de la barra de búsqueda
    */
   async obtenerTextoBusqueda() {
    addStep('Obtener texto de la barra de búsqueda')
    return await this.barraDeBusqueda.getValue();
   }

   /**
    * Hacer clic en los elementos del menú
    */
   async clickearElementoDeMenu(menu) {
    const linkMenu = $(`a[href="http://magento-demo.lexiconn.com/${menu}.html"]`);
    await super.clickearElemento(linkMenu);
    await addStep(`Hacer clic en el menú ${menu}`);
    await browser.pause(2000);
}

}

export default new HomePage();
