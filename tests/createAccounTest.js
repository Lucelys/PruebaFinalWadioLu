import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import CrearCuentaPage from "../pages/crearCuenta.page";

describe('Creación de una Nueva Cuenta', () => {
    it('debería crear una cuenta exitosamente', async () => {
        //abrir pagina de login
        await HomePage.abrir('/customer/account/login/');

        //Clic en el boton Create an Account

        await LoginPage.irAcrearCuenta();

        //Llenar formulario de creacion de cuenta
        
        await CrearCuentaPage.llenarFormulario('Ana', 'Marin', 'anamarin@gmail.com', 'marin123');
        await CrearCuentaPage.enviarFormulario();
        const mensaje = await CrearCuentaPage.obtenerMensajeExito();
        assert.strictEqual(mensaje, 'Thank you for registering with Madison Island.');
    });
});


