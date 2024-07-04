import { $ } from '@wdio/globals';
import Page from './page.js';

class LoginPage extends Page {

    get usernameTextBox () {
        return $('#user-name'); 
    }

    get passwordTextBox () {
        return $('#password'); 
    }

    get btnSubmit () {
        return $('#login-button'); 
    }

    async login (username, password) {
        await this.usernameTextBox.setValue(username);
        await this.passwordTextBox.setValue(password);
        await this.btnSubmit.click();
    }

    async inputUsername(username) {
        await this.usernameTextBox.setValue(username);
    }

    async inputPassword(password) {
        await this.passwordTextBox.setValue(password);
    }

    open () {
        return super.open('');
    }
}

export default new LoginPage();
