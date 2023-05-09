import BasePage from "./base.page";


class CrearCuentaPage extends BasePage{

    get firstNameInput() { return $('#firstname'); }
    get lastNameInput() { return $('#lastname'); }
    get emailInput() { return $('#email_address'); }
    get passwordInput() { return $('#password'); }
    get confirmPasswordInput() { return $('#confirmation'); }
    get submitButton() { return $('.buttons-set button'); }
    get successMessage() { return $("//span[normalize-space()='Thank you for registering with Madison Island.']"); }


        /**
    * LLenar el formulario
    * @param {String} firstNameInput 
    * @param {String} lastNameInput
    * @param {String} emailInput
    * @param {String} passwordInput
    * @param {String} confirmPasswordInput
    */

    async llenarFormulario(nombre, apellido, email, contraseña) {
        addStep(`Crear cuenta con:${nombre} ${apellido} ${email} ${contraseña}`)
        await this.firstNameInput.setValue(nombre);
        await this.lastNameInput.setValue(apellido);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(contraseña);
        await this.confirmPasswordInput.setValue(contraseña);
    }

    async enviarFormulario() {
        addStep('Enviar formulario')
        await this.submitButton.click();
    }

    async obtenerMensajeExito() {
        addStep('Obtener mensaje')
        return await this.successMessage.getText();
    }
}

export default new CrearCuentaPage();
