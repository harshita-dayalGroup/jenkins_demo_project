export class MakePayment{
    viistMakePaymnetPage(url){
        cy.visit(url)
    
    }
    get addMakePaymentButton(){
        return cy.get('.float-end > .view')
    }
    clickAddMakePaymentButton(){
        this.addMakePaymentButton.click({force:true})
    }
    get  vendorTypeField(){
        return cy.get('#select2-payment-int_vendor_id-container')
    }
    clickVendorTypeDropDown(){
        this.vendorTypeField.click({force:true})
    }
    get searchField(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    typeSearchField(data){
        this.searchField.type(data).type("{enter}",{force:true})
    }
    get amountField(){
        return cy.get('#payment-dbl_amount')
    }
    typeAmount(){
        this.amountField.type("50000").type("{enter}",{force:true})
    }
   get paymentModeDropDown(){
   return cy.get('#payment-int_payment_mode') 

    }
    clickPaymentModeDropDown(){
        this.paymentModeDropDown.select("Cash")
    }

}