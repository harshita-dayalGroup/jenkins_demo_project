export class CreateCustomerPage {
    visitCustomerPageUrl(customerPageUrl) {
        cy.visit(customerPageUrl)
    }
    get headerOfPagePath() {
        return cy.get('.breadcrumb-item.active')
    }
    get addCustomerButtonPath() {
        return cy.get('.float-end > .view')
    }
    get labelOfFormPath() {
        return cy.get('#modal-label > strong')
    }
    get customerFimNameTextFiledPath() {
        return cy.get('#Customer-firm-name')
    }
    get identifierTextFieldPath() {
        return cy.get('#identifier')
    }
    get displayNamePath() {
        return cy.get('#combinedValue')
    }
    get contactPersonTextFieldPath() {
        return cy.get('#Contact-Person')
    }
    get associatedSinceDatePath() {
        return cy.get('#party-dat_start')
    }
    get emailTextPath() {
        return cy.get('#Email')
    }
    get mobileNumberTextPath() {
        return cy.get('#party-txt_mobile')
    }
    get alternateMobileNumberTextFieldPath() {
        return cy.get('#party-txt_mobile_2')
    }
    get customerTypeDropDownPath() {
        return cy.get('#select2-customer-type-container')
    }
    get searchFieldPath() {
        return cy.get('.select2-search__field')
    }
    get customerSubTypePath() {
        return cy.get('#select2-customer-sub-type-container')
    }
    get saveBasicDetailsButtonPath() {
        return cy.get('.modal-footer > .btn')
    }
    get toggleButtonforVendorPath() {
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)')
    }
    get vendorTypeDropDownPath() {
        return cy.get('#select2-vendor-type-container')
    }
    get addOrganisationandLicencePath() {
        return cy.get('body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > a.view.add_org.text-dark.float-end')
    }
    get checkboxForORganisationandLicencesPath() {
        return cy.get('#partyorganisation-txttotalcheckbox')
    }
    get HECreditLimitPath() {
        return cy.get('#partyorganisation-1-int_credit_limit')
    }
    get toggleButtonforSecurityApplicablePath() {
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > table:nth-child(5) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)')
    }
    get securityAmoutTextPath() {
        return cy.get('#partyorganisation-1-dbl_security_amount')
    }
    get reciveTextPath() {
        return cy.get('#partyorganisation-1-dbl_security_amount_received')
    }
    get addCRMDetailsPath() {
        return cy.get('body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) a svg.svg-inline--fa.fa-plus-circle')
    }
    get crmAccountsLeadDropDownPath() {
        return cy.get('#select2-partyemployee-0-int_employee_id-container')
    }
    get crmDate() {
        return cy.get('#partyemployee-0-dat_start')

    }
    get addAddressButtonPath() {
        return cy.get('body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) div span a')
    }
    get streetAddressTextPath() {
        return cy.get('#address-txt_street')
    }
    get countryDropDownPath() {
        return cy.get('#select2-address-int_country_id-container')
    }
    get stateDropDownPath() {
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1) > span:nth-child(1)')
    }
    get districtDropDownPath() {
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1) > span:nth-child(1)')
    }
    get tehsilDropDownPath() {
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1) > span:nth-child(1)')
    }
    // get blockDropDownPath(){
    //     return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1) > span:nth-child(1)')
    // }
    get villageDropDownPath() {
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1) > span:nth-child(1)')
    }
    get addRegistrationAndTaxationPath() {
        return cy.get('body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) a')

    }
    get addTaxDetailsPath() {
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)   table thead tr th:nth-child(6) svg')
    }
    get taxRegimePath() {
        return cy.get('#select2-partybranchtaxcategory-0-int_party_branch_tax_regime_id-container')
    }
    get taxCategoryPath() {
        return cy.get(':nth-child(3) > .mb-3 > .select2 > .selection > .select2-selection')
    }
    get taxStartDatePath() {
        return cy.get('#partybranchtaxcategory-0-dat_start')
    }
    get taxSaveButtonPath() {
        return cy.get('#validateBtn')
    }
    get addBranchDetailsIconPath() {
        return cy.get('body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1) a svg.svg-inline--fa.fa-plus-circle')
    }
    get branchNameTextFieldPath() {
        return cy.get('#Branch-Name')
    }
    get branchAddressStreetTextFieldPath() {
        return cy.get('#address-txt_street')
    }
    get branchCountryDropDownPath() {
        return cy.get('#select2-address-int_country_id-container')
    }
    get branchStateDropDownPath() {
        return cy.get('#select2-address-int_state_id-container')

    }
    get branchDistrictDropDownPath() {
        return cy.get('#select2-address-int_district_id-container')
    }
    get branchTehsilDropDownPath() {
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1) > span:nth-child(1)')
    }
    get branchVillageDropDownPath() {
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1) > span:nth-child(1)')
    }
    get separateRegistrationTogglePath() {
        return cy.get('body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3)')
    }
    get issuingAuthorityTextFieldPath() {
        return cy.get('#partyregn-txt_issuing_authority')
    }
    get registrationNumberTextPath() {
        return cy.get('#Registration-No')
    }
    get registrationValidFromDatePath() {
        return cy.get('#partyregn-dat_valid_from')
    }

    verifyHeaderOfPage() {
        this.headerOfPagePath.should('have.text', 'Manage Party')
    }
    clickAddCustomerButton() {
        this.addCustomerButtonPath.click({ force: true })
    }
    verifyLabelOfForm() {
        this.labelOfFormPath.should('have.text', 'Create Customer')
    }
    typeInCustomerFimNameTextFiled(customerName) {
        this.customerFimNameTextFiledPath.type(customerName)
    }
    typeInidentifierTextField(identifierName) {
        this.identifierTextFieldPath.type(identifierName)
    }
    verifyDisplayName(customerName, identifierName) {
        this.displayNamePath.should('have.text', customerName + ',' + " " + identifierName)
    }
    typeInContactPersonTextField(contactPerson) {
        this.contactPersonTextFieldPath.type(contactPerson)

    }
    typeInassociatedSinceDate(date) {
        this.associatedSinceDatePath.type(date)
    }
    typeInemailText(email) {
        this.emailTextPath.type(email)
    }
    typeInMobileNumberField(mobileno) {
        this.mobileNumberTextPath.type(mobileno)
    }
    typeInalternateMobileNumberTextField(altmobile) {
        this.alternateMobileNumberTextFieldPath.type(altmobile)
    }
    clickCustomerTypeDropDown() {
        this.customerTypeDropDownPath.click({ force: true })
    }
    typeInSearchFieldPath(customerType) {
        this.searchFieldPath.type(customerType).type("{enter}", { force: true })
    }
    clickcustomerSubType() {
        this.customerSubTypePath.click({ force: true })
    }
    typeInSearchFieldCustomerSubType(customerSubType) {
        this.searchFieldPath.type(customerSubType).type("{enter}", { force: true })
    }
    clickToggleButtonforVendor() {
        this.toggleButtonforVendorPath.click({ force: true })
    }
    clickvendorTypeDropDown() {
        this.vendorTypeDropDownPath.click({ force: true })
    }
    typeInSearchFieldforVendorType(vendor) {
        this.searchFieldPath.type(vendor).type("{enter}", { force: true })
    }
    clicksaveBasicDetailsButton() {
        this.saveBasicDetailsButtonPath.click({ force: true })
    }
    clickaddOrganisationandLicence() {
        this.addOrganisationandLicencePath.click({ force: true })
    }
    clickCheckboxForORganisationandLicencesPath() {
        this.checkboxForORganisationandLicencesPath.click({ force: true })
    }
    typeIndfplCreditLimitText() {
        this.HECreditLimitPath.type("10234")
    }
    clicktoggleButtonforSecurityApplicable() {
        this.toggleButtonforSecurityApplicablePath.click({ force: true })
    }
    typeInsecurityAmoutText() {
        this.securityAmoutTextPath.type('2225')
    }
    typeInReciveTextPath() {
        this.reciveTextPath.type('890')
    }
    clickaddCRMDetails() {
        this.addCRMDetailsPath.click({ force: true })
    }
    clickonCRMDropDown() {
        this.crmAccountsLeadDropDownPath.click({ force: true })

    }
    typeInSearchFieldForCRM() {
        this.searchFieldPath.type("Harshita").type("{enter}", { force: true })
    }
    typeInCRMDate(date) {
        this.crmDate.type(date)
    }
    clickAddAddressButton() {
        this.addAddressButtonPath.click({ force: true })
    }
    typeInStreetAddress(address) {
        this.streetAddressTextPath.type(address)
    }
    clickCountryDropDown() {
        this.countryDropDownPath.click({ force: true })
    }
    typeCountryName() {
        this.searchFieldPath.type("India").type("{enter}", { force: true })
    }
    clickStateDropDown() {
        this.stateDropDownPath.click({ force: true })
    }
    typeStateName() {
        this.searchFieldPath.type("Uttar").type("{enter}", { force: true })
    }
    clickDistrictDropDown() {
        this.districtDropDownPath.click({ force: true })
    }
    typeforAddressEachField() {
        this.searchFieldPath.type("Meerut").type("{enter}", { force: true })
    }
    clickTehsilDropDown() {
        this.tehsilDropDownPath.click({ force: true })
    }

    clickVillageDropDown() {
        this.villageDropDownPath.click({ force: true })
    }
    typeVillageName() {
        this.searchFieldPath.type("Partapur").type("{enter}", { force: true })
    }
    clickOnAddRegistrationAndTaxation() {
        this.addRegistrationAndTaxationPath.click({ force: true })
    }
    clickAddTaxDetails() {
        this.addTaxDetailsPath.click({ force: true })
    }
    clicktaxRegime() {
        this.taxRegimePath.click({ force: true })
    }
    typeTaxRegimeSearchField() {
        this.searchFieldPath.type("Goods").type("{enter}", { force: true })
    }

    clicktaxCategoryPath() {
        this.taxCategoryPath.click({ force: true })

    }
    typeTaxCategory() {
        this.searchFieldPath.type("Registered").type("{enter}", { force: true })
    }
    typeDateForTax(date) {
        this.taxStartDatePath.type(date)
    }
    clickTaxSaveButton() {
        this.taxSaveButtonPath.click({ force: true })
    }
    clickAddBranchDetailsIcon() {
        this.addBranchDetailsIconPath.click({ force: true })
    }
    typeInBranchNameField(branchName) {
        this.branchNameTextFieldPath.type(branchName)
    }
    typeInStreetFieldForBranch(street) {
        this.branchAddressStreetTextFieldPath.type(street)
    }
    clickBranchCountryDropDown() {
        this.branchCountryDropDownPath.click({ force: true })
    }
    clickBranchStateDropDown() {
        this.branchStateDropDownPath.click({ force: true })
    }
    clickBranchDistrictDropDown() {
        this.branchDistrictDropDownPath.click({ force: true })
    }
    clickBranchTehsilDropDown() {
        this.branchTehsilDropDownPath.click({ force: true })
    }
    clickBranchVillageDropDown() {
        this.branchVillageDropDownPath.click({ force: true })
    }
    clickOnSeparateRegistrationToggle() {
        this.separateRegistrationTogglePath.click({ force: true })
    }
    typeIssuingAuthority() {
        this.issuingAuthorityTextFieldPath.type("ABC").type("{enter}", { force: true })
    }
    typeRegistrationNumber() {
        this.registrationNumberTextPath.type("REG1234567").type("{enter}", { force: true })
    }
    typeRegistrationValidFromDate(date) {
        this.registrationValidFromDatePath.type(date)
    }
    get codeField(){
        return cy.get("input[name='Party[txt_short_name]']")
    }
    typeCodeInCustomer(data){
        this.codeField.type(data)

    }

}