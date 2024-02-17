export class RetailOrderPage{
    visitRetailOrderUrl(url){
        cy.visit(url)

    }
    clickAddButton(projectClone){
        cy.get(`[href="/${projectClone}/Sales/index.php/retail-order/create"]`).click({force:true})
    }
    get discountField(){
      return  cy.get('#invoice-dbl_additional_discount_value')
    }
    typeDiscountValue(data){
        this.discountField.type(data)
    }
    get deliveryModeDropDown(){
        return cy.get('#select2-invoice-int_delivery_mode_type-container')
    }
    selectDeliveryMode(){
        this.deliveryModeDropDown.click({force:true})
    }
    get searchField(){
        return cy.get('.select2-search__field')
    }
    typeInSearchField(data){
        this.searchField.type(data).type("{enter}",{force:true})
    }
    clickProductPackDropDown(i){
        return cy.get(`#select2-invoicedetail-${i}-int_product_pack_id-container`).click({force:true})
    }
    
    get addOrderButton (){
        return cy.get("body div section div div div div form div div  table thead tr th:nth-child(10) svg")
    }
    clickAddOrderButton(){
        this.addOrderButton.click({force:true})
    }
    typeCount(count,i){
        cy.get(`#invoicedetail-${i}-int_pack_count`).type(count).type("{enter}",{force:true})
    }
    typeRate(i,rate){
        cy.get(`#invoicedetail-${i}-dbl_rate`).clear().type(rate)
    }
    typeValue(i,value){
        cy.get(`#invoicedetail-${i}-dbl_discount_rate`).clear().type(value)
        
    }
    get retailSaveButton(){
        return cy.get('#retailButtonSubmit')
    }
    clickRetailSaveButton(){
        this.retailSaveButton.click({force:true})
    }
    get receiveButton(){
        return cy.get('#w3 > .btn')
    }
   clickReceivePaymentButton(){
        this.receiveButton.click({force:true})
   }
   get balToReceiveField(){
    return cy.get('#payment-dbl_amount')
   }
   typeBalToReceive(amount){
    this.balToReceiveField.click({force:true}).type(amount,{force:true})
   }
   get submitButton(){
    return cy.get('td > .btn')
   }
   clickSubmitButton(){
    this.submitButton.click({force:true})
   }
   get downloadSlipButton(){
    return cy.get('.dropdown > .btn')
   }
   clickDownloadSlipButton(){
    this.downloadSlipButton.click({ force: true })
   }
   get printInvoiceOption(){
    return cy.get('.top_btn > .dropdown > .dropdown-menu > :nth-child(4) > a')
   }
   clickPrintInvoiceOption(){
    this.printInvoiceOption.click({force:true})
   }
}