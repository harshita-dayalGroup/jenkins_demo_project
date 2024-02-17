class CreateProductPage {
    visitProductPage(productPageUrl) {
         cy.visit(productPageUrl)
    }
    get createProductButtonPath() {
        return cy.get("a[title='Create Product']")
    }
    get productNameInputFieldPath() {
        return cy.get('#product-txt_name')
    }
    get productShortNameInputFieldPath() {
        return cy.get('#short-name')
    }
    get productStartedonInputFieldPath() {
        return cy.get('#product-dat_start')
    }
    get selectProductTypeInputFieldPath() {
        return cy.get('#select2-Product-Type-container')
    }
    get searchFieldProductTypeDropdownPath() {
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    get masterUnitDropdownPath() {
        return cy.get('#select2-Master-Unit-container')
    }
    get searchFieldMasterUnitDropdownPath() {
        return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
    }
    get toogleButtonSalesPath() {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)")
    }
    get toggleButtonPurchasePath() {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)")
    }
    get toggleButtonProducePath() {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)")
    }
    get qualityCheckSelectDropDownPath() {
        return cy.get(".col-sm-12 > .mb-3 > .select2 > .selection > .select2-selection > .select2-selection__rendered")
    }
    get qualityCheckOptionPath() {
        return cy.get('.s2-select-label')

    }


    get saveBasicDetailsButtonPath() {
        return cy.get('#saveBasicDetail')
    }
    get organisationDetailsPencilIconPath() {
        return cy.get('body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1)  a svg')
    }

    get additionalDetailsSaveButtonPath() {
        return cy.get('.modal-footer > .btn')
    }
    get saleAvailablityPencilIconPath() {
        return cy.get('body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) a svg')
    }
    get saleAvailablityCountryFieldPath() {
        return cy.get('#select2-productsalesapplicability-0-int_country_id-container')
    }
    get searchFieldInputFieldPath() {
        return cy.get('.select2-search__field')
    }
    get saleAvailablityStateFieldPath() {
        return cy.get(':nth-child(2) > .mb-3 > .select2 > .selection > .select2-selection')
    }
    get saleAvailablityStartOnFieldPath() {
        return cy.get('#productsalesapplicability-0-dat_start')
    }
    get taxationPencilIconPath() {
        return cy.get("body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(5) > div:nth-child(1) a svg")
    }
    get taxRegimePath() {
        return cy.get('#select2-taxrate-0-int_tax_regime_id-container')
    }
    get taxCategoryPath() {
        return cy.get('#select2-taxrate-0-int_tax_category_id-container')
    }
    get taxFieldPath() {
        return cy.get('#select2-taxrate-0-int_tax_id-container')
    }
    get rateFieldPath() {
        return cy.get('#taxrate-0-dbl_rate_sales')
    }
    get taxSinceFieldPath() {
        return cy.get('#taxrate-0-dat_start')
    }
    get regulatoryPencilIconPath() {
        return cy.get("body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) a svg")
    }
    get addLicenceSalesPath() {
        return cy.get("table.container-sales th.td-remove svg.svg-inline--fa[data-icon='plus-circle']")
    }
    get salesLicenceCountryPath() {
        return cy.get('#select2-productgoverninglicenseid-0-sales-int_country_id-container')
    }
    get salesLicenceStatesPath() {
        return cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(2) > div:nth-child(1) > span:nth-child(2) > span:nth-child(1) > span:nth-child(1)")
    }
    get saleLicenceGoverningLawPath() {
        return cy.get('#productgoverninglicenseid-0-sales-txt_governing_law')
    }
    get saleLicenceNumberPath() {
        return cy.get('#productgoverninglicenseid-0-sales-txt_governing_license_no')
    }
    get saleLicenceValidFromDatePath() {
        return cy.get('#productgoverninglicenseid-0-sales-dat_valid_from')
    }
    visitBulkStatusChangeProductsUrl(BulkStatusChangeProductPackUrl) {
         cy.visit(BulkStatusChangeProductPackUrl)
    }
    get searchFieldforProductPath() {
        return cy.get('#ag-34-input')
    }
    get firstCheckBoxPath() {
        return cy.get('input.ag-input-field-input.ag-checkbox-input[type="checkbox"][aria-label="Press Space to toggle row selection (unchecked)"]')
    }
    get changeStatusButtonPath() {
        return cy.get('.float-end > .btn')
    }
    get approveOptionForChangeStatusPath() {
        return cy.get(':nth-child(3) > .form-control')
    }
    get selectAllCheckBoxPath() {
        return cy.get("input[aria-label='Press Space to toggle all rows selection (unchecked)']")
    }
