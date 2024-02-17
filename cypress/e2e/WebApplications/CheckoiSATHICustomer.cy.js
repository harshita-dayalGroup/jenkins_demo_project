Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
import { LoginData } from '../TestData/LoginData';
import { ApplicationUrl } from '../TestData/LoginData';
import LoginPage from '../Pages/LoginPageNew';
import { iSathi_CreateCustomerPage } from '../Pages/iSATHI/iSathiCreateCustomerPage';
import  iSATHICreateCustomerData  from '../TestData/iSATHIData/iSATHICreateCustomerData.json';
import { iSathiDeleteCustomer } from '../Pages/iSATHI/iSathiDeletingCustomerPage';
const loginData = new LoginData();
const loginPage = new LoginPage();
const applicationurl = new ApplicationUrl();
const iSathi_CreateCustomerPageobj = new iSathi_CreateCustomerPage();
const iSathiDeleteCustomerobj = new iSathiDeleteCustomer();
let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'
let iSATHI_CustomerPageUrl = QAServerUrl + 'iSathi/index.php/customer/index'

describe("iSathi- Create Customer Regression Suite",()=>{
  beforeEach("Test", () => {
   
            loginPage.visitLoginPage(QAServerUrl);
            cy.wait(1000)
            loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
            cy.wait(1000)
        });
        it("iSathi - Create Customer",()=>{
            iSATHICreateCustomerData.forEach(iSathi_data =>{
            iSathi_CreateCustomerPageobj.visitIsathi_CreateCustomerPageUrl(iSATHI_CustomerPageUrl)
            cy.wait(2000)
            iSathi_CreateCustomerPageobj.clickCreateButton()
            cy.wait(2000)
            iSathi_CreateCustomerPageobj.typeInCustomerName(iSathi_data.name)
            iSathi_CreateCustomerPageobj.typeInMobileNumberField(iSathi_data.mobileNo)
            iSathi_CreateCustomerPageobj.typeEmail(iSathi_data.email)
            iSathi_CreateCustomerPageobj.typeUsername(iSathi_data.username)
            iSathi_CreateCustomerPageobj.typePassword(iSathi_data.password)
            iSathi_CreateCustomerPageobj.typeConfirmPassword(iSathi_data.confirmPassword)
            iSathi_CreateCustomerPageobj.typeLicenseType()
            cy.get('li[role=option]').each(function ($ele) {
                if ($ele.text() === iSathi_data.licenseType) {
                  cy.wrap($ele).click()
                }
                else {
                  cy.log('not found')
                }
              })
              iSathi_CreateCustomerPageobj.clickSubscription()
              cy.get('li[role=option]').each(function ($ele) {
                if ($ele.text() === iSathi_data.Subscription) {
                  cy.wrap($ele).click()
                }
                else {
                  cy.log('not found')
                }
              })
              iSathi_CreateCustomerPageobj.typeCloneName(iSathi_data.cloneName)
              iSathi_CreateCustomerPageobj.typeOrganisationName(iSathi_data.organisation)
              iSathi_CreateCustomerPageobj.typeOrganisationCode(iSathi_data.organisationCode)
              iSathi_CreateCustomerPageobj.typeStreetAddressPath(iSathi_data.street)
              iSathi_CreateCustomerPageobj.clickCountryDropDown()
              iSathi_CreateCustomerPageobj.typeCountry(iSathi_data.country)
              cy.wait(2000)
              iSathi_CreateCustomerPageobj.clickStateDropDown()
              cy.wait(5000)
              iSathi_CreateCustomerPageobj.typeState(iSathi_data.state)
              cy.wait(2000)
              iSathi_CreateCustomerPageobj.clickDistrictDropDown()
              cy.wait(2000)
              iSathi_CreateCustomerPageobj.typeDistrict(iSathi_data.district)
              cy.wait(2000)
              iSathi_CreateCustomerPageobj.clickCityDropDrown()
              cy.wait(2000)
             iSathi_CreateCustomerPageobj.typeCity(iSathi_data.city)
             
              cy.wait(2000)
              iSathi_CreateCustomerPageobj.typePinCode(iSathi_data.pinCode)

              cy.wait(2000)
              cy.get('#btnSubmit').click({force:true})

            })

        })
})
describe("iSathi-Deleting Customers",()=>{
   
    beforeEach("Test", () => {
   
        loginPage.visitLoginPage(QAServerUrl);
        cy.wait(1000)
        loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
        cy.wait(1000)
    });
    it("Testing Deleting Customers",()=>{
        iSATHICreateCustomerData.forEach(iSathi_data=>{
        iSathiDeleteCustomerobj.visitiSathiUrl(iSATHI_CustomerPageUrl)
        iSathiDeleteCustomerobj.typeNameInSearchFieldCustomerName(iSathi_data.organisation)
        iSathiDeleteCustomerobj.clickDropDownLink()
        iSathiDeleteCustomerobj.clickDeleteOption()
        iSathiDeleteCustomerobj.clickOKOption()
        cy.wait(5000)

    })
})
}
)


