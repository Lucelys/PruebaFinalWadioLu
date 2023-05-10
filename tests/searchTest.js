import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';
import ProductPage from '../pages/product.page';

const productoABuscar = 'THE ESSENTIAL BOOT CUT JEAN';
const resultadoEsperado = 'THE ESSENTIAL BOOT CUT JEAN';
const color = 'Indigo';
const tamaño = '32';


describe('Buscando Producto por nombre y seleccionar color', () => {
    it('Debería buscar un producto seleccionar color y size', async () => {
        addStep('Abrir la pagina principal');
        await HomePage.abrir('/');

        addStep('Buscar producto');
        await HomePage.buscar(productoABuscar);
        expect(await BusquedaPage.obtenerNombreResultado()).to.equal(resultadoEsperado);

        addStep('Clic en el producto');
        await BusquedaPage.ingresarAlResultado();
        addStep('Selecionar color');
        await ProductPage.selectColor(color);
        addStep('Seleccionar tamaño');
        await ProductPage.selectSize(tamaño);
        
    });
 });
