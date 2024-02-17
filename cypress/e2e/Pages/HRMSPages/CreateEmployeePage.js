export class CreateEmployee{
  visitEmployeeListPage(url){
      cy.visit(url)
  }
  // get addEmployeeButtonPath(){
  //     return cy.get('.float-end > [href="/SATHI/HR/index.php/employee/create"]')
  // }
  clickAddEmployeeButton(projectClone){
      cy.get(`.float-end > [href="/Harshita/SATHI/HR/index.php/employee/create"]`).click({force:true})
  }
  get employeeNameField(){
     return cy.get("input[title='First Name should be as per document']")
  }

  typeNameInEmployeeNameField(name){
      this.employeeNameField.type(name)
  }
  get genderDropDownPath(){
      return cy.get('#employee-int_gender_type')
  }
  selectGender(gender){
      this.genderDropDownPath.select(gender)
  }
  get dateOfBirthField(){
      return cy.get('#employee-dat_birth')
  }
  typeInDateOfBirthField(date){
      this.dateOfBirthField.type(date,{force:true}).type("{enter}",{force:true})
  }
  get mobileNumberFieldPath(){
      return cy.get('#employee-txt_mobile')
  }
  typeMobileNumber(mobileNo){
      this.mobileNumberFieldPath.type(mobileNo)
  }
  get fatherNameField(){
      return cy.get('#employee-txt_father')
  }
  typeFatherName(fname){
      this.fatherNameField.type(fname)
  }
  get motherNameField(){
      return cy.get('#employee-txt_mother')
  }
  typeMotherName(mname){
      this.motherNameField.type(mname)
  }
  get maritalStatusDropDown(){
      return cy.get('#employee-int_marital_status_type')
  }
  selectMaritalStatus(maritalStatus){
      this.maritalStatusDropDown.select(maritalStatus)
  }
  get streetAddressField(){
      return cy.get('#present-street')
  }
  typeStreetAddress(street){
      this.streetAddressField.type(street)
  }
  get countryDropDown(){
      return cy.get('#select2-present-country-id-container')
  }
  selectCountry(){
      this.countryDropDown.click({force:true})
  }
  get searchField(){
      return cy.get('.select2-dropdown > .select2-search > .select2-search__field')
  }
  typeAddressFieldInSearchField(address){
      this.searchField.type(address).type("{enter}",{force:true})
  }
  get stateDropDown(){
      return cy.get('#select2-present-state-id-container')
  }
  selectState(){
      this.stateDropDown.click({force:true})
  }
  get districtDropDown(){
      return cy.get('#select2-present-district-container')
  }
  selectDistrict(){
      this.districtDropDown.click({force:true})
  }
  get cityDropDown(){
      return cy.get('#select2-present-city-container')
  }
  selectCity(){
      this.cityDropDown.click({force:true})
  }
  get divisionDropDown(){
      return    cy.get('#employee-int_division_id')
  }
  selectDivision(division){
      this.divisionDropDown.select(division,{force:true})
  }
  get organisationDropDown(){
      return  cy.get('#employee-int_organisation_id')
  }
  selectOrganisation(org){
      this.organisationDropDown.select(org,{force:true})
  }
  get branchDropDown(){
      return cy.get('#select2-employee-int_branch_id-container')
  }
  selectBranch(){
      this.branchDropDown.click({force:true})
  }
  get searchFieldForBranch(){
      return  cy.get('.select2-dropdown > .select2-search > .select2-search__field')
  }
  typeBranchName(branch){
      this.searchFieldForBranch.type(branch).type("{enter}",{force:true})
  }
get employeeTypeDropDown(){
  return cy.get('#select2-employee-int_employee_type-container')
}
selectEmployeeType(){
  this.employeeTypeDropDown.click({force:true})
}
get employeeFunctionDropDown(){
  return cy.get('#select2-employee-int_function_type-container')
}
get departmentDropDown(){
  return cy.get('#select2-intDepartmentId-container')
}
selectDepartment(){
  this.departmentDropDown.click({force:true})
}
typeDepartment(department){
  this.searchFieldForBranch.type(department).type("{enter}",{force:true})
}
selectEmployeeFunction(){
  this.employeeFunctionDropDown.click({force:true})
}
get postingPlaceField(){
  return cy.get('#employee-txt_posting_location')
}
typePostingPlace(postingPlace){
  this.postingPlaceField.type(postingPlace,{force:true})
}
get regionDistrictField(){
  return cy.get('#select2-employee-int_district_id-container')
}
selectRegionDistrict(){
  this.regionDistrictField.click({force:true})
}
get reportingOfficerDropDown(){
  return cy.get('#select2-employee-int_reporting_to_employee_id-container')
}
selectReportingOfficer(){
  this.reportingOfficerDropDown.click({force:true})
}
get dateOfJoining(){
  return cy.get('#employee-dat_join')
}
typeDateOfJoining(date){
  this.dateOfJoining.type(date,{force:true}).type("{enter}",{force:true})
}
get probabtionPeriodField(){
  return cy.get('#employee-int_probation_period')
}
typeProbationPeriod(probationPeriod){
  this.probabtionPeriodField.type(probationPeriod,{force:true})
}
get noticePeriodField(){
  return cy.get('#employee-int_notice_period')
}
typeNoticePeriod(noticePeriod){
  this.noticePeriodField.type(noticePeriod,{force:true})
}
get saveButton(){
  return cy.get('.text-end > .btn')
}
clickSaveButton(){
  this.saveButton.click({force:true})
}
get gradeDropDown(){
  return cy.get('#select2-intGradeId-container')
}
selectGradeDropDown(){
  this.gradeDropDown.click({force:true})
}
get designationDropDown(){
  return cy.get('#select2-employee-int_designation_id-container')
}
selectDesignation(){
  this.designationDropDown.click({force:true})
}
}