export class MaterialReceivePage{
  visitMaterialRecievePage(url){
      cy.visit(url)
  }
 get addMaterialReceive(){
  return cy.get('.float-end > .view')
 }
 clickAddMaterialReceiveButton(){
  this.addMaterialReceive.click({force:true})
 }
get partyDropDown(){
  return cy.get('#select2-materialreceive-int_party_id-container')
 }
 clickPartyDropDown(){
  this.partyDropDown.click({force:true})
 }
 get searchField(){
  return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
 }
 typeInSerachDropDown(data){
  this.searchField.type(data).type("{enter}",{force:true})
 }
 get vehicleTypeDropDown(){
  return cy.get('#materialreceive-int_vehicle_type')

 }
 get vehicleSourceDropDown(){
  return cy.get('#freight-int_vehicle_source_type')
 }
 selectVehicleSource(data){
  this.vehicleSourceDropDown.select(data,{force:true})
 }
 get orderButtonPath(){
  return cy.get('.view > .btn')
 }
 clickOrderButton(){
  this.orderButtonPath.click({force:true})
 }
 clickVehicleTypeDropDown(data){
  this.vehicleTypeDropDown.select(data,{force:true})
 }
 get saveButton(){
  return cy.get('#submitBtn')
 }
 clickSaveButton(){
  this.saveButton.click({force:true})
  
 }
get searchFieldForChallan(){
   return cy.get('.input-group > .form-control')

 }
 typeInSerachFieldForMR(data){
  this.searchFieldForChallan.type(data).type("{enter}",{force:true})
 }
 clickCheckBox(i){
  cy.get(`#order_checkbox_${i}`).check({force:true})

}
clickReceiveSaveButton(){
cy.get("button[type='submit']").click({force:true})
}
typeBatchName(i,data){
  cy.get(`#stocktxdetailbatch-${i}-txt_batch_no`).type(data)
}
typeMfgDate(i,data){
  cy.get(`#stocktxdetailbatch-${i}-dat_manufacturing`).type(data)
}
typeExpDate(i,data){
 cy.get(`#stocktxdetailbatch-${i}-dat_expiry`).type(data)

}
typeQty(i,data){
 cy.get(`#stocktxdetailbatch-${i}-dbl_quantity`).type(data)

}
}