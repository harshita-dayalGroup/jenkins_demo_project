// Your Cypress test file
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
import { post } from 'axios';
import axios from 'axios';
import { sendEmail } from './Email/email';
import { CreateProductPackPage } from '../Pages/Masters/CreateProductPackPage';
import { LoginData } from '../TestData/LoginData';
import { ApplicationUrl } from '../TestData/LoginData';
import LoginPage from '../Pages/LoginPageNew';
import { CreateProductpackData } from '../TestData/MastersData/ProductPackData';
import { BulkStatusChangeProductPack } from '../Pages/Masters/BulkStatusChangeProductPackPage';

const loginData = new LoginData();

const loginPage = new LoginPage();
const productpackPage = new CreateProductPackPage();
const applicationurl = new ApplicationUrl();
const productpackData = new CreateProductpackData();
let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'
const bulkstatuschng = new BulkStatusChangeProductPack();
const ProductPackPageUrl = QAServerUrl + 'index.php/product-pack/index'
const BulkStatusChangeProductPackUrl = QAServerUrl + 'index.php/Saarthi/bulk-approval/bulk-status-change-pack'

describe('Create Product Pack Regression Suite', () => {
    const dates = productpackData.chossingdate()

    // Define a beforeEach hook to log in before each test case
    beforeEach("Test", () => {

        loginPage.visitLoginPage(QAServerUrl);
        cy.wait(1000)
        loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
        cy.wait(1000)
    });
    it("Create Product Pack", () => {
        productpackPage.visitProductPackPageUrl(ProductPackPageUrl)
        cy.viewport(1280, 720)
        cy.wait(1000)
        productpackPage.clickcreateProductpackeButton()
        productpackPage.typeProductpackName(productpackData.productpackName)
        cy.wait(1000)
        productpackPage.typeProductpackShortName(productpackData.productpackShortName)
        productpackPage.clickOnproductNameDropdown()
        productpackPage.typeproductNameInSearchFiled(productpackData.productName)
        productpackPage.typedate(dates)
        productpackPage.clickRateUnitDropdown()
        productpackPage.typeRateUnitInSearch(productpackData.productpackRateUnit)
        productpackPage.clickContentUnitDropDown()
        productpackPage.typeContentUnit(productpackData.productpackContentUnit)
        productpackPage.saveBasicDetails()
        cy.wait(1000)
        productpackPage.clickOnProductpackAvailablityPencilIcon()
        productpackPage.selectProductpackAvailabilityStoredAt()

        productpackPage.typeAvailbilityStoredAt()
       
          productpackPage.selectAvailabilityProducedAt()
          productpackPage.clickAvailabilityProducedAtSelectAll()
          productpackPage.editAvailabilityInvoicedFromSelection()
          productpackPage.selectAvailabilityInvoicedFrom()
          productpackPage.saveBasicDetails()
          cy.wait(2000)
          productpackPage.clickEditproductpackComposition()
          productpackPage.editproductpackContentQuantity()
             cy.wait(2000)

    })
    it("Bulk Status Change",()=>{
      //productPage = PageObjectFactory.createProductPage();
      bulkstatuschng.visitBulkStatusChangeUrl(BulkStatusChangeProductPackUrl)
      bulkstatuschng.typeInSearchFieldForBulkStatus(productpackData.productpackName)
      cy.wait(2000)
      bulkstatuschng.checkTheFirstCheckBoxInBulkSatusChange()
      cy.wait(2000)
     bulkstatuschng.clickChangeStatusButton()
       bulkstatuschng.selectApproveOption()
     cy.wait(2000)
      bulkstatuschng.clickSaveButton()
      cy.wait(2000)
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


 });
