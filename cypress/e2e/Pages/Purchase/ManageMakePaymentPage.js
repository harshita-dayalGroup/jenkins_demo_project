export class ManageMakePayment{
    get searchColumn(){
        return cy.get('[data-col-seq="2"] > .form-control')
    }
    typeInSearchColumn(data){
        this.searchColumn.type((data),{force:true}).type("{enter}",{force:true})
    }
    get statusButton(){
        return cy.get("tbody tr td:nth-child(8)  a")
    }
    clickStatusButton(){
        this.statusButton.click({force:true})
    }
    get statusDropDown(){
        return cy.get('#select2-payment-int_status_type-container')
    }
    clickStatusDropDown(){
        this.statusDropDown.click({force:true})
    }
    get searchField(){
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    typeStatusField(data){
        this.searchField.type(data).type("{enter}",{force:true})
    }
  get submitButton(){
    return cy.get('#submitBtn')
  }
  clickSubmitButton(){
    this.submitButton.click({force:true})
  }
  get actionDropDown(){
    return   cy.get('.dropdown > .btn')
  }
  clickActionDropDown(){
    this.actionDropDown.click({force:true})
  }
  get paymentTaggingOption(){
    return cy.get(':nth-child(9) > .dropdown > .dropdown-menu > :nth-child(3) > a')
  }
  clickPaymentTaggingOption(){
    this.paymentTaggingOption.click({force:true})
  }
  get autoTagPath(){
    return cy.get('#autoTag')
  }
  clickOnAutoTag(){
    this.autoTagPath.first().uncheck({ force: true })
  }
  get saveButtonForPaymentTagging(){
    return   cy.get('.top_btn > .btn-primary')
  }
  clickSaveButtonForPaymentTagging(){
    this.saveButtonForPaymentTagging.click({force:true})
  }
}