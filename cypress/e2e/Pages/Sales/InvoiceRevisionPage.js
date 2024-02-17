export class InvoiceRevision{
    visitInvoiceRevision(url){
        cy.visit(url)
    }
    get addInvoiceRevisionButtonPath(){
        return cy.get('.float-end > .view')
    }
    clickAddInvoiceRevisionButton(){
        this.addInvoiceRevisionButtonPath.click({force:true})
    }
    get partyDropDown(){
        return cy.get('#select2-invoicerevision-int_party_id-container')
    }

    clickPartyDropDown(){
        this.partyDropDown.click({force:true})
    }
    get searchField(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    typePartyInSearchField(partyName){
        this.searchField.type(partyName).type("{enter}",{force:true})
    }
    get invoiceField(){
        return cy.get('#select2-invoicerevision-int_original_id-container')
    }
    clickInvoiceField(){
        this.invoiceField.click({force:true})
    }
    typeInvoiceNumber(invoiceNo){
        this.searchField.type(invoiceNo).type("{enter}",{force:true})
    }
    get saveButton(){
        return cy.get('.modal-footer > .btn')
    }
    clickSaveButton(){
        this.saveButton.click({force:true})
    }
    clickModifyPencilIcon(index){
        return cy.get(`body > div:nth-child(2) > section:nth-child(9) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${index+1}) > td:nth-child(9)  div a.view`).click({force:true})
    }
    
    get conversionField(){
        return cy.get('#invoicerevisiondetail-int_inv_rev_based_on')
    }
    clickConversionDropDown(data){
        this.conversionField.select(data)
    }
    get rateConversionField(){
        return cy.get('#invoicerevisiondetail-dbl_rate')
    }
    typeRateInRateConversionField(rate){
        this.rateConversionField.clear({force:true}).type(rate).type("{enter}",{force:true})
    }
    get submitButton(){
        return cy.get('#submitBtn')
    }
    clickSubmitButton(){
        this.submitButton.click({force:true})
    }
   get statusLogButton(){
       return cy.get('.font-size-lg > .view')
   }
   clickStatusButton(){
    this.statusLogButton.click({force:true})
   }
   get statusDropDown(){
    return cy.get('#select2-invoicerevision-int_status_type-container')
   }
   clickStatusDropDown(){
    this.statusDropDown.click({force:true})
   }
   visitCreditNoteWithGSTPage(url){
    cy.visit(url)
   }
  get addCreditNoteRevision(){
    return cy.get('.float-end > .view')
   }
   clickAddCreditNoteRevision(){
    this.addCreditNoteRevision.click({force:true})
   }
   get quantityConversionField(){
    return cy.get('#invoicerevisiondetail-dbl_quantity')
   }
   typeQuantityConversionField(quantity){
    this.quantityConversionField.clear({force: true}).type(quantity).type("{enter}",{force:true})
   }
   get checkBox(){
    return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(7) > div:nth-child(1) > div:nth-child(3) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) input")

   }
   get quantityInputField(){
    return cy.get('#StockRevQty_0')
   }
   typeQuantity(quantity){
    this.quantityInputField.type(quantity).type("{enter}",{force:true})
   }
   clickCheckBox(){
    this.checkBox.click({force:true})
   }
}
