import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';
import LoginPage from '../pages/login.page';
import ProductPage from '../pages/product.page';

const nombreUsuario = "WELCOME, NADIA MARTINEZ!";
const productoABuscar = 'Jean';
const resultadoEsperado = 'THE ESSENTIAL BOOT CUT JEAN';

describe('Agregar producto al carro', () => {
  it('Agregar producto al carro', async () => {
    // Abrir página principal
    await HomePage.abrir('/');
    // Hacer clic en el botón de Account
    await HomePage.hacerClicEnAccount();
    // Hacer clic en el botón de Log In
    await HomePage.hacerClicEnLogIn();

    

    // Iniciar sesión
    await LoginPage.login("nadiamartinez@gmail.com","Na12345*");
    expect(await HomePage.obtenerUsuarioConectado()).to.equal(nombreUsuario);

    // Buscar producto
    
    await HomePage.buscar(productoABuscar);
    expect(await BusquedaPage.obtenerNombreResultado()).to.equal(resultadoEsperado);

    // Ir a la página del producto seleccionar color, size y agregarlo al carro
    await BusquedaPage.ingresarAlResultado();
    await ProductPage.selectColor('Indigo');
    await ProductPage.selectSize('32');
    await ProductPage.addToCart();
  });
});

