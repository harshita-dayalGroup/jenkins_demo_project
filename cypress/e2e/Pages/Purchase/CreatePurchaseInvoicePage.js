export class CreatePurchaseInvoice{
    visitPurchaseInvoiceUrl(purchaseInvoiceServer){
        cy.visit(purchaseInvoiceServer)

    }
    get createPurchaseInvoiceButtonPath(){
        return cy.get('#addButton')
    }
    get selectVendorDropDownPath(){
        return cy.get('#select2-purchaseinvoice-int_vendor_party_id-container')
    }
    get searchFieldForVendorPath(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    get purchaseNumberTextInputPath(){
      return cy.get('#purchaseinvoice-txt_vendor_invoice_number')
    }
    get totalInvoiceValueTextInputPath(){
        return cy.get('#purchaseinvoice-dbl_vendor_invoice_value')
    }
    get invoiceNumberDate(){
        return cy.get("input[name='PurchaseInvoice[dat_vendor_invoice]']")
    }
    typeInvoiceDate(){
        this.invoiceNumberDate.type("29-11-2023").type("{enter}",{force:true})
    }
    get saveButton(){
        return cy.get('.modal-footer > .btn')
    }
    clickInvoiceSaveButton(){
        this.saveButton.click({force:true})
    }
    get reciveButtonPath(){
        return cy.get('.top_btn > .view')
    }
    get searchReciveTextFieldPath(){
        return cy.get('.input-group > .form-control')
    }
    get checkboxPath(){
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) div input')
    }
    get saveButtonPath(){
        return cy.get('#validateBtn')
    }
     typeInrateInputTextField(i){
         cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${i+1}) > td:nth-child(10) input`).clear().type("1200",{foece:true})
    }
    get statusIconPath(){
        return cy.get('body > div:nth-child(2) > section:nth-child(9) > div:nth-child(1) div nav a')
    }
    get purchaseInvoiceNumberPath() {
        return cy.get("nav[aria-label='breadcrumb'] ol");
      }
    get successfulmessage(){
        return cy.get('[data-notify="message"]')
    }
      getPurchaseInvoiceNumberAlias() {
        return cy.get("nav[aria-label='breadcrumb'] ol").as("purchaseInvoiceNumberAlias");
      }
    
      getPurchaseInvoiceNumber() {
        return cy.get("@purchaseInvoiceNumberAlias");
      }
    clickCreatePurchaseInvoiceButton(){
        this.createPurchaseInvoiceButtonPath.click({force : true})
    }
    clickselectVendorDropDown(){
        this.selectVendorDropDownPath.click({force : true})
    }
    typeInSearchField(vendorsName){
        this.searchFieldForVendorPath.type(vendorsName).type("{enter}",{force:true})
    }
    typeInpurchaseNumberField(invoiceNumber){
        this.purchaseNumberTextInputPath.type(invoiceNumber)
    }
    typeInTotalInvoiceValueField(data){
        this.totalInvoiceValueTextInputPath.type(data).type("{enter}",{force:true})
    }
    clickRecieveButton(){
        this.reciveButtonPath.click({force:true});
    }
    typeInsearchrReciveTextField(data){
        this.searchReciveTextFieldPath.type(data).type("{enter}",{force: true})
    }
    clickFirstCheckBox(){
        this.checkboxPath.click({force:true})
    }
    // typeInrateInputTextField(){
    //     this.rateInputTextFieldPath.type("1200")
    // }
    clickSaveButton(){
        this.saveButtonPath.click({force:true})
    }
    clickStatusIcon(){
        this.statusIconPath.click({force:true})
    }
    verifyingMessage(){
        this.successfulmessage.should('have.text',"Purchase Invoice Detail has been saved successfully.")
    }
    // getpurchaseInvoiceNumber(){
    //     this.purchaseInvoiceNumberPath
    // }
//FUNCTION TO GET RANDOM NUMBER
     getRandomTwoDigitNumber() {
        return Math.floor(Math.random() * 90) + 1000;
      }
      clickToggleButton(){
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)").click({ force: true })
            // purchaseInvoice.typeInvoiceDate()
      }
      
    //   const randomTwoDigitNumber = getRandomTwoDigitNumber();
    //   console.log(randomTwoDigitNumber);
}


// Generate a random two-digit number

  