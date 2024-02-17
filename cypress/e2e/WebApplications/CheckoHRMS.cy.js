Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
import { post } from 'axios';
import axios from 'axios';
import { sendEmail } from './Email/email';
import { LoginData } from '../TestData/LoginData';
import { ApplicationUrl } from '../TestData/LoginData';
import LoginPage from '../Pages/LoginPageNew';
import { CreateEmployee } from '../Pages/HRMSPages/CreateEmployeePage';
import employeeData from '../TestData/HRMSData/employeeData.json'
const loginData = new LoginData();
const loginPage = new LoginPage();
const applicationurl = new ApplicationUrl();
const createEmployeePage = new CreateEmployee()
let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'
let employeePageUrl = QAServerUrl + 'HR/index.php/employee/index'
let approveEmployeeUrl = QAServerUrl+'HR/index.php/approve-new-employee/index'
describe("Create Employee Regression Suite", () => {

  
        beforeEach("Test", () => {

            loginPage.visitLoginPage(QAServerUrl);
            cy.wait(1000)
            loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
            cy.wait(1000)

        });
       
        employeeData.forEach((employeeObject) => {
            Object.keys(employeeObject).forEach((employeeKey) => {
              const employeeDetails = employeeObject[employeeKey];
              console.log(employeeDetails)
          
           
            const basicDetails = employeeDetails.basicdetails;
            const presentAddress = employeeDetails.presentAddress;
            const employmentDetails = employeeDetails.employmentdetails;
            const permanentAddress = employeeDetails.permanentAddress;
        it("Creating Employee", () => {
            createEmployeePage.visitEmployeeListPage(employeePageUrl)
            cy.wait(2000)
            createEmployeePage.clickAddEmployeeButton()
            cy.wait(2000)
            Cypress.config('scrollBehavior', false);
            //cy.viewport(1000,500)
            createEmployeePage.typeNameInEmployeeNameField(basicDetails.name)
            cy.wait(5000)
            createEmployeePage.selectGender(basicDetails.gender)
            createEmployeePage.typeInDateOfBirthField(basicDetails.dateOfBirth)
            createEmployeePage.typeMobileNumber(basicDetails.mobileNo)
            createEmployeePage.typeFatherName(basicDetails.fatherName)
            createEmployeePage.typeMotherName(basicDetails.motherName)
            createEmployeePage.selectMaritalStatus(basicDetails.maritalStatus)
            createEmployeePage.typeStreetAddress(presentAddress.street)
            createEmployeePage.selectCountry()

            createEmployeePage.typeAddressFieldInSearchField(presentAddress.country)
            cy.wait(2000)
            createEmployeePage.selectState()
            createEmployeePage.typeAddressFieldInSearchField(presentAddress.state)
            cy.wait(2000)
            createEmployeePage.selectDistrict()
            createEmployeePage.typeAddressFieldInSearchField(presentAddress.district)
            cy.wait(2000)
            createEmployeePage.selectCity()
            cy.wait(2000)
            createEmployeePage.typeAddressFieldInSearchField(presentAddress.city)
            cy.log("harshita")
            if (permanentAddress && Object.keys(permanentAddress).length > 0){
                cy.get('#copy_address').click({force:true})
                cy.get('#parmanent-street').type(permanentAddress.street)
                cy.get('#select2-permanent-country-id-container').click({force:true})
                createEmployeePage.typeAddressFieldInSearchField("Indonesia") 
                cy.get('#select2-permanent-country-id-container').click({force:true})
                createEmployeePage.typeAddressFieldInSearchField(permanentAddress.country)   
                cy.get('#select2-permanent-state-id-container').click({force:true})
                cy.wait(2000)
                createEmployeePage.typeAddressFieldInSearchField(permanentAddress.state)
                cy.get('#select2-permanent-district-container').click({force:true})
                cy.wait(2000)
                createEmployeePage.typeAddressFieldInSearchField(permanentAddress.district)
                cy.wait(2000)
                cy.get('#select2-permanent-city-container').click({force:true})
                cy.wait(2000)
                createEmployeePage.typeAddressFieldInSearchField(permanentAddress.city)
                cy.wait(2000)

            }
            //y.scrollTo(0,900)
            createEmployeePage.selectDivision(employmentDetails.division)
            createEmployeePage.selectOrganisation(employmentDetails.organisation)
            // Cypress.config('scrollBehavior','bottom')


            cy.wait(5000)
            createEmployeePage.selectBranch()
            // cy.get('#select2-employee-int_branch_id-container').click({force:true})
            cy.wait(5000)
            // cy.get('.select2-dropdown > .select2-search > .select2-search__field').type("DFPL - Meerut-HO (Head office)").type({enter})
            createEmployeePage.typeBranchName(employmentDetails.branch)
            createEmployeePage.selectDepartment()
            createEmployeePage.typeDepartment(employmentDetails.department)
            createEmployeePage.selectGradeDropDown()
            createEmployeePage.typeAddressFieldInSearchField(employmentDetails.grade)
            createEmployeePage.selectDesignation()
            createEmployeePage.typeAddressFieldInSearchField(employmentDetails.designation)
            createEmployeePage.selectEmployeeType()
            cy.wait(1000)
            createEmployeePage.typeAddressFieldInSearchField(employmentDetails.employeeStatus)
            createEmployeePage.selectEmployeeFunction()
            createEmployeePage.typeAddressFieldInSearchField(employmentDetails.function)
            createEmployeePage.typePostingPlace(employmentDetails.postingPlace)
            createEmployeePage.selectRegionDistrict()
            createEmployeePage.typeAddressFieldInSearchField(employmentDetails.regionDistrict)
            createEmployeePage.selectReportingOfficer()
            createEmployeePage.typeAddressFieldInSearchField(employmentDetails.reportingOfficer)
            createEmployeePage.typeDateOfJoining(employmentDetails.dateOfJoining)
            createEmployeePage.typeProbationPeriod(employmentDetails.probationPeriod)
            createEmployeePage.typeNoticePeriod(employmentDetails.noticePeriod)
            createEmployeePage.clickSaveButton()
            cy.wait(10000)
            cy.get('.badge').invoke('text').then((text) => {
                var employeeNo = text;
                cy.log(employeeNo);
               
            });
            cy.wait(10000)



        })
     
    })
 
         
    })
    it("Chaning Status of an Employee",()=>{
        cy.visit(approveEmployeeUrl)
        cy.wait(2000)
      cy.get("input[value='1']").click({force:true})
      cy.wait(2000)
      cy.get("button[value='approveEmplopee']").click({force:true})
       })
       after(() => {
        // Make a request to the Express server to trigger email sending
        axios.post('http://localhost:3000/send-email')
        .then((response) => {
        console.log(response.data.message, response.data.result);
        })
        .catch((error) => {
        console.log('Error triggering email sending:', error.message);
        });
        });
    })



