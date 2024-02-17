export class MaterialReceiveSalesReturnPage {
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
get invoiceBeforeQCtoggleButton(){
    return cy.get("body div div[role='dialog'] div div div div div div div div div div div div span:nth-child(2)")
}
clickInvoiceBeforeQCToggleButton(){
    this.invoiceBeforeQCtoggleButton.click({force:true})
}
//Quality check getter setters

get materialReceiveLink(){
    return cy.get("body > div:nth-child(2) > section:nth-child(8) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(1) > td:nth-child(3) a")
}
clickOnMaterialReceiveLink(){
    this.materialReceiveLink.click({force:true})

}
get qualityCheckButton(){
    return cy.get("a[title='Quality Check']")
}
clickQualityCheckButton(){
    this.qualityCheckButton.invoke('removeAttr','target').click({force:true})
}
get qualityCheckDropDown(){
    return cy.get('#qualitycheck-int_quality_check_type')
}
selectQualityType(data){
    this.qualityCheckDropDown.select(data)
}
get approveButton(){
    return cy.get(':nth-child(1) > .text-center > .btn')
}
clickApproveButton(){
    this.approveButton.click({ force: true })
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
get saveButtonForMR(){
    return cy.get('#submitBtn')
}
get addBatchDetailsButton(){
    return cy.get("div[data-bs-title='Add Batch Details']")
}
clickAddBtachDetailsButton(){
    this.addBatchDetailsButton.click({force:true})
}
clicSavebuttonforMR(){
    this.saveButtonForMR.click({Force:true})
}
get addMoreBatchDetails(){
    return cy.get("div[role='dialog'] th:nth-child(5) svg")
}
clickAddBatchDetailsButton(){
    this.addMoreBatchDetails.click({force:true})
}

}