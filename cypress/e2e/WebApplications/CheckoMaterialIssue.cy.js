Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  import { post } from 'axios';
import axios from 'axios';
import { sendEmail } from './Email/email';
import { LoginPage } from "../Pages/loginPage"
import { LoginData } from "../TestData/LoginData"
import { MaterialIssueData } from "../TestData/InventoryData/materialissuedata"
import { bulkMaterial } from "../Pages/Inventory/BulkMaterialPage"
import { ApplicationUrl } from "../TestData/webdata"

var loginPage = new LoginPage()
var loginData = new LoginData()
var inventory = new MaterialIssueData()
var bulkMaterial_actions = new bulkMaterial()
var applicationurl = new ApplicationUrl()

let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'

let inventoryServer = QAServerUrl + 'Inventory/index.php/stock-tx-out/entry'
let creatematerialissue = QAServerUrl + 'Inventory/index.php/stock-tx-out/index'

describe('Inventory Create form Material Issue suite', () => {
    // let inventoryServer = QAServerUrl + 'Inventory/index.php/stock-tx-out/index'
    //let createMaterialIssueUrl = projectClone +  
    beforeEach('login', function () {
      cy.visit(QAServerUrl)
      cy.wait(500)
      loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
      cy.wait(2000)
    })
    it('Material Issue- Create Form', () => {
      cy.visit(creatematerialissue)
      cy.wait(2000)
      cy.get("a[title='Create Material Issue']").click({ force: true });
      cy.get('.modal-dialog.modal-md').should('be.visible');
      cy.get(':nth-child(2) > :nth-child(1) > .form-group > .select2 > .selection > .select2-selection').click({ force: true });
      cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(inventory.series_name).type('{enter}', { force: true });
      cy.get('#stocktx-int_stock_tx_type').select(inventory.type, { force: true }).should('have.value', '11');
      cy.get('#select2-stocktxdetail-int_product_pack_id-container').click();
      cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(inventory.productName).type('{enter}', { force: true })
      cy.get('#stocktxdetail-int_pack_count').type(inventory.count).type('{enter}', { force: true })
      cy.get('#stocktxdetail-dbl_quantity').click({ force: true })
      cy.get('#stocktxdetail-dbl_quantity').click({ force: true })
      cy.wait(2000)
      cy.get('.text-end > .btn').click({ force: true }).log("SAve");
      cy.wait(2000)
    })
    it('Changing Status of Material Issue', () => {
      cy.visit(creatematerialissue)
      cy.wait(2000)
      cy.get("tbody>tr:nth-child(1)>td:nth-child(10) a").click({ force: true })
      cy.get('#select2-stocktx-int_status_type-container').click({ force: true })
      cy.wait(2000)
  
      cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(inventory.status_final).type('{enter}', { force: true })
      bulkMaterial_actions.status_save_butn()
      cy.wait(2000)
      cy.get('tbody>tr:nth-child(1)>td:nth-child(10) a').click({ force: true })
      cy.get('#select2-stocktx-int_status_type-container').click({ force: true })
      cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(inventory.status_approve).type('{enter}', { force: true })
      bulkMaterial_actions.status_save_butn()
      cy.get('#modal > .modal-dialog > .modal-content > .modal-header > .btn-close').click({ force: true })
    })
    it('Deleting the Material Issue', () => {
      cy.visit(creatematerialissue)
      cy.wait(2000)
      cy.get("body > div:nth-child(2) > section:nth-child(8) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(11) > div:nth-child(1) > a:nth-child(1) > i:nth-child(1)").click({ force: true })
      cy.get('tbody>tr:nth-child(1)>td:nth-child(11) >div>ul>li svg[data-icon="trash"]').click({ force: true })
      cy.get("body > div:nth-child(33) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2)").click({ force: true })
    })
  
  })
  
  describe.only('Bulk Entry Material Issue Suite', () => {
    //let inventoryServer = applicationurl.InventoryUrl
  
    beforeEach('login', function () {
      // Login before each test
      cy.visit(QAServerUrl)
      cy.wait(500)
      loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
      cy.wait(2000)
    })
  
    it('Making Product today', () => {
      // Test making a product on the current day
      cy.visit(inventoryServer)
      cy.wait(2000)
      bulkMaterial_actions.bulkMaterial()
      bulkMaterial_actions.creatingProduct()
    })
  
    it('Making Multiple Products Today', () => {
      // Test making multiple products on the current day
      cy.visit(inventoryServer)
      cy.wait(2000)
      bulkMaterial_actions.bulkMaterial()
      bulkMaterial_actions.multiProduct()
    })
  
    it('Changing Status', () => {
      // Test changing status on the current day
      cy.visit(inventoryServer)
      cy.wait(2000)
      bulkMaterial_actions.bulkMaterial()
      bulkMaterial_acscrolltions.Changing_status()
    })
  
    it('Modify Product on today', () => {
      // Test modifying a product on the current day
      cy.visit(inventoryServer)
      cy.wait(2000)
      bulkMaterial_actions.bulkMaterial()
      cy.get('#tr_1 > .hide_select2_border > .select2 > .selection > .select2-selection').click({ force: true })
      cy.get('.select2-search__field').click({ force: true }).type(inventory.modifiedProductName).type('{enter}', { force: true })
      cy.wait(2000)
      cy.get(" input[name='StockTxDetail[1][int_pack_count]']").click({ force: true }).type('123')
      cy.wait(5000)
      cy.get('#dbl_quantity-1').click({ force: true })
      cy.get('#save').click({ force: true })
      cy.wait(1000)
    })
  
    it('Deleting products of today', () => {
      // Test deleting multiple products on the current day
      cy.visit(inventoryServer)
      cy.wait(2000)
      bulkMaterial_actions.bulkMaterial()
      bulkMaterial_actions.deleting_multiple()
    })
  
    const currentDate = new Date()
    const previousDate = new Date(currentDate)
    previousDate.setDate(currentDate.getDate() - 1)
    const formattedPreviousDate = `${previousDate.getDate().toString().padStart(2, '0')}-${(previousDate.getMonth() + 1).toString().padStart(2, '0')}-${previousDate.getFullYear()}`
  
    it('Creating Product on previous Date', () => {
      // Test creating a product on the previous date (yesterday)
      cy.visit(inventoryServer)
      cy.wait(2000)
      cy.wait(5000)
      cy.get('.kv-date-picker').click({ force: true })
      cy.get('[data-date="1693958400000"]').click({ force: true })
      cy.wait(2000)
      cy.window().then((win) => {
        win.scrollTo(0, 0)
      })
      bulkMaterial_actions.bulkMaterial()
      bulkMaterial_actions.creatingProduct()
    })
  
    it("Making Multiple Product", () => {
      // Test making multiple products on the previous date (yesterday)
      cy.visit(inventoryServer)
      cy.wait(2000)
      cy.get('.kv-date-picker').click({ force: true })
      cy.wait(2000)
      cy.get('[data-date="1693958400000"]').click({ force: true })
      cy.wait(2000)
      bulkMaterial_actions.bulkMaterial()
      bulkMaterial_actions.multiProduct()
    })
  
    it("Changing Status", () => {
      // Test changing status on the previous date (yesterday)
      cy.visit(inventoryServer)
      cy.wait(2000)
      cy.get('.kv-date-picker').click({ force: true })
      cy.wait(2000)
      cy.get('[data-date="1693958400000"]').click({ force: true })
      cy.wait(2000)
      bulkMaterial_actions.bulkMaterial()
      bulkMaterial_actions.Changing_status()
    })
  
    it('Deleting Multiple Products', () => {
      // Test deleting multiple products on the previous date (yesterday)
      cy.visit(inventoryServer)
      cy.wait(2000)
      cy.get('.kv-date-picker').click({ force: true })
      cy.wait(2000)
      cy.get('[data-date="1693958400000"]').click({ force: true })
      cy.wait(2000)
      bulkMaterial_actions.bulkMaterial()
      bulkMaterial_actions.deleting_multiple()
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
  