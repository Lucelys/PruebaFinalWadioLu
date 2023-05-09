import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";

describe('Login', () => {
    it('Debería iniciar sesión exitosamente', async () => {
        // Abrir página principal
        await HomePage.abrir('/customer/account/login/');
        // Inicio de sesión
        await LoginPage.login("nadiamartinez@gmail.com", "Na12345*");
        const nombreUsuario = "WELCOME, NADIA MARTINEZ!"; // Definicion del nombre de usuario esperado
        expect(await HomePage.obtenerUsuarioConectado()).to.equal(nombreUsuario);
    });
});

