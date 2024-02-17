Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
import { post } from 'axios';
import axios from 'axios';
import { sendEmail } from './Email/email';
import { CustomerData } from '../TestData/MastersData/CustomerData';
import { LoginData } from '../TestData/LoginData';
import { ApplicationUrl } from '../TestData/LoginData';
import LoginPage from '../Pages/LoginPageNew';
import { CreateCustomerPage } from '../Pages/Masters/CreateCustomerPage';
import { BulkStatusChangeCustomersPage } from '../Pages/Masters/BulkStatusChangeCustomers';
import { ImportCustomersPage } from '../Pages/Masters/ImportCustomersPage';

const loginData = new LoginData();
const loginPage = new LoginPage();
const applicationurl = new ApplicationUrl();
const customerPage = new CreateCustomerPage()
const customerData = new CustomerData();
const changeStatusCustomer = new BulkStatusChangeCustomersPage();
const importCustomers = new ImportCustomersPage();

let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'
const customerPageUrl = QAServerUrl + 'index.php/party/index?action=customer&intCustomerType=0'
const bulkStatusChangeCustomersUrl = QAServerUrl + 'index.php/Saarthi/bulk-approval/bulk-status-change-customer'
const importCustomersPageUrl = QAServerUrl + 'index.php/import/customer'
describe('Create Customer Regression Suite', () => {
    const dates = customerData.fetchingCurrentDate()

    // Define a beforeEach hook to log in before each test case
    beforeEach("Test", () => {

        loginPage.visitLoginPage(QAServerUrl);
        cy.wait(1000)
        loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
        cy.wait(1000)
    });
    it("Customer Page", () => {
        customerPage.visitCustomerPageUrl(customerPageUrl)
        cy.wait(500)
        customerPage.verifyHeaderOfPage()
        cy.wait(1000)
        customerPage.clickAddCustomerButton()
        cy.wait(2000)
        customerPage.verifyLabelOfForm()
        customerPage.typeInCustomerFimNameTextFiled(customerData.customerFirmName)
        customerPage.typeInidentifierTextField(customerData.customerIdentifier)
        customerPage.typeCodeInCustomer(customerData.shortName)
        customerPage.verifyDisplayName(customerData.customerFirmName, customerData.customerIdentifier)
        customerPage.typeInContactPersonTextField(customerData.contactPersonName)
        customerPage.typeInassociatedSinceDate(dates)
        customerPage.typeInemailText(customerData.email)
        customerPage.typeInMobileNumberField(customerData.mobileNo)
        customerPage.typeInalternateMobileNumberTextField(customerData.alternateMobileNo)
        customerPage.clickCustomerTypeDropDown()
        cy.wait(2000)
        customerPage.typeInSearchFieldPath(customerData.customerType)
        customerPage.clickcustomerSubType()
        customerPage.typeInSearchFieldCustomerSubType(customerData.customerSubType)
        customerPage.clickToggleButtonforVendor()
        customerPage.clickvendorTypeDropDown()
        customerPage.typeInSearchFieldforVendorType(customerData.vendorType)
        customerPage.clicksaveBasicDetailsButton()
        cy.wait(1000)
        customerPage.clickaddOrganisationandLicence()
        cy.wait(1000)
        customerPage.clickCheckboxForORganisationandLicencesPath()
        customerPage.typeIndfplCreditLimitText()
        cy.wait(1000)
        customerPage.clicktoggleButtonforSecurityApplicable()
        customerPage.typeInsecurityAmoutText()
        cy.wait(1000)
        customerPage.typeInReciveTextPath()
        customerPage.clicksaveBasicDetailsButton()
        cy.wait(1000)
        customerPage.clickaddCRMDetails()
        customerPage.clickonCRMDropDown()
        customerPage.typeInSearchFieldForCRM()
        customerPage.typeInCRMDate(dates)
        customerPage.clicksaveBasicDetailsButton()
        cy.wait(2000)
        cy.viewport(1280, 720)
        customerPage.clickAddAddressButton()
        customerPage.typeInStreetAddress(customerData.streetaddress)
        cy.wait(1000)
        customerPage.clickCountryDropDown()
        customerPage.typeCountryName()
        cy.wait(1000)
        customerPage.clickStateDropDown()
        cy.wait(2000)
        customerPage.typeStateName()
        cy.wait(2000)
        customerPage.clickDistrictDropDown()
        customerPage.typeforAddressEachField()
        cy.wait(2000)
        customerPage.clickTehsilDropDown()
        customerPage.typeforAddressEachField()
        cy.wait(2000)
        customerPage.clickVillageDropDown()
        customerPage.typeVillageName()

        customerPage.clicksaveBasicDetailsButton()
        cy.wait(2000)
        customerPage.clickOnAddRegistrationAndTaxation()
        customerPage.clickAddTaxDetails()
        customerPage.clicktaxRegime()
        customerPage.typeTaxRegimeSearchField()
        customerPage.clicktaxCategoryPath()
        customerPage.typeTaxCategory()
        customerPage.typeDateForTax(dates)
        customerPage.clickTaxSaveButton()
        cy.wait(2000)
        customerPage.clickAddBranchDetailsIcon()
        cy.wait(2000)
        customerPage.typeInBranchNameField(customerData.branchName)
        customerPage.typeInStreetFieldForBranch(customerData.streetaddress)
        customerPage.clickBranchCountryDropDown()
        customerPage.typeCountryName()
        customerPage.clickBranchStateDropDown()
        customerPage.typeStateName()
        customerPage.clickBranchDistrictDropDown()
        customerPage.typeforAddressEachField()
        customerPage.clickBranchTehsilDropDown()
        customerPage.typeforAddressEachField()
        customerPage.clickBranchVillageDropDown()
        customerPage.typeVillageName()
        customerPage.clickOnSeparateRegistrationToggle()
        customerPage.typeIssuingAuthority()
        customerPage.typeRegistrationNumber()
        customerPage.typeRegistrationValidFromDate(dates)
        cy.wait(2000)
        customerPage.clicksaveBasicDetailsButton()

    })
    it("Bulk Status Change", () => {
        changeStatusCustomer.visitBulkStatusChangeCustomersUrl(bulkStatusChangeCustomersUrl)
        changeStatusCustomer.typeInSearchNameColumnPath(customerData.customerFirmName)
        cy.wait(2000)
        changeStatusCustomer.clickCheckBox()
        cy.wait(2000)
        changeStatusCustomer.clickChangeStatusButton()
        cy.wait(5000)
        changeStatusCustomer.selectchangeStatusDropDown()
        cy.wait(5000)
        changeStatusCustomer.clickStatusSaveButton()

    })
    // it("Import Customers", () => {
    //     importCustomers.visitImportCustomersPage(importCustomersPageUrl)
    //     importCustomers.clickOrganisationDropDown()
    //     importCustomers.typeInSearchField()
    //     importCustomers.clickPartyTypeDropDown()
    //     importCustomers.typeInSearchFieldforParty()
    //     cy.wait(1000)
    //     importCustomers.clickChooseFileButton()
    //     importCustomers.clickImportButton()
    //     importCustomers.verifySummaryTable()
    //     importCustomers.clickExportButton()
    //     cy.wait(1000)

    // })
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