import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';
import LoginPage from '../pages/login.page';
import ProductPage from '../pages/product.page';



describe('Agregar producto al carro', () => {
    it('Agregar producto al carro', async () => {
        //Abrir pagina
        await HomePage.abrir('/customer/account/login/');
        const nombreUsuario = "WELCOME, NADIA MARTINEZ!";

       //Login

        await LoginPage.login("nadiamartinez@gmail.com","Na12345*");
        expect(await LoginPage.obtenerUsuarioConectado()).to.equal(nombreUsuario);

      // Buscar producto
        const product = 'Jean';
        const resultadoEsperado = 'THE ESSENTIAL BOOT CUT JEAN';
        await HomePage.buscar(product);
        expect(await BusquedaPage.obtenerNombreResultado()).to.equal(resultadoEsperado);

        await BusquedaPage.ingresarAlResultado();
         //Seleccionar color y size

        await ProductPage.selecionarColor();
        await ProductPage.selecionarSize();
        // agregar un producto al carro




        
    });
 });