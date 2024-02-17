import { MaterialIssueData } from "../../TestData/InventoryData/materialissuedata"
var inventory = new MaterialIssueData
export class bulkMaterial{

  status_save_butn(){
    cy.get('#submitBtn').click({force:true})

 
  }
  bulkMaterial(){
    cy.get('#select2-stocktx-int_document_series_id-container').click({ force: true })
    cy.wait(2000)
    cy.get('.select2-search__field').type(inventory.series_name).type('{enter}', { force: true })
    cy.wait(2000)
    cy.get('#select2-stocktx-int_stock_tx_type-container').click({ force: true })
    cy.wait(2000)
    cy.get('.select2-search__field').type(inventory.type).type('{enter}', { force: true })
    cy.wait(1000) 
  }
  multiProduct() {
    for (let i = 1; i <= 5; i++) {
      cy.wait(2000)
        .get(`#tr_${i} > .hide_select2_border > .select2 > .selection > .select2-selection`).click({ force: true }).then(() => {
          cy.wait(2000);
          cy.get('.select2-search__field').click({ force: true }).type(inventory.productName);
        }).then(() => {
          cy.wait(2000);
          cy.get(`#int_pack_count-${i}`).click({ force: true }).type(inventory.count);
        }).then(() => {
          cy.wait(2000);
          cy.get(`#dbl_quantity-${i}`).click({ force: true });
        }).then(() => {
          cy.wait(2000);
        });
    }
    
    for (let i = 1; i <= 5; i++) {
      cy.get(`#int_stock_tx_detail_id_checkbox-${i}`).check({ force: true });
    }
  
    cy.get('#save').click({ force: true });
  }
  
Changing_status() {
  for (let i = 1; i<= 5; i++) {
      cy.wait(2000)
      cy.get(`#int_stock_tx_detail_id_checkbox-${i}`).check({ force: true });
      cy.get('#save').click({ force: true })
      cy.get(`#int_stock_tx_detail_id_checkbox-${i}`).check({ force: true });
      cy.get('#final').click({ force: true })
  }
}
  creatingProduct(){
    cy.get('#tr_1 > .hide_select2_border > .select2 > .selection > .select2-selection').click({ force: true })
    cy.get('.select2-search__field').click({ force: true }).type(inventory.productName).type('{enter}', { force: true })
    cy.wait(2000)
    cy.get(" input[name='StockTxDetail[1][int_pack_count]']").click({ force: true }).type('123')
    cy.wait(5000)
    cy.get('#dbl_quantity-1').click({ force: true })
    cy.wait(2000)
    cy.get('#save').click({ force: true })
    cy.wait(1000)
    //cy.get('[data-notify="message"]').should('have.text', 'Material(s) saved successfully.')

  }
  deleting_multiple(){
    for (let i =5; i>=1; i--) {
      cy.wait(2000)
      cy.get(`#int_stock_tx_detail_id_checkbox-${i}`).check({ force: true });
      cy.get("button[value='delete']").click({force:true})
  }
}
}