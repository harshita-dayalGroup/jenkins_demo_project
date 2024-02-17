export class iSathi_CreateCustomerPage{
    visitIsathi_CreateCustomerPageUrl(url){
    cy.visit(url)
    }
   get createButtonPath(){
     return cy.get('#create-button')   
    }
    get customerNameTextField(){
        return cy.get('#customer-txt_contact_person')
    }
    get mobileNumberTextField(){
        return cy.get('#customer-txt_mobile')
    }
    get emailTextField(){
        return cy.get('#customer-txt_email')
    }
    get userNameTextField(){
        return cy.get('#customer-txt_user')
    }
    get passwordTextField(){
        return  cy.get('#customer-txt_password')
    }
    get confirmPasswordTextField(){
        return cy.get('#customer-txt_confirm_password')
    }
    get licenseTypeTextField(){
        return  cy.get('#select2-customer-int_license_type-container')
    }
    get subscriptionPath(){
        return cy.get('#select2-customersubscription-int_subscription_id-container')
    }
    get cloneNameTextPath(){
        return cy.get('#select2-customersubscription-int_subscription_id-container')
    }
    get organisationPath(){
        return  cy.get('#customer-txt_name')
    }
    get organisationCodePath(){
        return  cy.get('#customer-txt_company_code')
    }
    get streetAddressTextField(){
        return cy.get('#customer-txt_street')
    }
    get countryNameFieldPath(){
        return cy.get('#select2-customer-int_country_id-container')
    }
    get stateNameFieldPath(){
        return cy.get('#select2-customer-int_state_id-container')
    }
    get districtField(){
        return cy.get('#select2-customer-int_district_id-container')
    }
    get cityNameFieldPath(){
        return cy.get('#select2-customer-int_city_id-container')
    }
    get pinCodeTextPath(){
        return cy.get('#customer-txt_pin_code')
    }
    get searchField(){
       return  cy.get('.select2-search__field')
    }
     listOfOptions(){
     return     cy.get('li[role=option]')
    }
    clickCreateButton(){
        this.createButtonPath.click({force:true})
    }
    typeInCustomerName(name){
        this.customerNameTextField.type(name)

    }
    typeInMobileNumberField(mobileNo){
        this.mobileNumberTextField.type(mobileNo)
    }
    typeEmail(email){
        this.emailTextField.type(email)
    }
    typeUsername(userName){
        this.userNameTextField.type(userName)
    }
    typePassword(password){
        this.passwordTextField.type(password)
    }
    typeConfirmPassword(conPassword){
        this.confirmPasswordTextField.type(conPassword)
    }
    typeLicenseType(){
        this.licenseTypeTextField.click({force:true})
    }
    clickSubscription(){
        this.subscriptionPath.click({force:true})
    }
    typeCloneName(cloneName){
        this.cloneNameTextPath.type(cloneName)
    }
    typeOrganisationName(organisation){
        this.organisationPath.type(organisation)
    }
    typeOrganisationCode(orgCode){
        this.organisationCodePath.type(orgCode)
    }
    typeStreetAddressPath(address){
        this.streetAddressTextField.type(address)
    }
    clickCountryDropDown(){
        this.countryNameFieldPath.click({force:true})
    }
    typeCountry(country){
        this.searchField.type(country).type("{enter}",{force:true})
    }
    clickStateDropDown(){
        this.stateNameFieldPath.click({force:true})
    }
    typeState(state){
        this.searchField.type(state).type("{enter}",{force:true})
    }
    clickCityDropDrown(){
        this.cityNameFieldPath.click({force:true})
    }
    typeCity(city){
        this.searchField.type(city).type("{enter}",{force:true})
    }
   typePinCode(pinCode){
    this.pinCodeTextPath.type(pinCode)
   }
   clickDistrictDropDown(){
    this.districtField.click({force:true})
   }
   typeDistrict(district)
{
    this.searchField.type(district).type("{enter}",{force:true})
}
}

