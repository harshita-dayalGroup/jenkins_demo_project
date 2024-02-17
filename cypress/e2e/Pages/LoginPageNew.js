
class LoginPage {
  
  // Element locators
  visitLoginPage(qaserver){
      cy.visit(qaserver)
      
  }
  get usernameInputTextField() {
    return cy.get("input[name='LoginForm[username]']");
  }

  // Setter for usernameInput
  set setUsernameInput(value) {
    this.usernameInputTextField.type(value);
  }

  // Getter for passwordInput
  get passwordInputTextField() {
    return cy.get("input[name='LoginForm[password]']");
  }

  // Setter for passwordInput
  set setPasswordInput(value) {
    this.passwordInputTextField.type(value);
  }

  // Getter for organisationCodeInput
  get organisationCodeInputTextField() {
    return cy.get('#loginform-clientid');
  }

  // Setter for organisationCodeInput
  set setOrganisationCodeInput(value) {
    this.organisationCodeInputTextField.type(value);
  }

  // Getter for loginButton
  get loginButton() {
    return cy.get("#login-button");
  }

  // Setter for loginButton
  clickLoginButton() {
    this.loginButton.click();
  }

loginWeb(username,password,organisationCode){
  const loginPage = new LoginPage();
 // loginPage.visitUrl(qaserver,projectClone)
  loginPage.setUsernameInput = username;
  loginPage.setPasswordInput = password;
  loginPage.setOrganisationCodeInput = organisationCode;
  loginPage.clickLoginButton();
}  
changeStatus(StatusName) {
  cy.get('li[role=option]').each(function ($ele, index) {
      cy.log($ele.text())
      if ($ele.text() === StatusName) {
          cy.wrap($ele).click({force:true})
          cy.get('#submitBtn').click({force:true})
      }
      else {
          cy.log('not found')
      }
  })
  cy.wait(2000)
}
// This function will logout
logout() {
  cy.get('#user_profile_dropdown_button').click({force:true})
  cy.get('#logout').click()
}
}

export default LoginPage;
