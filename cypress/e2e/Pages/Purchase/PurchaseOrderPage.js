export class PurchaseOrderPage {
  visitPurchaseorderPage(url) {
    cy.visit(url);
  }

  get createPurchaseOrderButtonPath() {
    return cy.get('#addButton');
  }

  clickCreateaddButtonPurchaseOrderButton() {
    this.createPurchaseOrderButtonPath.click({ force: true })
  }
  
  get buyerTextField() {
    return cy.get('#select2-purchaseorder-int_placed_by_employee_id-container')
  }
  get searchFieldPath(){
    return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
  }
 
  get vendoDropDownField(){
    return  cy.get(':nth-child(1) > .mb-3 > .select2 > .selection > .select2-selection')
  }
  get vendorReferenceNumberTextField(){
    return cy.get('#purchaseorder-txt_party_ref_no')
  }
  get quotationRefNumber(){
    return cy.get('#purchaseorder-txt_party_quotation_ref')
  }
  get saveButton(){
    return cy.get('.modal-footer > .btn')
  }
  get addProductsButton(){
    return   cy.get("body > div:nth-child(2) > section:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) a")
  }
  clickProductDropDown(i){
      cy.get(`#select2-purchaseorderdetail-${i}-int_product_id-container`).click({force:true})
  }
   clickProductPackDropDown(i){
    return cy.get(`#select2-purchaseorderdetail-${i}-int_product_pack_id-container`).click({force:true})
  }
  typeNumberOfPacks(number,i){
    return cy.get(`#purchaseorderdetail-${i}-int_pack_count`).type(number)

  }
   clickDeliveryAtDropDown(data,i){
     cy.get(`#purchaseorderdetail-${i}-intpartytype`).select(data,{force:true})
    }
  
   clickDeliveryOptions(i){
    return cy.get(`#select2-purchaseorderdetail-${i}-int_delivery_to_branch_id-container`).click({force:true})

  }
  clickPaymentTermDropDown(i){
    return cy.get(`#select2-purchaseorderdetail-${i}-int_payment_term_id-container`).click({force:true})
  }


  get plusIcon(){
    return cy.get("body div th:nth-child(10) svg")
  }
  clickMultipleProducts(){
    this.plusIcon.click({force:true})
  }
 
clickAddProductsButton(){
  this.addProductsButton.click({force:true})
}
  clickSaveButton(){
    this.saveButton.click({force:true})
  }
  typeQuotationRefNumber(number){
    this.quotationRefNumber.type(number)
  }
  clickOnVendorDropDownField(){
    this.vendoDropDownField.click({force:true})
  }
 typeVendorReferenceNumber(number){
  this.vendorReferenceNumberTextField.type(number)
 }
  typeInSearchField(data){
    this.searchFieldPath.type(data).type("{enter}",{force:true})
  }
  clickOnBuyerDropDown() {
    this.buyerTextField.click({ force: true })
  }
}