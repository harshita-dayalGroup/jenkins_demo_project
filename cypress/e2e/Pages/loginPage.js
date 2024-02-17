export class LoginPage {

    //declare class names for selector
    login_uname_textbox = '#loginform-username'
    login_pass_textbox = '#loginform-password'
    login_compcode_textbox = '#loginform-clientid'
    loginButton = '#login-button'

    // This function will prodvide login credentials  
    loginWeb(username, password, CompCode) {
        cy.get(this.login_uname_textbox).type(username)
        cy.get(this.login_pass_textbox).type(password)
        cy.get(this.login_compcode_textbox).type(CompCode)
        cy.get(this.loginButton).click()
    }

    /**
     * Below function will be used for changing status
     */
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