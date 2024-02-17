export class Dispatch {
    visitDispatchUrl(url) {
        cy.visit(url)
    }
    get addDispatchButtonPath() {
        return cy.get('.top_btn > .view')
    }
    get vehicleSourceDropDownPath() {
        return cy.get('#freight-int_vehicle_source_type')
    }
    get vehicleTypeDropDownPath() {
        return cy.get('#delivery-int_vehicle_type')
    }
    get submitBttnPath() {
        return cy.get('#submitBtn')
    }
    get orderButtonPath() {
        return cy.get('.top_btn > .view')
    }
    get arraowDropDownPath() {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) span i.bi.bi-chevron-right")
    }
    get searchBoxForSTRPath() {
        return cy.get('#indent_box > :nth-child(1) > .input-group > .form-control')
    }
    clickcheckBoxForSTR(strId) {
          cy.get(`#indent_checkbox_${strId}`).click({force:true})
    }
    selectDispatchBranch(i,branch) {
         cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(13) select`).select(branch)
        }
    
 selectDispatchWareHouse(i,wareHouse) {
         cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${i}) > td:nth-child(14) select`).select(wareHouse)
    }
    get dispatchSaveButtonPath(){
        return cy.get('#submitBtn')
    }
      iconPath(){
        return cy.get("body > div:nth-child(2) > section:nth-child(9) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > span:nth-child(2)")
     }
    clickDispathButton() {
        this.addDispatchButtonPath.click({ force: true })
    }
    clickVehicleSourceDropDown(source) {
        this.vehicleSourceDropDownPath.select(source).type("{enter}", { force: true })
    }
    clickVehicleTypeDropDown(type) {
        this.vehicleTypeDropDownPath.select(type).type("{enter}", { force: true })
    }
    clickSubmitButton() {
        this.submitBttnPath.click({ force: true })
    }
    clickOrderButton() {
        this.orderButtonPath.click({ force: true })
    }
    clickarraowDropDown() {
        this.arraowDropDownPath.click({ force: true })
    }
    typeInSTRSearchBox(number) {
        this.searchBoxForSTRPath.type(number).type("{enter}",)
    }
    // clickcheckBoxForSTR() {
    //     this.checkBoxForSTRPath.click({ force: true })
    // }
    
    clickDispatchSaveButton(){
        this.dispatchSaveButtonPath.click({force:true})
    }
    getdispatchChallanNumber(){
        this.dispatchChallanNumberPath.invoke('text')
    }
    getDispatchNumberAlias() {
        return cy.get('span[data-bs-original-title="Dispatch Challan No."]').as("DispatchNumberAlias");
      }
    
      getDispatchNumber() {
        return cy.get("@DispatchNumberAlias");
      }
      get salesContainerPath(){
        return  cy.get('#sales_box > :nth-child(1) > .input-group > .form-control')
      }
      typeSalesOrderNumber(OrderNumber){
        this.salesContainerPath.type(OrderNumber)
      }
//       get firstCheckBox(){
//    return cy.get('[type="checkbox"]')
//       }
      checkFirstCheckBox(i){
        cy.get(`#sales_checkbox_${i}`).check({force:true})
      }
    
      selectBranchDropDown(branch,index){
        cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${index+1}) > td:nth-child(13) select`).select(branch)
      }
      selectWareHouse(wareHouse,index){
        cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${index+1}) > td:nth-child(14) select`).select(wareHouse)
      }
     get statusLogButton(){
        return cy.get('.font-size-lg > .view > .svg-inline--fa > path')
    }
    clickStatusLogButton(){
        this.statusLogButton.click({force:true})
    }
   get statusDropDown(){
    return  cy.get('#select2-delivery-int_status_type-container')
    }
    clickStatusDropDown(){
        this.statusDropDown.click({force:true})
    }
    

}