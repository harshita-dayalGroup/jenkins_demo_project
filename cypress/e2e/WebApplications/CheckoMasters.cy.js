Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  import { post } from 'axios';
import axios from 'axios';
import { sendEmail } from './Email/email';
import { RateManagement } from "../Pages/Masters/RateManagementPage"
import LoginPage from "../Pages/LoginPageNew"
import { LoginData } from "../TestData/LoginData"
import { ApplicationUrl } from "../TestData/LoginData"
import rateManagementdata from"../TestData/MastersData/RateManagementData.json"
import { RateStatusManagement } from "../Pages/Masters/RateStatusManagementPage" 
import { ViewRateList } from "../Pages/Masters/ViewRateList"
const rateManagementPage = new RateManagement();
var loginPage = new LoginPage()
var loginData = new LoginData()
var applicationurl = new ApplicationUrl()
let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'
let rateManagementUrl = QAServerUrl+'index.php/rate/index'
let rateStatusManagementUrl = QAServerUrl+'index.php/rate/approve-rate'
let rateStatusManagementPage = new RateStatusManagement()
const viewRateListPage = new ViewRateList()
let viewRateListPageUrl = QAServerUrl +'index.php/rate/rate-list'
describe("Rate Management Regression Suite",()=>{
    beforeEach('login', function () {
        cy.visit(QAServerUrl)
        cy.wait(500)
        loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
        cy.wait(2000)
})
  it("Rate Management Creation",()=>{
     rateManagementPage.visitRateManagementUrl(rateManagementUrl)
     cy.wait(2000)
     rateManagementdata.forEach(data => {
        rateManagementPage.clickAddRateTemplate()
        cy.wait(5000)
        rateManagementPage.typeRateName(data.rate.name)
        rateManagementPage.selectApplicableOnData(data.rate.applicableOn)
        if(data.rate.IsItMrp==1){
            rateManagementPage.clickIsItMrpRadioButton()
        }
        if(data.rate.IsItFinalPrice==1){
            rateManagementPage.clickIsItFinalRadioButton()
        }
        rateManagementPage.clickSaveButton()
        cy.wait(2000)
        rateManagementPage.clickAddPartyGroup()
        cy.wait(2000)
        rateManagementPage.clickSelectAllParty()
        rateManagementPage.clickSaveButton()
        cy.wait(2000)
        rateManagementPage.clickEditDateIcon()
        rateManagementPage.clickClearICon()
        cy.wait(2000)
        rateManagementPage.typeDate(data.rate.selectDate)
        rateManagementPage.clickSaveButton()
        cy.wait(2000)
        data.rate.productNames.forEach((data=>{
          rateManagementPage.typeProductNameInSearchField(data.productName);
          //cy.get('#productratetemplateproductsearch-product').clear()
          cy.get('#productratetemplateproductsearch-productpack').clear()
          rateManagementPage.typeProductPack(data.productPack);
         // cy.get('#productratetemplateproductsearch-product').clear()
          rateManagementPage.typeRate(data.rate)
          cy.get('#productratetemplateproductsearch-product').clear()
          cy.wait(5000)
          
          cy.wait(5000)
        })
        //cy.get('#productratetemplateproductsearch-product').clear()
        )

     });
  })
  it("Rate Status Management",()=>{
    rateStatusManagementPage.visitRateManagementPage(rateStatusManagementUrl)
    rateManagementdata.forEach((data)=>{
      rateStatusManagementPage.clickRateTemplateDropDown()
      rateStatusManagementPage.typeInSearchField(data.rate.name)
      cy.wait(2000)
      rateStatusManagementPage.selectWithEffectFormDate(data.rate.selectDate)
    })
    rateStatusManagementPage.clickSelectAllCheckBox()
    cy.wait(2000)
    rateStatusManagementPage.clickApprovedButton()
    rateStatusManagementPage.clickSelectAllCheckBox()
    cy.wait(2000)
    rateStatusManagementPage.clickApprovedButton()
     
     
  })
  // it("View Rate List Page",()=>{
  //   viewRateListPage.visitViewRateListPage(viewRateListPageUrl)
  //   cy.wait(2000)
  //   viewRateListPage.clickSideFilter()
  //   viewRateListPage.clickPeriodFilter()
  //   viewRateListPage.clickDateRemover()
  //   rateManagementdata.forEach((data)=>{
  //     viewRateListPage.writeDate(data.rate.selectDate)
  //   })
  //   viewRateListPage.clickPartyFilter()
  //   rateManagementdata.forEach((data)=>{
  //     viewRateListPage.clickPartyTypeFilter()
  //     viewRateListPage.typePartyName(data.rate.partyName)
  //     cy.scrollTo('bottom', { ensureScrollable: false })
  //     viewRateListPage.clickProductFilterOption()

  //     // cy.scrollTo('bottom', { ensureScrollable: false })
  //     // cy.wait(2000)
  //     data.rate.productNames.forEach((productName)=>{
  //       viewRateListPage.selectProducts(productName.productName)

  //     })
  //     viewRateListPage.clickApplicableOnFilter()
  //     viewRateListPage.clickOnApplicableDropDown()
  //     rateManagementdata.forEach((data)=>{
  //       viewRateListPage.typeSearchField(data.rate.applicableOn)
  //     })

  //     viewRateListPage.clickShowButton()
      

      
  //   })
  
   

     
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