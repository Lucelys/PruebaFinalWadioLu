import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import DATOS from '../datos/datosUsuarios.json';

describe('Login', () => {
    DATOS.forEach((data) => {
        it(`Debería iniciar sesión exitosamente como ${data.usuario}`, async () => {
            addStep('Abrir la pagina principal');
            await HomePage.abrir('/');

            addStep('Clic en el boton ACCOUNT');
            await HomePage.hacerClicEnAccount();

            addStep('Clic en el boton Log In');
            await HomePage.hacerClicEnLogIn();

            addStep('Inicio de sesion');
            await LoginPage.login(data.usuario, data.contrasena);
            expect(await HomePage.estaConectado()).to.be.true;
            expect(await HomePage.obtenerUsuarioConectado()).to.equal(data.nombreUsuario);
        
            addStep('Cerrar sesion');
            await LoginPage.logOut();
            expect(await HomePage.estaConectado()).to.be.false;
        });
    });
});



