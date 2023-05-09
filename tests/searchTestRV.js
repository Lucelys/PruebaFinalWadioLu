import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';
import ProductPage from '../pages/product.page';

describe('Buscando Producto por nombre', () => {
    it('Debería buscar un producto seleccionar color y size', async () => {
        await HomePage.abrir('/');

         // Buscar producto
        const productoABuscar = 'Jean';
        const resultadoEsperado = 'THE ESSENTIAL BOOT CUT JEAN';
        await HomePage.buscar(productoABuscar);
        expect(await BusquedaPage.obtenerNombreResultado()).to.equal(resultadoEsperado);

        // Ir a la página del producto seleccionar color y size
        await BusquedaPage.ingresarAlResultado();
        await ProductPage.selectColor('Indigo');
        await ProductPage.selectSize('32');
      
        // Tomar una captura de pantalla de los elementos deseados y comparar con las capturas de pantalla de referencia

        await $("//li[1]//a[1]//img[1]").waitForDisplayed();
        expect(
            await browser.checkElement(await $("//li[1]//a[1]//img[1]"), "Producto-Jean", {
                /* opciones de configuración para el elemento */
            }),
            "Error: La imagen de producto no coincide con la original"
        ).equal(0);
    });
});

  

