import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';
import ProductPage from '../pages/product.page';

const productoABuscar = 'Jean';
const resultadoEsperado = 'THE ESSENTIAL BOOT CUT JEAN';

describe('Buscando Producto por nombre', () => {
    it('Debería buscar un producto seleccionar color y size', async () => {
        await HomePage.abrir('/');

        addStep('Buscar producto')
        await HomePage.buscar(productoABuscar);
        expect(await BusquedaPage.obtenerNombreResultado()).to.equal(resultadoEsperado);

        addStep('Clic en el producto');
        await BusquedaPage.ingresarAlResultado();
        addStep('Selecionar color');
        await ProductPage.selectColor(color);
        addStep('Seleccionar tamaño');
        await ProductPage.selectSize(tamaño);
      
        
        addStep('Tomar una captura de pantalla de los elementos deseados y comparar con las capturas de pantalla de referencia');

        await $("//li[1]//a[1]//img[1]").waitForDisplayed();
        expect(
            await browser.checkElement(await $("//li[1]//a[1]//img[1]"), "Producto-Jean", {
                /* opciones de configuración para el elemento */
            }),
            "Error: La imagen de producto no coincide con la original"
        ).equal(0);
    });
});    
  

