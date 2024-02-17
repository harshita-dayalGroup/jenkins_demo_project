export class CreateProductPackPage{
    visitProductPackPageUrl(productPackUrl)
    {
        cy.visit(productPackUrl)

    }
    get createProductpackeButtonPath(){
        return cy.get('.float-end > .view')
    }
    get productpackNameTextFieldPath(){
        return cy.get('#Pack-name')
    }
    get productpackShortNameTextFieldPath(){
        return cy.get('#short-name')
    }
    get productNameDropdownPath(){
     return cy.get('#select2-product-container')
    }
    get productNameSearchFieldTextPath(){
        return cy.get('.select2-search__field')
    }
    get dateTextPath(){
        return cy.get('#productpack-dat_start')
    }
    get rateUnitDropdownPath(){
        return cy.get('#select2-productpack-int_rate_unit_id-container')
    }
    get rateUnitSearchTextPath(){
        return cy.get('.select2-search__field')
    }
   
    get contentUnitDropDownPath(){
        return cy.get('#select2-productpack-int_content_unit_id-container')
    }
    get contentUnitSearchFieldPath(){
        return cy.get('.select2-search__field')
    }
    get saveButtonPath(){
        return cy.get('.modal-footer > .btn')
    }
    get productpackAvailablityPencilIconPath() {
        return cy.get('body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)  a svg')
    }
    get productpackAvailabilityStoredAtPath() {
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(5) > span:nth-child(1) > span:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > input:nth-child(1)')
    }
    get availbilityStoredAtSearchField() {
        return cy.get('#s2-togall-productpack-int_warehouse_id > .s2-select-label')
        
    }
    get availabilityProducedAtPath(){
         return cy.get('#forProduce > .mb-3 > .select2 > .selection > .select2-selection > .select2-selection__rendered')   
    }
    get availabilityProducedAtSelectAllPath(){
        return cy.get('#s2-togall-productpack-int_production_id > .s2-select-label')
    }
     get editavailabilityInvoicedFromSelectionPath(){
     
  return cy.get(  '.forSale > .mb-3 > .select2 > .selection > .select2-selection > .select2-selection__rendered')
     }
    get availabilityInvoicedFromPath(){
        return cy.get('body > span:nth-child(31) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1)')
    }
    get editproductpackCompositionPath(){
        return cy.get('.bg-light > .view')
    }
    
     get  editproductpackContentQuantityPath(){
        return cy.get('#productpack-dbl_content_quantity')
     }

    clickcreateProductpackeButton()
    {
        this.createProductpackeButtonPath.click({force:true})
    }
    typeProductpackName(productpackName){
        this.productpackNameTextFieldPath.type(productpackName)
    }
    typeProductpackShortName(packShortName){
        this.productpackShortNameTextFieldPath.type(packShortName)
    }
    clickOnproductNameDropdown(){
        this.productNameDropdownPath.click({force:true})
    }
    typeproductNameInSearchFiled(product){
        this.productNameSearchFieldTextPath.type(product).type("{enter}",{force:true})
    }
    typedate(date){
        this.dateTextPath.type(date)
    }
    clickRateUnitDropdown(){
        this.rateUnitDropdownPath.click({force:true})
    }
    typeRateUnitInSearch(rateunit){
        this.rateUnitSearchTextPath.type(rateunit).type("{enter}",{force:true})
    }
   
    clickContentUnitDropDown(){
        this.contentUnitDropDownPath.click({force:true})
    }
    typeContentUnit(unit){
        this.contentUnitSearchFieldPath.type(unit).type("{enter}",{force:true})
    }
    saveBasicDetails(){
        this.saveButtonPath.click({force:true})
    }
    clickOnProductpackAvailablityPencilIcon()
    {
        this.productpackAvailablityPencilIconPath.click({force:true})
    }
    selectProductpackAvailabilityStoredAt(){
        this.productpackAvailabilityStoredAtPath.click({force:true})
    }
    typeAvailbilityStoredAt(){
        this.availbilityStoredAtSearchField.click({force:true})
    }
    selectAvailabilityProducedAt(){
        this.availabilityProducedAtPath.click({force:true})

    }
    clickAvailabilityProducedAtSelectAll(){
        this.availabilityProducedAtSelectAllPath.click({force:true})
    }
    editAvailabilityInvoicedFromSelection(){
        this.editavailabilityInvoicedFromSelectionPath.click({force:true})
    }
    selectAvailabilityInvoicedFrom(){
        this.availabilityInvoicedFromPath.click({force:true})
    }
    clickEditproductpackComposition(){
        this.editproductpackCompositionPath.click({force:true})

    }
    editproductpackContentQuantity(){
        this.editproductpackContentQuantityPath.clear().type("46{enter}")
    }





}