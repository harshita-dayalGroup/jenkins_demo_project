import { LoginPage } from "../Pages/loginPage"
import { LoginData } from "../TestData/LoginData"
import { SalesData } from "../TestData/LoginData"
import { PurchaseData } from "../TestData/LoginData"
import { FilterData } from "../TestData/LoginData"
import { MaterialIssueData } from "../TestData/webdata"
import { CreatePurchaseInvoice } from "../Pages/Purchase/CreatePurchaseInvoicePage"
// import { bulkMaterial } from "../Pages/BulkMaterial"
import { ApplicationUrl } from "../TestData/LoginData"
import { ManagePurchaseInvoiceNumber } from "../Pages/Purchase/ManagePurchaseInvoicePage"
import { ModifyPurchaseInvoicePage } from "../Pages/Purchase/ModifyPurchaseInvoicePage"
import { InvoiceRevision } from "../Pages/Sales/InvoiceRevisionPage"
import { SalesOrder } from "../Pages/Sales/SalesOrderPage"
import { Dispatch } from "../Pages/Sales/DispatchPage"
import { SalesInvoice } from "../Pages/Sales/SalesInvoicePage"
import { ManageSalesInvoice } from "../Pages/Sales/ManageSalesInvoicePage"
import invoiceRevisionData from "../TestData/Sales/InvoiceRevisionData.json"
import saleOrderData from '../TestData/Sales/SalesOrderData.json'


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
var loginPage = new LoginPage()
var loginData = new LoginData()
var salesData = new SalesData()
var purchaseData = new PurchaseData()
const filter = new FilterData()
var applicationurl = new ApplicationUrl()
var purchaseInvoice = new CreatePurchaseInvoice()
var managePurchaseInvoice = new ManagePurchaseInvoiceNumber()
var modifyPurchaseInvoicePage = new ModifyPurchaseInvoicePage()
const manageSalesInvoicePage = new ManageSalesInvoice()
const invoiceRevision = new InvoiceRevision()
const salesInvoice = new SalesInvoice()
const salesOrder = new SalesOrder()
const dispatch = new Dispatch()
let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'
let creditNoteUrl = QAServerUrl + '/Sales/index.php/invoice-revision/index-credit'
let creditNoteGSTUrl = QAServerUrl + '/Sales/index.php/invoice-revision/index-credit'

describe.skip('Retail Regression Suite', function () {
  let retailPageUrl = QAServerUrl + 'Sales/index.php/retail-order/retail-list'
  let createRetailOrderPageUrl = projectClone + '/Sales/index.php/retail-order/create'

  beforeEach('login', function () {
    cy.visit(QAServerUrl)
    cy.wait(500)
    loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
    cy.wait(2000)
  })

  it('Retail Order - Create', function () {
    cy.visit(retailPageUrl)
    cy.wait(2000)
    cy.get('[href="/' + createRetailOrderPageUrl + '"]').click({ force: true })
    cy.get('#select2-invoicedetail-0-int_product_pack_id-container').click()
    cy.wait(1000)
    cy.get('li[role=option]').each(function ($ele, index) {
      if ($ele.text() === 'DAP 18:46 | DAP 50 Kg') {
        cy.wrap($ele).click()
      }
      else {
        cy.log('not found')
      }
    })
    cy.get('#invoicedetail-0-dbl_quantity').type('2{enter}')
    cy.get('.dropdown > .btn').click()
    cy.wait(500)
    //cy.get('[data-notify="message"]').should('contain','Successfully')
    cy.get('.top_btn > .dropdown > .dropdown-menu > :nth-child(2) > a').click()
      .should('not.contain', 'Exception (Database Exception)')
  })
  it('Retail Order - Preview Bill', function () {
    cy.visit(QAServerUrl + 'Sales/index.php/retail-order/retail-list')
    cy.get('tr[data-key="66"] > :nth-child(10) > .dropdown > .btn').click({ force: true })
    cy.get('tr[data-key="66"] > :nth-child(10) > .dropdown > .dropdown-menu > :nth-child(3) > a').click()
    cy.wait(1500)
    cy.get('body').should('not.contain', 'Exception (Database Exception)')
  })
})



