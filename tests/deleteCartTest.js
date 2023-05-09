import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';
import LoginPage from '../pages/login.page';
import ProductPage from '../pages/product.page';
import CartPage from '../pages/cart.page';

describe('Eliminar producto del carro', () => {
  it('Eliminar producto', async () => {
    // Abrir página principal
    await HomePage.abrir('/');
    // Hacer clic en el botón de Account
    await HomePage.hacerClicEnAccount();
    // Hacer clic en el botón de Log In
    await HomePage.hacerClicEnLogIn();

    // Iniciar sesión
    const nombreUsuario = "WELCOME, ANGEL MARTINEZ!";
    await LoginPage.login("angelmartinez@gmail.com","Aa12345*");
    expect(await HomePage.obtenerUsuarioConectado()).to.equal(nombreUsuario);

    // Buscar producto
    const productoABuscar = 'Jean';
    const resultadoEsperado = 'THE ESSENTIAL BOOT CUT JEAN';
    await HomePage.buscar(productoABuscar);
    expect(await BusquedaPage.obtenerNombreResultado()).to.equal(resultadoEsperado);

    // Ir a la página del producto y agregarlo al carro y eliminarlo
    await BusquedaPage.ingresarAlResultado();
    await ProductPage.selectColor('Indigo');
    await ProductPage.selectSize('32');
    await ProductPage.addToCart();
    await CartPage.removeItem();
  });
});