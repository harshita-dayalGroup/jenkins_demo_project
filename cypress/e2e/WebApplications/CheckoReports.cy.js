import { ReportFilterData } from "../TestData/ReportData"
import { pageUrl } from "../TestData/ReportData"
import { LoginData } from "../TestData/LoginData"
import { LoginPage } from "../Pages/loginPage"

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

const loginPage = new LoginPage()
const loginData = new LoginData()
const filter = new ReportFilterData()
const Url = new pageUrl() 
function formatReportName(reportName) {
  return reportName.replace(/\s+/g, '');
}
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds() -1).padStart(2, '0');
  
  return `${year}${month}${day}_${hours}${minutes}${seconds}`;
}

  
describe.skip('Download Sales Report Regression Suite', () => {
     
  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds() -1).padStart(2, '0');
    
    return `${year}${month}${day}_${hours}${minutes}${seconds}`;
}

beforeEach('login', function () {
  cy.visit(Url.QAServerUrl)
  cy.wait(500)
  loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
  cy.wait(2000)
})
  
  it('Sales Order Summary Report', () => {
    cy.visit(Url.SalesOrderSummaryReactReportUrl)
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

    cy.intercept('GET', Url.SalesOrderSummaryReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
            
        });
    }); 
  })
  it('Sales Order Summary(Detailed) Report', () => {
    cy.visit(Url.SalesOrderSummaryDetailedReactReportUrl)
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

    cy.intercept('GET', Url.SalesOrderSummaryDetailedReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Sales Order - Full Data Report', () => {
    cy.visit(Url.SalesOrderFullDataReactReportUrl)
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

    cy.intercept('GET', Url.SalesOrderFullDataReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Sales Invoice Summary Report', () => {
    cy.visit(Url.SalesInvoiceSummaryReactReportUrl)
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

    cy.intercept('GET', Url.SalesInvoiceSummaryReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Sales Invoice Summary (Detailed) Report', () => {
    cy.visit(Url.SalesInvoiceSummaryDetailedReactReportUrl)
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

    cy.intercept('GET', Url.SalesInvoiceSummaryDetailedReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Sales Invoice - Full Data Report', () => {
    cy.visit(Url.SalesInvoiceFullDataReactReportUrl)
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

    cy.intercept('GET', Url.SalesInvoiceFullDataReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Sales Invoice - To Receive Payment Report', () => {
    cy.visit(Url.SalesInvoiceRPReactReportUrl)
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

    cy.intercept('GET', Url.SalesInvoiceRPReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });


  })
  it('Customer Payment Ageing Report', () => {
    cy.visit(Url.CustomerPaymentAgeingReactReportUrl)
    cy.wait(1000)
    
    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', Url.CustomerPaymentAgeingReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Sales Invoice Revision Summary Report', () => {
    cy.visit(Url.SalesInvoiceRevisionSummaryReactReportUrl)
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

    cy.intercept('GET', Url.SalesInvoiceRevisionSummaryReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Retail Sale Summary Report', () => {
    cy.visit(Url.RetailSalesSummaryReactReportUrl)
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

    cy.intercept('GET', Url.RetailSalesSummaryReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Retail Sale Summary (Detailed) Report', () => {
    cy.visit(Url.RetailSalesSummaryDetailedReactReportUrl)
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

    cy.intercept('GET', Url.RetailSalesSummaryDetailedReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Retail Sale - To Receive Payment Report', () => {
    cy.visit(Url.RetailSalesToReceivePaymentReactReportUrl)
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

    cy.intercept('GET', Url.RetailSalesToReceivePaymentReactReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Customer Balance Report', () => {
    cy.visit(Url.CustomerBalanceReportUrl)
    cy.wait(1000)
    
    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', Url.CustomerBalanceReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Customer Credit Limit Summary Report', () => {
    cy.visit(Url.CustomerCreditLimitSummaryReportUrl)
    cy.wait(1000)
    
    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(5) > .box-header').click()
    cy.get(':nth-child(5) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', Url.CustomerCreditLimitSummaryReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Party Wise Advance Payment Against Scheme Report', () => {
    cy.visit(Url.PartyWiseAdvancePaymentAgainstSchemeReportUrl)
    cy.wait(1000)
    
    cy.get('.anchor-side-bar').click()
    cy.get('.btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(4) > .box-header').click()
    cy.get(':nth-child(4) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', Url.PartyWiseAdvancePaymentAgainstSchemeReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Party Wise Advance Payment Adjustment Report', () => {
    cy.visit(Url.PartyWiseAdvancePaymentAdjustmentReportUrl)
    cy.wait(1000)
    
    cy.get('.anchor-side-bar').click()
    cy.get('.btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get(':nth-child(3) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET',Url.PartyWiseAdvancePaymentAdjustmentUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.intercept('GET', Url.PartyWiseAdvancePaymentAdjustmentReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
  it('Customer Average Payment Days Report', () => {
    cy.visit(Url.CustomerAveragePaymentDaysReportUrl)
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

    cy.intercept('GET', Url.CustomerAveragePaymentDaysReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({force: true});
    
    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
        reportName = reportName.trim();
        const formattedReportName = formatReportName(reportName);
        cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
            const formattedTimestamp = formatDate(timestamp);
            const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
            cy.checkFileExists(fileName);
        });
    });

  })
})
describe('Download Purchase Report Regression Suite', () => {
    
  beforeEach('login', function () {
    cy.visit(Url.QAServerUrl)
    cy.wait(500)
    loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
    cy.wait(2000)
  })

  it('Purchase Order Summary Report', () => {
    cy.visit(reportpageUrl.PurchaseOrderSummaryReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.PurchaseOrderSummaryReportUrl).as('download');
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
  it('Purchase Order Summary (Detailed) Report', () => {
    cy.visit(reportpageUrl.PurchaseOrderSummaryDetailedReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', Url.PurchaseOrderSummaryDetailedReportUrl).as('download');
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
  it.only('Purchase Order - To be Received Report', () => {
    cy.visit(Url.PurchaseOrdersTobeReceivedReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', Url.PurchaseOrdersTobeReceivedReportUrl).as('download');
    cy.get('[data-bs-original-title="Export To Excel"] > .img-fluid').click({ force: true });

    cy.get('.breadcrumb-item.active').invoke('text').then((reportName) => {
      reportName = reportName.trim();
      console.log("Report Name",reportName)
      const formattedReportName = formatReportName(reportName);
      console.log("Formatted Report Name",formattedReportName);
      cy.wrap(new Date()).invoke('getTime').then((timestamp) => {
        const formattedTimestamp = formatDate(timestamp);
        console.log("FormattedTime",formattedTimestamp)
        const fileName = `${formattedReportName}_${formattedTimestamp}.xlsx`;
        console.log(fileName)
        cy.task('checkFileExists', fileName).should('be.true');
      });
    });
  })
  it('Purchase Order - Full Data Report', () => {
    cy.visit(reportpageUrl.PurchaseOrderFullDataReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.PurchaseOrderFullDataReportUrl).as('download');
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
  it('Purchase Invoice Summary Report', () => {
    cy.visit(reportpageUrl.PurchaseInvoiceSummaryReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.PurchaseInvoiceSummaryReportUrl).as('download');
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
  it('Purchase Invoice Summary (Detailed) Report', () => {
    cy.visit(reportpageUrl.PurchaseInvoiceSummaryDetailedReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get('.btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.PurchaseInvoiceSummaryDetailedReportUrl).as('download');
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
  it('Purchase Invoice - To be Paid Report', () => {
    cy.visit(reportpageUrl.PurchaseInvoiceTobePaidReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.PurchaseInvoiceTobePaidReportUrl).as('download');
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
  it('Purchase Invoice - Full Data Report', () => {
    cy.visit(reportpageUrl.PurchaseInvoiceFullDataReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.PurchaseInvoiceFullDataReportUrl).as('download');
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
  it('Make Payment Summary Report', () => {
    cy.visit(reportpageUrl.MakePaymentSummaryReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.MakePaymentSummaryReportUrl).as('download');
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
  it('Agent Commission Summary Report', () => {
    cy.visit(reportpageUrl.AgentCommissionSummaryReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get('.btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.AgentCommissionSummaryReportUrl).as('download');
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
  it('Vendor Payment Ageing Report', () => {
    cy.visit(reportpageUrl.VendorPaymentAgeingReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.VendorPaymentAgeingReportUrl).as('download');
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
describe.skip('Download Accounts Report Regression Suite', () => {
  
  beforeEach('login', function () {
    cy.visit(Url.QAServerUrl)
    cy.wait(500)
    loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
    cy.wait(2000)
  })

  it('Day Book Report', () => {
    cy.visit(reportpageUrl.DayBookReportUrl)
    cy.wait(1000)
    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.collapsed-box > .box-header').click()
    cy.get(':nth-child(1) > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
    cy.get('#s2-togall-intOrganisationId').click()
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.DayBookReportUrl).as('download');
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
  it('Party Balance Report', () => {
    cy.visit(reportpageUrl.PartyBalanceReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get(':nth-child(4) > .box-header').click()
    cy.get('.box-body > :nth-child(1) > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
    cy.get('#s2-togall-intOrganisationId > .s2-select-label').click()
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.PartyBalanceReportUrl).as('download');
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
  it('Input Tax Summary Report', () => {
    cy.visit(reportpageUrl.InputTaxSummaryReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('.collapsed-box > .box-header').click()
    cy.get(':nth-child(1) > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
    cy.get('#s2-togall-intOrganisationId > .s2-select-label').click()      
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.InputTaxSummaryReportUrl).as('download');
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
  it('Output Tax Summary Report', () => {
    cy.visit(reportpageUrl.OutputTaxSummaryReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('.collapsed-box > .box-header').click()
    cy.get(':nth-child(1) > .select2 > .selection > .select2-selection > .select2-selection__rendered > .select2-search > .select2-search__field').click()
    cy.get('#s2-togall-intOrganisationId > .s2-select-label').click()      
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.OutputTaxSummaryReportUrl).as('download');
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
  it('CD Calculation Report', () => {
    cy.visit(reportpageUrl.CDCalculationReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.CDCalculationReportUrl).as('download');
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
  it('Payment Tagging Report', () => {
    cy.visit(reportpageUrl.PaymentTaggingReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.PaymentTaggingReportUrl).as('download');
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
  it('GSTR1 - B2B Report', () => {
    cy.visit(reportpageUrl.GSTR1B2BReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.GSTR1B2BReportUrl).as('download');
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
  it('GSTR1 - B2CL Report', () => {
    cy.visit(reportpageUrl.GSTR1B2CLReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.GSTR1B2CLReportUrl).as('download');
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
  it('GSTR1 - B2CS Report', () => {
    cy.visit(reportpageUrl.GSTR1B2CSReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.GSTR1B2CSReportUrl).as('download');
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
  it('HSN wise GST Details', () => {
    cy.visit(reportpageUrl.HSNwiseGSTDetailsReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.HSNwiseGSTDetailsReportUrl).as('download');
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
  
  beforeEach('login', function () {
    cy.visit(Url.QAServerUrl)
    cy.wait(500)
    loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
    cy.wait(2000)
  })
  it('Material Receive Summary Report', () => {
    cy.visit(reportpageUrl.MaterialReceiveSummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.MaterialReceiveSummaryReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.MaterialReceiveSummaryDetailedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.MaterialReceiveSummaryDetailedReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.MaterialReceivingTobeInvoicedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.MaterialReceivingTobeInvoicedReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.MaterialReceiveFullDataReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.MaterialReceiveFullDataReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.DeliverySummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.DeliverySummaryReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.DeliverySummaryDetailedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(9) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.DeliverySummaryDetailedReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.DeliveryTobeInvoicedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.DeliveryTobeInvoicedReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.MaterialDispatchFullDataReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.MaterialDispatchFullDataReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.WarehousewiseClearanceReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.WarehousewiseClearanceReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.OutwardFreightSummaryVehiclewiseReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.OutwardFreightSummaryVehiclewiseReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.OutwardFreightSummaryChallanwiseReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.OutwardFreightSummaryChallanwiseReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.StockStatusReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.StockStatusReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.StockMovementRegisterReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.StockMovementRegisterReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.StockLedgerReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.StockLedgerReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.StockTaggingReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.StockTaggingReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.StockExpiringinNextnDaysReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.StockExpiringinNextnDaysReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.StockExpiredReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.StockExpiredReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.StockTransferRequestSummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.StockTransferRequestSummaryReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.StockTransferRequestDetailedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(9) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.StockExpiredReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.StockTransferRequestFullDataReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(9) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.StockTransferRequestFullDataReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.StockTransferAdviceSummaryReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(7) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.StockTransferAdviceSummaryReactReportUrl).as('download');
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
    cy.visit(reportpageUrl.StockTransferAdviceSummaryDetailedReactReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(8) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.StockTransferAdviceSummaryDetailedReactReportUrl).as('download');
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
describe.skip('Download dClub Reports Regression Suite', () => {
  
  beforeEach('login', function () {
    cy.visit(Url.QAServerUrl)
    cy.wait(500)
    loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
    cy.wait(2000)
  })
  it('Crop Wise Report', () => {
    cy.visit(reportpageUrl.CropWiseReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(5) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get(':nth-child(3) > .box-body > :nth-child(1) > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.CropWiseReportUrl).as('download');
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
  it('Analytics Report', () => {
    cy.visit(reportpageUrl.AnalyticsReportUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(4) > .box-header').click()
    cy.get(':nth-child(4) > .box-body > .form-group > .select2 > .selection > .select2-selection').type(`${filter.BussinesArea}{enter}`)
    cy.get('.border-danger > .box-header').click()
    cy.get('.has-error > .select2 > .selection > .select2-selection').type(`${filter.GroupBy}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.AnalyticsReportUrl).as('download');
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
  it('Period Wise Farmer List', () => {
    cy.visit(reportpageUrl.PeriodWiseFarmerListUrl)
    cy.wait(1000)

    cy.get('.anchor-side-bar').click()
    cy.get(':nth-child(6) > .btn-default').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > .box-header').click()
    cy.get('.period-picker > .form-control').select(filter.PeriodType)
    cy.get('.sub-period-year > .form-control').select(filter.PeriodYear)
    cy.get(':nth-child(4) > .box-header').click()
    cy.get(':nth-child(4) > .box-body > .form-group > .select2 > .selection > .select2-selection').type(`${filter.BussinesArea}{enter}`)
    cy.get('#btnSaveReportFilter').click()
    cy.wait(2000)

    cy.intercept('GET', reportpageUrl.PeriodWiseFarmerListUrl).as('download');
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