describe.skip('Master Regression Suite', function () {

  beforeEach('login', function () {
    cy.visit(QAServerUrl)
    cy.wait(500)
    loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
    cy.wait(2000)
  })

  it('Import Product', function () {
    cy.visit(QAServerUrl + 'index.php/import/product-master')
    cy.get('#select2-product-int_organisation_id-container').click()
    cy.get('li[role=option]').each(function ($ele, index) {
      if ($ele.text() === 'Vishal Engineering Works (VEW)') {
        cy.wrap($ele).click()
      }
      else {
        cy.log('not found')
      }
    })
    cy.get('#product-file').attachFile('mSATHI-Product-PackSheetNew.csv')
    cy.get('.text-end > .btn-sm').click()
    cy.wait(500)
    cy.get('[data-notify="message"]').should('contain', 'successful')

  })
  it('Import Customer', function () {
    cy.visit(QAServerUrl + 'index.php/import/customer')
    cy.get('#select2-party-int_organisation_id-container').click()
    cy.get('li[role=option]').each(function ($ele, index) {
      if ($ele.text() === 'Vishal Engineering Works (VEW)') {
        cy.wrap($ele).click()
      }
      else {
        cy.log('not found')
      }
    })
    cy.get('#select2-party-int_customer_type-container').click()
    cy.get('li[role=option]').each(function ($ele, index) {
      if ($ele.text() === 'Customer') {
        cy.wrap($ele).click()
      }
      else {
        cy.log('not found')
      }
    })
    cy.get('#select2-party-int_type_of_customer-container').click()
    cy.get('li[role=option]').each(function ($ele, index) {
      if ($ele.text() === 'End Customer') {
        cy.wrap($ele).click()
      }
      else {
        cy.log('not found')
      }
    })
    cy.get('#party-file').attachFile('SampleData-CustomerMasterNew.csv')
    cy.get('.col-sm-12 > .btn-sm').click()
    cy.wait(500)
    cy.get('[data-notify="message"]').should('contain', 'successful')
    cy.wait(2000)
  })

  it('Import Rate', function () {
    cy.visit(QAServerUrl + 'index.php/rate/index')
    cy.get('[value="/' + projectClone + '/index.php/rate/upload-file"]').click()
    cy.get('#productratetemplateproduct-date').click()
    cy.get('[data-date="1670284800000"]').click()
    cy.get('#productratetemplateproduct-txtfile').attachFile('Sale_Final Price_20221201171643.xls')
    cy.get('.modal-footer > .btn').click()
    cy.get('[data-notify="message"]').should('contain', 'successful')
  })

  it('Import Rate - Rate from other template', function () {
    cy.visit(QAServerUrl + 'index.php/rate/index')
    cy.get('[data-key="0"] > [data-col-seq="1"] > a').click()
    cy.wait(500)
    cy.get('a[value="/' + projectClone + '/index.php/rate/import-template?id=1"] > .text-dark > b').click({ force: true })
    cy.get('#productratetemplate-int_product_rate_template_id').select(3)
    cy.get('#productratetemplate-date-kvdate > .input-group-text').click()
    cy.get('[data-date="1670284800000"]').click()
    cy.get('#productratetemplate-datimport-kvdate > .input-group-text').click()
    cy.get('[data-date="1670284800000"]').click()
    cy.get('.modal-footer > .btn').click()
    cy.wait(1000)
    cy.get('[data-notify="message"]').should('contain', 'successful')
  })
})

