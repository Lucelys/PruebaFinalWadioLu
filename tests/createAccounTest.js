import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import CrearCuentaPage from "../pages/crearCuenta.page";

describe('Creación de una Nueva Cuenta', () => {
    it('debería crear una cuenta exitosamente', async () => {
         // Abrir página principal
         await HomePage.abrir('/');
         // Hacer clic en el botón de Account
         await HomePage.hacerClicEnAccount();
         // Hacer clic en el botón de Log In
         await HomePage.hacerClicEnLogIn();
         //Clic en el boton para ir a la cuenta
         await LoginPage.irAcrearCuenta();

         //Llenar formulario de creacion de cuenta
        
         await CrearCuentaPage.llenarFormulario('Luis', 'Gonzales', 'luisgonzales@gmail.com', 'luis1234');
         await CrearCuentaPage.enviarFormulario();
         const mensaje = await CrearCuentaPage.obtenerMensajeExito();
         assert.strictEqual(mensaje, 'Thank you for registering with Madison Island.');
    });
});


