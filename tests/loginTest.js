import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import DATOS from '../datos/datosUsuarios.json';

describe('Login', () => {
    DATOS.forEach((data) => {
        it(`Debería iniciar sesión exitosamente como ${data.usuario}`, async () => {
            // Abrir página principal
            await HomePage.abrir('/');
            // Hacer clic en el botón de Account
            await HomePage.hacerClicEnAccount();
            // Hacer clic en el botón de Log In
            await HomePage.hacerClicEnLogIn();
            // Inicio de sesión
            await LoginPage.login(data.usuario, data.contrasena);
            expect(await HomePage.estaConectado()).to.be.true;
            expect(await HomePage.obtenerUsuarioConectado()).to.equal(data.nombreUsuario);
        
            //Cerrar sesión
            await LoginPage.logOut();
            expect(await HomePage.estaConectado()).to.be.false;
        });
    });
});



