import HomePage from '../pages/home.page';
import LoginPage from '../pages/login.page';




describe('Login', () => {
    it('Debería iniciar sesion exitosamente', async () => {
        // Abrir pagina principal
        await HomePage.abrir('/');
        //Inicio de sesion
        await LoginPage.login("nadiamartinez@gmail.com","Na12345*");
        expect(await LoginPage.obtenerUsuarioConectado()).to.equal(nombreUsuario);



    });
 });