describe.skip('SATHI SUPPORT Regression Suite', function () {
  beforeEach('login', function () {
    cy.visit(QAServerUrl)
    cy.wait(500)
    loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
    cy.wait(2000)
  })

  //Create SATHI support ticket
  it('SATHI support ticket', function () {
    cy.visit(QAServerUrl + 'index.php/customer-care/sathi-support-list')
    cy.wait(500)
    cy.get('#modalButton').click({ force: true })
    cy.get('#scribble_subject').type('This is ticket from web')
    //cy.get('.mb-3 > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
    cy.get('.modal-footer > .btn').click()

  })

  //Create SATHI support ticket
  it('Helpdesk Ticket', function () {
    let To = 'Abhishek Tyagi'
    cy.visit(QAServerUrl + 'index.php/customer-care/helpdesk-list')
    cy.wait(2000)
    cy.get('.float-end > .view > .svg-inline--fa').click({ force: true })
    cy.get('#select2-pmsscribble-txtscribbleprojectuser-container').click()
    cy.get('li[role=option]').each(function ($ele, index, list) {
      if ($ele.text() === To) {
        cy.wrap($ele).click()
      }
      else {
        cy.log('not found')
      }
    })
    cy.get('#scribble_subject').type('This is helpdesk ticket from web')
    cy.get('.modal-footer > .btn').click()
    //cy.get('#w10-success-0').should('contain','sucess')
    cy.get('[data-notify="message"]').should('contain', 'successful')
  })

})

describe.skip('db-Xpert Regression Suite', function () {
  beforeEach('login', function () {
    cy.visit(QAServerUrl)
    cy.wait(500)
    loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
    cy.wait(2000)
  })
  // This block will create a blank database
  it('Create Blank Database', function () {
    cy.wait(2000)
    cy.visit(QAServerUrl + 'iSathi/index.php/server/index')
    cy.wait(2000)
    cy.get('#dropdownMenuLink').click()
    cy.wait(200)
    cy.get(':nth-child(3) > #modalButton').click()
    cy.wait(200)
    cy.get('#sathidatabase-intdbcount').type('1')
    //cy.get('#proceedBlankDb').click()
  })
  it('Documents - Mobile', function () {
    cy.visit(QAServerUrl + 'Administration/index.php/documents/mobile-index')
    cy.get('ul[class=list_ul]>li').each(function ($ele, index) {
      var liCount = parseInt(index) + parseInt(1)
      cy.get('.list_ul > :nth-child(' + liCount + ') > a').invoke('removeAttr', 'target').click()
      cy.wait(500)
      //  cy.get('body').should('not.contain','The requested URL was not found on this server.')
      cy.visit(QAServerUrl + 'Administration/index.php/documents/mobile-index')
    })
  })
  it('Documents - Web', function () {
    cy.visit(QAServerUrl + 'Administration/index.php/documents/web-index')
    cy.get('.list_ul > :nth-child(1) > a').invoke('removeAttr', 'target').click()
    cy.get('.col-md-12 >')
      .then($elements => {
        var countOfElements = $elements.length;
        for (let i = 1; i <= countOfElements; i++) {
          cy.wait(500)
          cy.get(':nth-child(' + i + ') > .box-body > .d-flex > .flex-grow-1 > a').invoke('removeAttr', 'target').click({ force: true })
          cy.wait(1000)
          cy.visit(QAServerUrl + 'index.php/swagger/swagger-document/index')
        }
      })
    cy.wait(500)
    cy.get('.list_ul > :nth-child(2) > a').invoke('removeAttr', 'target').click()
  })
  it('Documents - QA', function () {
    cy.visit(QAServerUrl + 'Administration/index.php/documents/qa-index')
    cy.get('ul[class=list_ul]>li').each(function ($ele, index) {
      var liCount = parseInt(index) + parseInt(1)
      cy.wait(500)
      cy.get('.list_ul > :nth-child(' + liCount + ') > a').invoke('removeAttr', 'target').click()
      cy.wait(500)
      cy.visit(QAServerUrl + 'Administration/index.php/documents/qa-index')
    })
  })
  it('View Table Relation', function () {
    cy.visit(QAServerUrl + 'Administration/index.php/sanitize/view-relations')
    cy.get('#select2-w3-container').click()

    cy.get('ul[role=listbox]>li')
      .then($elements => {
        var countOfElements = $elements.length;
        cy.log(countOfElements)
        for (let i = 1; i <= 2; i++) {
          cy.wait(500)
          cy.get('li[role=option]:nth-child(' + i + ')').click({ force: true })
          cy.wait(500)
          cy.get(':nth-child(3) > .btn').click({ force: true })
          cy.wait(2000)
          cy.scrollTo('top', { ensureScrollable: false })
          cy.get('#select2-w3-container').click({ force: true })
        }
      })
  })

})