//Set the values
    clickProductButton() {
        this.createProductButtonPath.click({ force: true })
    }
    typeProductName(productname) {
        this.productNameInputFieldPath.type(productname)
    }
    typeProductShortName(productshortname) {
        this.productShortNameInputFieldPath.type(productshortname)
    }
    typeStartedonDate(currentDate) {
        this.productStartedonInputFieldPath.type(currentDate)
    }
    clickProductType() {
        this.selectProductTypeInputFieldPath.click({ force: true })
    }
    typeInSearchField(producttype) {
        this.searchFieldProductTypeDropdownPath.type(producttype).type('{enter}', { force: true })

    }
    clickMasterUnitDropdown() {
        this.masterUnitDropdownPath.click({ force: true })
    }
    typeInSearchFieldForMasterUnit(masterunit) {
        this.searchFieldMasterUnitDropdownPath.type(masterunit).type('{enter}', { force: true })
    }
    turnOnToggeleButtonSale() {
        this.toogleButtonSalesPath.click({ force: true })
    }
    turnOnToggeleButtonPurchase() {
        this.toggleButtonPurchasePath.click({ force: true })
    }
    turnOnToggeleButtonProduce() {
        this.toggleButtonProducePath.click({ force: true })
    }
    selectQualityCheck() {
        this.qualityCheckSelectDropDownPath.click({ force: true })
    }
    selectQualityCheckOption() {
        this.qualityCheckOptionPath.click()
    }
    clickSaveButton() {
        this.saveBasicDetailsButtonPath.click()
    }
    clickOnOrganisationDetailsPencilIcon() {
        this.organisationDetailsPencilIconPath.click({ force: true })
    }
    clickAdditionalDetailsSaveButton() {
        this.additionalDetailsSaveButtonPath.click()
    }
    clickSaleAvailablityPencilIcon() {
        this.saleAvailablityPencilIconPath.click({ force: true })
    }
    clickSaleAvailablityCountryField() {
        this.saleAvailablityCountryFieldPath.click({ force: true })
    }
    typeInSearchFieldforCountry() {
        this.searchFieldInputFieldPath.type("India").type('{enter}', { force: true })
    }
    clickSaleAvailablityStateField() {
        this.saleAvailablityStateFieldPath.click({ force: true })
    }
    typeInSearchFieldforState() {
        this.searchFieldInputFieldPath.type("Uttar Pradesh").type('{enter}', { force: true })
    }
    typeInStartOnDateField(date) {
        this.saleAvailablityStartOnFieldPath.type(date).type('{enter}', { force: true })
    }
    clickTaxationPencilIcon() {
        this.taxationPencilIconPath.click({ force: true })
    }
    selectTaxRegime() {
        this.taxRegimePath.click({ force: true })
    }
    typeInSearchFieldForTaxationRegime() {
        this.searchFieldInputFieldPath.type("Good").type("{enter}", { force: true })
    }
    selectTaxCategory() {
        this.taxCategoryPath.click()
    }
    typeInSearchFieldForTaxCategory() {
        this.searchFieldInputFieldPath.type("Registered").type("{enter}", { force: true })
    }
    selectTaxField() {
        this.taxFieldPath.click({ force: true })
    }
    typeInSearchFieldForTax() {
        this.searchFieldInputFieldPath.type("Central Goods").type("{enter}", { force: true })
    }
    typeInRateField() {
        this.rateFieldPath.type("20").type("{enter}", { force: true })
    }
    typeInSinceField(date) {
        this.taxSinceFieldPath.type(date).type("{enter}", { force: true })
    }
    clickOnRegulatoryPencilIcon() {
        this.regulatoryPencilIconPath.click({ force: true })
    }
    clickOnAddSaleLicenceIcon() {
        this.addLicenceSalesPath.click({ force: true })
    }
    clickOnSalesLicenceCountry() {
        this.salesLicenceCountryPath.click({ force: true })
    }
    typeCountryNameInSaleLicence() {
        this.searchFieldInputFieldPath.type("India").type("{enter}", { force: true })
    }
    clickOnSalesLicenceState() {
        this.salesLicenceStatesPath.click({ force: true })
    }
    typeStatesNameInSaleLicence() {
        this.searchFieldInputFieldPath.type("Uttar Pradesh").type("{enter}", { force: true })
    }
    typeSaleGoverningLaw() {
        this.saleLicenceGoverningLawPath.type("Law").type("{enter}", { force: true })
    }
    typeSaleLicenceNumber() {
        this.saleLicenceNumberPath.type("123").type("{enter}", { force: true })
    }
    typeDateForSaleLicence(date) {
        this.saleLicenceValidFromDatePath.type(date).type("{enter}", { force: true })
    }
    typeInSearchFieldForBulkStatus(productName) {
        this.searchFieldforProductPath.type(productName).type("{enter}", { force: true })
    }
    checkTheFirstCheckBoxInBulkSatusChange() {
        this.firstCheckBoxPath.click({ force: true })
    }
    clickChangeStatusButton() {
        this.changeStatusButtonPath.click({ force: true })
    }
    selectApproveOption() {
        this.approveOptionForChangeStatusPath.select("Approved")
    }

    // getAddButton(){
    //     cy.get('.orangehrm-header-container > .oxd-button').click()
    // }
    // getUserRole(){
    //     cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
    // }

}
export default CreateProductPage;