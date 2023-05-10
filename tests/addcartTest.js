import HomePage from '../pages/home.page';
import BusquedaPage from '../pages/busqueda.page';
import LoginPage from '../pages/login.page';
import ProductPage from '../pages/product.page';

const nombreUsuario = "WELCOME, NADIA MARTINEZ!";
const productoABuscar = 'Jean';
const resultadoEsperado = 'THE ESSENTIAL BOOT CUT JEAN';
const color = 'Indigo';
const tamaño = '32';
const usuario = 'nadiamartinez@gmail.com';
const contraseña = 'Na12345*';

describe('Agregar producto al carro', () => {
  it('Agregar producto al carro', async () => {
  
    addStep('Abrir la pagina principal');
    await HomePage.abrir('/');

    addStep('Clic en el boton ACCOUNT');
    await HomePage.hacerClicEnAccount();

    addStep('Clic en el boton Log In');
    await HomePage.hacerClicEnLogIn();

    

    addStep('Inicio de sesion');
    await LoginPage.login(usuario, contraseña);
    expect(await HomePage.obtenerUsuarioConectado()).to.equal(nombreUsuario);

    addStep('Buscar producto');
    await HomePage.buscar(productoABuscar);
    expect(await BusquedaPage.obtenerNombreResultado()).to.equal(resultadoEsperado);

    
    addStep('Clic en el producto');
    await BusquedaPage.ingresarAlResultado();
    addStep('Selecionar color');
    await ProductPage.selectColor(color);
    addStep('Seleccionar tamaño');
    await ProductPage.selectSize(tamaño);
    addStep('Agregar producto al carro');
    await ProductPage.addToCart();
  });
});

