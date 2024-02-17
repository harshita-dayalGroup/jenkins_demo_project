export class ReceivePayment{
    visitReceivePaymentUrl(url){
        cy.visit(url)
    }
    get addReceivePaymentButton(){
        return cy.get('.float-end > .view')
    }
    clickAddReceivePaymentButton(){
        this.addReceivePaymentButton.click({force:true})
    }
    get partyNameDropDownPath(){
        return     cy.get(':nth-child(2) > .mb-3 > .select2 > .selection > .select2-selection')
    }
    clickPartyNameDropDown(){
        this.partyNameDropDownPath.click({force:true})
    }
    get paymentModeDropDown(){
        return cy.get('#payment-int_payment_mode')
    }
    clickPaymentModeDropDown(paymentMode){
        this.paymentModeDropDown.select(paymentMode)
    }
    get saveButton(){
      return  cy.get('.modal-footer > .btn')
    }
    clickSaveButton(){
        this.saveButton.click({force:true})
    }
    get amountTextField(){
    return  cy.get('#payment-dbl_amount')
    }
    typeAmount(amount){
        this.amountTextField.type(amount)
    }
   

    
}