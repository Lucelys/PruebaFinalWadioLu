import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';




describe('Buscando Producto', () => {
    it('Debería buscar un producto por su nombre', async () => {
        await HomePage.abrir('/');

        const product = 'Jean';
        const resultadoEsperado = 'THE ESSENTIAL BOOT CUT JEAN';
        await HomePage.buscar(product);
        expect(await BusquedaPage.obtenerNombreResultado()).to.equal(resultadoEsperado);
    });
 });
