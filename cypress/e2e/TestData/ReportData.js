import { ApplicationUrl } from "../TestData/LoginData"

export class ReportFilterData {
  PeriodType = 'Financial Year'
  PeriodYear = 'Current FY ( 2023-2024 )'
  BussinesArea = 'Sales Template'
  GroupBy = 'Business Area'
  
}

export class pageUrl {
  constructor() {
    const applicationUrlInstance = new ApplicationUrl();
    this.domain = applicationUrlInstance.domain;
    this.projectClone = applicationUrlInstance.projectClone
    this.QAServerUrl = this.domain + this.projectClone + '/';
    //Sales Reports Urls
    this.SalesOrderSummaryReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=161-001';
    this.SalesOrderSummaryDetailedReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=161-002';
    this.SalesOrderFullDataReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=161-010';
    this.SalesInvoiceSummaryReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-001';
    this.SalesInvoiceSummaryDetailedReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-002';
    this.SalesInvoiceFullDataReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-004';
    this.SalesInvoiceRPReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-003';
    this.CustomerPaymentAgeingReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-007';
    this.SalesInvoiceRevisionSummaryReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=216-001';
    this.RetailSalesSummaryReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=156-001';
    this.RetailSalesSummaryDetailedReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=156-002';
    this.RetailSalesToReceivePaymentReactReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=156-003';
    this.CustomerBalanceReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-005';
    this.CustomerCreditLimitSummaryReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=181-006';
    this.PartyWiseAdvancePaymentAgainstSchemeReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=161-008';
    this.PartyWiseAdvancePaymentAdjustmentReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=161-011';
    this.CustomerAveragePaymentDaysReportUrl = this.QAServerUrl + 'Sales/index.php/Saarthi/report-react/report?key=191-005';
    //Inventory Reports Urls
    this.MaterialReceiveSummaryReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=121-001'
    this.MaterialReceiveSummaryDetailedReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=121-002'
    this.MaterialReceivingTobeInvoicedReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=121-003'
    this.MaterialReceiveFullDataReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=121-004'
    this.DeliverySummaryReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-001'
    this.DeliverySummaryDetailedReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-002'
    this.DeliveryTobeInvoicedReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-003'
    this.MaterialDispatchFullDataReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-004'
    this.WarehousewiseClearanceReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=172-001'
    this.OutwardFreightSummaryVehiclewiseReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-005'
    this.OutwardFreightSummaryChallanwiseReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=171-006'
    this.StockStatusReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-001'
    this.StockMovementRegisterReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-002'
    this.StockLedgerReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-003'
    this.StockTaggingReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-004'
    this.StockExpiringinNextnDaysReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-005'
    this.StockExpiredReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-006'
    this.StockTransferRequestSummaryReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-010'
    this.StockTransferRequestDetailedReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-011'
    this.StockTransferRequestFullDataReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-012'
    this.StockTransferAdviceSummaryReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-008'
    this.StockTransferAdviceSummaryDetailedReactReportUrl = this.QAServerUrl + 'Inventory/index.php/Saarthi/report-react/report?key=31-009'
    // dClub Reports Urls
    this.CropWiseReportUrl = this.QAServerUrl + 'DFF/index.php/Saarthi/report-react/report?key=1500-001'
    this.AnalyticsReportUrl = this.QAServerUrl + 'DFF/index.php/Saarthi/report-react/report?key=1500-002'
    this.PeriodWiseFarmerListUrl = this.QAServerUrl + 'DFF/index.php/Saarthi/report-react/report?key=1500-003'
    // Purchase Reports Urls
    this.PurchaseOrderSummaryReportUrl = this.QAServerUrl + 'Purchase/index.php/Saarthi/report-react/report?key=111-001'
    this.PurchaseOrderSummaryDetailedReportUrl = this.QAServerUrl + 'Purchase/index.php/Saarthi/report-react/report?key=111-002'
    this.PurchaseOrdersTobeReceivedReportUrl = this.QAServerUrl + 'Purchase/index.php/Saarthi/report-react/report?key=111-003'
    this.PurchaseOrderFullDataReportUrl = this.QAServerUrl + 'Purchase/index.php/Saarthi/report-react/report?key=111-004'
    this.PurchaseInvoiceSummaryReportUrl = this.QAServerUrl + 'Purchase/index.php/Saarthi/report-react/report?key=131-001'
    this.PurchaseInvoiceSummaryDetailedReportUrl = this.QAServerUrl + 'Purchase/index.php/Saarthi/report-react/report?key=131-002'
    this.PurchaseInvoiceTobePaidReportUrl = this.QAServerUrl + 'Purchase/index.php/Saarthi/report-react/report?key=131-003'
    this.PurchaseInvoiceFullDataReportUrl = this.QAServerUrl + 'Purchase/index.php/Saarthi/report-react/report?key=131-004'
    this.MakePaymentSummaryReportUrl = this.QAServerUrl + 'Purchase/index.php/Saarthi/report-react/report?key=141-001'
    this.AgentCommissionSummaryReportUrl = this.QAServerUrl + 'Purchase/index.php/Saarthi/report-react/report?key=131-005'
    this.VendorPaymentAgeingReportUrl = this.QAServerUrl + 'Purchase/index.php/Saarthi/report-react/report?key=131-006'
    // Accounts Reports Urls
    this.DayBookReportUrl = this.QAServerUrl + 'Accounting/index.php/Saarthi/report-react/report?key=21-007'
    this.PartyBalanceReportUrl = this.QAServerUrl + 'Accounting/index.php/Saarthi/report-react/report?key=21-004'
    this.InputTaxSummaryReportUrl = this.QAServerUrl + 'Accounting/index.php/Saarthi/report-react/report?key=21-011'
    this.OutputTaxSummaryReportUrl = this.QAServerUrl + 'Accounting/index.php/Saarthi/report-react/report?key=21-012'
    this.CDCalculationReportUrl = this.QAServerUrl + 'Accounting/index.php/Saarthi/report-react/report?key=21-016'
    this.PaymentTaggingReportUrl = this.QAServerUrl + 'Accounting/index.php/Saarthi/report-react/report?key=21-008'
    this.GSTR1B2BReportUrl = this.QAServerUrl + 'Accounting/index.php/Saarthi/report-react/report?key=21-013'
    this.GSTR1B2CLReportUrl = this.QAServerUrl + 'Accounting/index.php/Saarthi/report-react/report?key=21-014'
    this.GSTR1B2CSReportUrl = this.QAServerUrl + 'Accounting/index.php/Saarthi/report-react/report?key=21-015'
    this.HSNwiseGSTDetailsReportUrl = this.QAServerUrl + 'Accounting/index.php/Saarthi/report-react/report?key=21-010'

  }

}