import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import DATOS from '../datos/datosUsuarios.json';

describe('Login', () => {
    DATOS.forEach((data) => {
        it(`Debería iniciar sesión exitosamente como ${data.usuario}`, async () => {
            // Abrir página principal
            await HomePage.abrir('/customer/account/login/');
            // Inicio de sesión
            await LoginPage.login(data.usuario, data.contrasena);
            expect(await HomePage.obtenerUsuarioConectado()).to.equal(data.nombreUsuario);
        });
    });
});

