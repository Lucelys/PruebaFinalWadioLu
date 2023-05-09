import BasePage from "./base.page"

class LoginPage extends BasePage{
    
    get emailInput() { return $('#email') }
    get passwordInput() { return $('#pass')}
    get loginButton() { return $('//span[text()="Login"]') }
    get btnCrearCuenta() { return $("//a[@title='Create an Account']")}


    /**
    * Ir a crear cuenta
    */

    async irAcrearCuenta() {
        addStep(`Cliquear sobre Crear cuenta`)
        await super.clickearElemento(this.btnCrearCuenta);
    }
     

    /**
    * Login
    * @param {String} email 
    * @param {String} password
    */
    async login(email,password) {
        addStep(`Loggearse con: ${email} y ${password}`)
        await this.emailInput.setValue(email)
        await this.passwordInput.setValue(password)
        await browser.pause(5000);
        await this.loginButton.click()
    }
}
  
export default new LoginPage();
