import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';
import ProductPage from '../pages/product.page';

const productoABuscar = 'Jean';
const resultadoEsperado = 'THE ESSENTIAL BOOT CUT JEAN';


describe('Buscando Producto por nombre', () => {
    it('Debería buscar un producto seleccionar color y size', async () => {
        await HomePage.abrir('/');

         // Buscar producto
        await HomePage.buscar(productoABuscar);
        expect(await BusquedaPage.obtenerNombreResultado()).to.equal(resultadoEsperado);

        // Ir a la página del producto seleccionar color y size
        await BusquedaPage.ingresarAlResultado();
        await ProductPage.selectColor('Indigo');
        await ProductPage.selectSize('32');
        
    });
 });