describe.skip('Download Sales Report Regression Suite', () => {

  let SalesOrderSummaryReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=161-001'
  let SalesOrderSummaryDetailedReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=161-002'
  let SalesOrderFullDataReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=161-010'
  let SalesInvoiceSummaryReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-001'
  let SalesInvoiceSummaryDetailedReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-002'
  let SalesInvoiceFullDataReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-004'
  let SalesInvoiceRPReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-003'
  let CustomerPaymentAgeingReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-007'
  let SalesInvoiceRevisionSummaryReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=216-001'
  let RetailSalesSummaryReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=156-001'
  let RetailSalesSummaryDetailedReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=156-002'
  let RetailSalesToRecievePaymentReactReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=156-003'
  let CustomerBalanceReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-005'
  let CustomerCreditLimitSummaryReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-006'
  let PartyWiseAdvancePaymentAgainstSchemeReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=161-008'
  let PartyWiseAdvancePaymentAdjustmentReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=161-011'
  let CustomerAveragePaymentDaysReportUrl = QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=191-005'

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds() - 1).padStart(2, '0');

    return `${year}${month}${day}_${hours}${minutes}${seconds}`;
  }
  function formatReportName(reportName) {
    return reportName.replace(/\s+/g, '');
  }

  beforeEach('login', function () {
    cy.visit(QAServerUrl)
    cy.wait(500)
    loginPage.loginWeb()
    cy.get("[name='login-button']").click()
    cy.wait(2000)
  })

  it('Sales Order Summary Report', () => {
    cy.visit(SalesOrderSummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Sales Order Summary(Detailed) Report', () => {
    cy.visit(SalesOrderSummaryDetailedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Sales Order - Full Data Report', () => {
    cy.visit(SalesOrderFullDataReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Sales Invoice Summary Report', () => {
    cy.visit(SalesInvoiceSummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Sales Invoice Summary (Detailed) Report', () => {
    cy.visit(SalesInvoiceSummaryDetailedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Sales Invoice - Full Data Report', () => {
    cy.visit(SalesInvoiceFullDataReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Sales Invoice - To Receive Payment Report', () => {
    cy.visit(SalesInvoiceRPReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Customer Payment Ageing Report', () => {
    cy.visit(CustomerPaymentAgeingReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Sales Invoice Revision Summary Report', () => {
    cy.visit(SalesInvoiceRevisionSummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Retail Sale Summary Report', () => {
    cy.visit(RetailSalesSummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Retail Sale Summary (Detailed) Report', () => {
    cy.visit(RetailSalesSummaryDetailedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get('.btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Retail Sale - To Receive Payment Report', () => {
    cy.visit(RetailSalesToRecievePaymentReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Customer Balance Report', () => {
    cy.visit(CustomerBalanceReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Customer Credit Limit Summary Report', () => {
    cy.visit(CustomerCreditLimitSummaryReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Party Wise Advance Payment Against Scheme Report', () => {
    cy.visit(PartyWiseAdvancePaymentAgainstSchemeReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get('.btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(4) > .box-header').click()
    cy.get(':nth-child(4) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Party Wise Advance Payment Adjustment Report', () => {
    cy.visit(PartyWiseAdvancePaymentAdjustmentReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get('.btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get(':nth-child(3) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', PartyWiseAdvancePaymentAdjustmentReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
  it('Customer Average Payment Days Report', () => {
    cy.visit(CustomerAveragePaymentDaysReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });

  })
})
describe.skip('Download Inventory Reports Regression Suite', () => {

  let MaterialReceiveSummaryReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=121-001'
  let MaterialReceiveSummaryDetailedReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=121-002'
  let MaterialReceivingTobeInvoicedReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=121-003'
  let MaterialReceiveFullDataReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=121-004'
  let DeliverySummaryReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-001'
  let DeliverySummaryDetailedReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-002'
  let DeliveryTobeInvoicedReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-003'
  let MaterialDispatchFullDataReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-004'
  let WarehousewiseClearanceReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=172-001'
  let OutwardFreightSummaryVehiclewiseReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-005'
  let OutwardFreightSummaryChallanwiseReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-006'
  let StockStatusReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-001'
  let StockMovementRegisterReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-002'
  let StockLedgerReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-003'
  let StockTaggingReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-004'
  let StockExpiringinNextnDaysReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-005'
  let StockExpiredReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-006'
  let StockTransferRequestSummaryReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-010'
  let StockTransferRequestDetailedReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-011'
  let StockTransferRequestFullDataReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-012'
  let StockTransferAdviceSummaryReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-008'
  let StockTransferAdviceSummaryDetailedReactReportUrl = QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-009'

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds() - 1).padStart(2, '0');

    return `${year}${month}${day}_${hours}${minutes}${seconds}`;
  }
  function formatReportName(reportName) {
    return reportName.replace(/\s+/g, '');
  }

  beforeEach('login', function () {
    cy.visit(QAServerUrl)
    cy.wait(500)
    loginPage.loginWeb()
    cy.get("[name='login-button']").click()
    cy.wait(2000)
  })
  it('Material Receive Summary Report', () => {
    cy.visit(MaterialReceiveSummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', MaterialReceiveSummaryReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Material Receive Summary (Detailed) Report', () => {
    cy.visit(MaterialReceiveSummaryDetailedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', MaterialReceiveSummaryDetailedReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Material Receiving - To be Invoiced Report', () => {
    cy.visit(MaterialReceivingTobeInvoicedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', MaterialReceivingTobeInvoicedReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Material Receive - Full Data Report', () => {
    cy.visit(MaterialReceiveFullDataReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', MaterialReceiveFullDataReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Delivery Summary Report', () => {
    cy.visit(DeliverySummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', DeliverySummaryReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Delivery Summary (Detailed) Report', () => {
    cy.visit(DeliverySummaryDetailedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(9) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', DeliverySummaryDetailedReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Delivery - To be Invoiced Report', () => {
    cy.visit(DeliveryTobeInvoicedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', DeliveryTobeInvoicedReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Material Dispatch - Full Data Report', () => {
    cy.visit(MaterialDispatchFullDataReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', MaterialDispatchFullDataReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Warehouse wise Clearance Report', () => {
    cy.visit(WarehousewiseClearanceReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', WarehousewiseClearanceReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Outward Freight Summary (Vehicle wise) Report', () => {
    cy.visit(OutwardFreightSummaryVehiclewiseReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', OutwardFreightSummaryVehiclewiseReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Outward Freight Summary (Challan wise) Report', () => {
    cy.visit(OutwardFreightSummaryChallanwiseReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', OutwardFreightSummaryChallanwiseReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Stock Status Report', () => {
    cy.visit(StockStatusReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', StockStatusReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Stock Movement Register', () => {
    cy.visit(StockMovementRegisterReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', StockMovementRegisterReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Stock Ledger Report', () => {
    cy.visit(StockLedgerReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', StockLedgerReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Stock Tagging Report', () => {
    cy.visit(StockTaggingReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', StockTaggingReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Stock Expiring in Next n Days', () => {
    cy.visit(StockExpiringinNextnDaysReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', StockExpiringinNextnDaysReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Stock Expired Report', () => {
    cy.visit(StockExpiredReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', StockExpiredReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Stock Transfer Request Summary Report', () => {
    cy.visit(StockTransferRequestSummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', StockTransferRequestSummaryReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Stock Transfer Request (Detailed) Report', () => {
    cy.visit(StockTransferRequestDetailedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(9) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', StockExpiredReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Stock Transfer Request (Full Data) Report', () => {
    cy.visit(StockTransferRequestFullDataReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(9) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', StockTransferRequestFullDataReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Stock Transfer Advice Summary Report', () => {
    cy.visit(StockTransferAdviceSummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', StockTransferAdviceSummaryReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Stock Transfer Advice Summary (Detailed) Report', () => {
    cy.visit(StockTransferAdviceSummaryDetailedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', StockTransferAdviceSummaryDetailedReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      const formattedReportName = formatReportName(reportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })

})
