import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import CrearCuentaPage from "../pages/crearCuenta.page";

const nombre = 'Angel';
const apellido = 'Gonzales';
const email = 'luisgonzales@gmail.com';
const contraseña = 'luis1234';

describe('Creación de una Nueva Cuenta', () => {
    it('debería crear una cuenta exitosamente', async () => {
        addStep('Abrir la pagina principal');
        await HomePage.abrir('/');
    
        addStep('Clic en el boton ACCOUNT');
        await HomePage.hacerClicEnAccount();
    
        addStep('Clic en el boton Log In');
        await HomePage.hacerClicEnLogIn();

        addStep('Clic en el boton CREATE AN ACCOUNT');
         await LoginPage.irAcrearCuenta();

        addStep('Completar formulario');
         await CrearCuentaPage.llenarFormulario(nombre,apellido,email,contraseña);
         await CrearCuentaPage.enviarFormulario();
         const mensaje = await CrearCuentaPage.obtenerMensajeExito();
         assert.strictEqual(mensaje, 'Thank you for registering with Madison Island.');
    });
});
