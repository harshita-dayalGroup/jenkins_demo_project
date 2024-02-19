// Your Cypress test file
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
// import axios from 'axios';
// import { sendEmail } from './Email/email';
import { ProductData } from '../TestData/MastersData/ProductData';
import { LoginData } from '../TestData/LoginData';
import { ApplicationUrl } from '../TestData/LoginData';
import LoginPage from '../Pages/LoginPageNew';
import CreateProductPage from '../Pages/Masters/CreateProductPage';

const loginData = new LoginData();
const loginPage = new LoginPage();
const productPage = new CreateProductPage();
const applicationurl = new ApplicationUrl();
const data = new ProductData();

let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'

//  const LoginUrl = QAServerUrl+'/index.php/site/login'
const ProductPageUrl = QAServerUrl+'index.php/product/index'
const BulkStatusChangeProductPackUrl = QAServerUrl+'index.php/Saarthi/bulk-approval/bulk-status-change-product'

describe('Create Product Regression Suite', () => {
  const dates = data.chossingdate()
  
  // Define a beforeEach hook to log in before each test case
  beforeEach("Test", () => {
   
    loginPage.visitLoginPage(QAServerUrl); 
    cy.wait(1000)
    loginPage.loginWeb(loginData.username,loginData.password,loginData.orgcode)
    cy.wait(1000)
  });
  it("Create Product",()=>{
   productPage.visitProductPage(ProductPageUrl);
    cy.viewport(1280, 720)

    cy.wait(1000)
    productPage.clickProductButton()
    cy.wait(2000)
    productPage.typeProductName(data.productName)
    productPage.typeProductShortName(data.productShortName)
    productPage.typeStartedonDate(dates)
    productPage.clickProductType()
    productPage.typeInSearchField(data.productType)
    productPage.clickMasterUnitDropdown()
    productPage.typeInSearchFieldForMasterUnit(data.masterUnit)
    productPage.turnOnToggeleButtonSale()
    productPage.turnOnToggeleButtonPurchase()
    productPage.turnOnToggeleButtonProduce()
    productPage.selectQualityCheck()
    productPage.selectQualityCheckOption()
    cy.wait(1000)
    productPage.clickSaveButton()
    cy.wait(5000)
    productPage.clickOnOrganisationDetailsPencilIcon()
    cy.wait(1000)
    cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) table thead th svg").click({force:true})
    cy.get('#producthse-1-int_organisation_id').select(data.organisation)
    cy.get('#producthse-1-dat_start').type(dates).type("{enter}",{force:true})
    productPage.clickAdditionalDetailsSaveButton()
    cy.wait(1000)
    productPage.clickSaleAvailablityPencilIcon()
    cy.wait(2000)
    productPage.clickSaleAvailablityCountryField()
    productPage.typeInSearchFieldforCountry(data.country)
    cy.wait(5000)
    productPage.clickSaleAvailablityStateField()
    productPage.typeInSearchFieldforState(data.state)
    productPage.typeInStartOnDateField(dates)
    productPage.clickAdditionalDetailsSaveButton()
    cy.wait(1000)
    productPage.clickTaxationPencilIcon()
    productPage.selectTaxRegime()
    productPage.typeInSearchFieldForTaxationRegime(data.taxation)
    productPage.selectTaxCategory()
    productPage.typeInSearchFieldForTaxCategory(data.taxCategory)
    productPage.selectTaxField()
    productPage.typeInSearchFieldForTax(data.tax)
    productPage.typeInRateField(data.rate)
    productPage.typeInSinceField(dates)
    cy.wait(2000)
    productPage.clickAdditionalDetailsSaveButton()
   cy.wait(2000)
    productPage.clickOnRegulatoryPencilIcon()
    productPage.clickOnAddSaleLicenceIcon()
    productPage.clickOnSalesLicenceCountry()
    productPage.typeCountryNameInSaleLicence(data.country)
    productPage.clickOnSalesLicenceState()
    productPage.typeStatesNameInSaleLicence(data.state)
    productPage.typeSaleGoverningLaw(data.law)
    productPage.typeSaleLicenceNumber(data.lawNo)
    productPage.typeDateForSaleLicence(dates)
    cy.wait(2000)
  //  productPage.clickAdditionalDetailsSaveButton()
  //  cy.wait(2000)
    
  })
  it("Bulk Status Change",()=>{
    //productPage = PageObjectFactory.createProductPage();
    productPage.visitBulkStatusChangeProductsUrl(BulkStatusChangeProductPackUrl)
    productPage.typeInSearchFieldForBulkStatus(data.productName)
    cy.wait(2000)
    productPage.checkTheFirstCheckBoxInBulkSatusChange()
    cy.wait(2000)
    productPage.clickChangeStatusButton()
    productPage.selectApproveOption()
    cy.wait(2000)
    productPage.clickAdditionalDetailsSaveButton()
    cy.wait(2000)
  })
//   after(() => {
//     // Make a request to the Express server to trigger email sending
//     axios.post('http://localhost:3000/send-email')
//         .then((response) => {
//             console.log(response.data.message, response.data.result);
//         })
//         .catch((error) => {
//             console.log('Error triggering email sending:', error.message);
//         });
// });



});
