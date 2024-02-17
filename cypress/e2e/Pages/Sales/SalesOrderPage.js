export class SalesOrder{
    visitSalesOrderPageUrl(url){
        cy.visit(url)
    }
    get addSalesOrderButton(){
        return cy.get('#addButton > .svg-inline--fa > path')
    }
    clickSalesOrderButton(){
        this.addSalesOrderButton.click({force:true})
    }
    get customerTypeDropDown(){
        return  cy.get(':nth-child(1) > .mb-3 > .select2 > .selection > .select2-selection')
    }
    clickCustomerTypeDropDown(){
        this.customerTypeDropDown.click({force:true})
    }
    get partyNameDropDown(){
        return cy.get(':nth-child(3) > :nth-child(2) > .mb-3 > .select2 > .selection > .select2-selection')
    }
    clickPartyNameDropDown(){
        this.partyNameDropDown.click({force:true})
    }
    get placedByDropDown(){
        return  cy.get('#select2-order-int_placed_by_employee_id-container')
    }
    clickPlacedByDropDown(){
        this.placedByDropDown.click({force:true})
    }
    get saveButtonPath(){
        return  cy.get('.modal-footer > .btn')
    }
   clickSaveButton(){
    this.saveButtonPath.click({force:true})
   }
    get modifyOrderButton(){
        return cy.get('.view > .text-dark > .svg-inline--fa')
    }
    clickModifyOrderButton(){
        this.modifyOrderButton.click({force:true})
    }
      clickProductDropDown(index){
      
        return cy.get(`#select2-orderdetail-${index}-int_product_id-container`).click({force:true})
    }
   typeProduct(product){
    this.searchField.type(product).type("{enter}",{force:true})

   }
    clickProductPackDropDown(index){
    return cy.get(`#select2-orderdetail-${index}-int_product_pack_id-container`).click({force:true})
  }
  get searchField(){
    return cy.get('.select2-search__field')
  }
  typeProductPack(productPack){
    this.searchField.type(productPack).type("{enter}",{force:true})
  }
   typeProductQuantityField(index,quantity){
     cy.get(`#orderdetail-${index}-int_pack_count`).type(quantity)
  }

  get orderNumberText(){
    return cy.get('.breadcrumb-item > a')
  }
  getOredrNumberText(){
    this.orderNumberText
  }
  get statusLogButton(){
    return  cy.get('.font-size-lg > .view > .svg-inline--fa')
  }
  clickStatusLogButton(){
    this.statusLogButton.click({force:true})
  }
  get statusDropDown(){
    return cy.get('#select2-order-int_status_type-container')
  }
  clickStatusDropDown(){
    this.statusDropDown.click({force:true})
  }
  get addProductDetails(){
    return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)  table  tr:nth-child(1) th svg")
  }
  clickAddProductDetails(){
    this.addProductDetails.click({force:true})
  }


}