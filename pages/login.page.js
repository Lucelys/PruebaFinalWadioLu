import BasePage from "./base.page"

class LoginPage extends BasePage{
    
    get emailInput() { return $('input[type="email"]') }
    get passwordInput() { return $('input[type="password"]') }
    get loginButton() { return $('//span[text()="Login"]') }
    get usuarioConectado(){ return $('.welcome-msg') }

  
    async obtenerUsuarioConectado() {
        return await this.usuarioConectado.getText();
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