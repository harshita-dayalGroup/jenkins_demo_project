import { post } from 'axios';
import axios from 'axios';
import { sendEmail } from './Email/email';

import LoginPage from "../Pages/LoginPageNew"
import { LoginData } from "../TestData/LoginData"
import { ApplicationUrl } from "../TestData/LoginData"
import { InvoiceRevision } from "../Pages/Sales/InvoiceRevisionPage"
import { SalesOrder } from "../Pages/Sales/SalesOrderPage"
import { Dispatch } from "../Pages/Sales/DispatchPage"
import { SalesInvoice } from "../Pages/Sales/SalesInvoicePage"
import { ManageSalesInvoice } from "../Pages/Sales/ManageSalesInvoicePage"
import invoiceRevisionData from "../TestData/Sales/InvoiceRevisionData.json"
import saleOrderData from '../TestData/Sales/SalesOrderData.json'
import dispatchData from '../TestData/Sales/DispatchData.json'
import { ReceivePayment } from "../Pages/Sales/RecievePaymentPage"
import receivePaymentData from "../TestData/Sales/ReceivePaymentData.json"
import { ReceivePaymentPage } from "../Pages/Sales/ManageRecievePayment"
import { RetailOrderPage } from "../Pages/Sales/RetailOrderPage"
import retailData from "../TestData/Sales/RetailData.json"
import { SalesReturnOrderPage } from "../Pages/Sales/SalesReturnOrderPage"
import salesReturnOrderData from "../TestData/Sales/SalesReturnOrderData.json"
import { ManageSalesReturn } from "../Pages/Sales/ManageSalesReturnPage"
import { MaterialReceiveSalesReturnPage } from "../Pages/Sales/MaterialReceiveSalesReturnPage"
import { ManageMaterialReceive } from "../Pages/Sales/ManageMaterialRecieveSalesReturn"
import { CreditNoteWithGST } from "../Pages/Sales/CreditNotesSRO-GST"
import { ManageCreditNote } from "../Pages/Sales/ManageCreditNotePage"
import MaterialReceiveData from "../TestData/Sales/MaterialReceiveSROData.json"
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
var materialReceiveNumber
var loginPage = new LoginPage()
var loginData = new LoginData()
var str = ""
var amount
var materialReceiveId
var salesReturnOrderNumber
const retailOrder = new RetailOrderPage()
var applicationurl = new ApplicationUrl()
const receivePayemntPage = new ReceivePayment()
const manageSalesInvoicePage = new ManageSalesInvoice()
const invoiceRevision = new InvoiceRevision()
const salesInvoice = new SalesInvoice()
const salesOrder = new SalesOrder()
const salesReturnOrderPage = new SalesReturnOrderPage()
const dispatch = new Dispatch()
const manageSalesReturnPage = new ManageSalesReturn()
const manageRecievePaymentPage = new ReceivePaymentPage()
const materialReceivePage = new MaterialReceiveSalesReturnPage()
const manageMaterialReceivePage = new ManageMaterialReceive()
const creditNoteWithGST = new CreditNoteWithGST()
const manageCreditNotePage = new ManageCreditNote()

var InvoiceNumber
var saleReturnId
var creditNoteNumber
let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'
let creditNoteUrl = QAServerUrl + '/Sales/index.php/invoice-revision/index-credit'
let creditNoteGSTUrl = QAServerUrl + '/Sales/index.php/invoice-revision/index-credit'
let retailPageUrl = QAServerUrl + 'Sales/index.php/retail-order/retail-list'
let saleReturnOrderPageUrl = QAServerUrl + 'Sales/index.php/sales-return-order/index'
let createRetailOrderPageUrl = projectClone + '/Sales/index.php/retail-order/create'
let materialReceiveSROUrl = QAServerUrl + 'Inventory/index.php/receive/sale-return-index'
let creditNoteWithGSTUrl = QAServerUrl + 'Sales/index.php/sales-return-invoice/index-credit'
describe("Sales Regression Suite", () => {
    let salesOrderUrl = QAServerUrl + 'Sales/index.php/order/index'
    let materialDispatchUrl = QAServerUrl + 'Inventory/index.php/delivery/index'
    let salesInvoiceUrl = QAServerUrl + 'Sales/index.php/invoice/index'
    let receivePaymentUrl = QAServerUrl + 'Sales/index.php/payment/index'
    let manageEmailPageUrl = QAServerUrl + 'BusinessSettings/index.php/message/index'


    var OrderNumber //this variable will store Sales Order number
    var ChallanNumber // This variable will store Dispatch Challan Number
    var salesInvoiceDocTypeId = '211'
    var salesInvoiceId
    // This variable will store Invoice number
    var salesInvoiceAmount

    var receivePaymentDocTypeId = '302'
    var salesInvoiceDate
    var receivePaymentId
    var receivePaymentNumber
    var InvoiceRevisonNumber
    var InvoiceRevisonCrNumber
    var DebitNoteAmount
    var CredtiNoteAmount
    var salesInvoiceRevisonAmount
    var dispachId

    beforeEach('login', function () {
        cy.visit(QAServerUrl)
        cy.wait(500)
        loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
        cy.wait(2000)
    })

    it('Sales Order - Create', function () {
        saleOrderData.forEach((saleOrderObject) => {
            Object.keys(saleOrderObject).forEach((saleOrderKey) => {

                var saleOrderDetails = saleOrderObject[saleOrderKey]
                const basicDetails = saleOrderDetails.basicdetails;
                console.log(basicDetails)
                const orderDetails = saleOrderDetails.orderDetails;
                const branchDetails = saleOrderDetails.branchDetails;
                salesOrder.visitSalesOrderPageUrl(salesOrderUrl)
                cy.wait(1000)

                salesOrder.clickSalesOrderButton()
                salesOrder.clickCustomerTypeDropDown()
                cy.get('li[role=option]').each(function ($ele) {
                    if ($ele.text() === basicDetails.customerType) {
                        cy.wrap($ele).click({ force: true })
                    }
                    else {
                        cy.log('not found')
                    }
                })

                salesOrder.clickPartyNameDropDown()
                cy.wait(1000)
                cy.get('li[role=option]').each(function ($ele, index) {
                    cy.log($ele.text())
                    if ($ele.text() === basicDetails.partyName) {
                        cy.wrap($ele).click({ force: true })
                    }
                    else {
                        cy.log('not found')
                    }
                })

                salesOrder.clickPlacedByDropDown()
                cy.get('li[role=option]').each(function ($ele, index, list) {
                    cy.log($ele.text())
                    if ($ele.text() === basicDetails.placedBy) {
                        cy.wrap($ele).click({ force: true })
                    }
                    else {
                        cy.log('not found')
                    }
                })
                cy.get('#order-dat_expected_delivery').type("01-12-2028")
                salesOrder.clickSaveButton()
                cy.wait(5000)
                salesOrder.clickModifyOrderButton()
                cy.wait(5000)
                console.log(orderDetails.length)
                orderDetails.forEach((productData, index) => {

                    salesOrder.clickProductDropDown(index)
                    cy.wait(2000)
                    cy.get('li[role=option]').each(function ($ele, index, list) {
                        cy.log($ele.text())
                        if ($ele.text() === productData.product) {
                            cy.wrap($ele).click({ force: true })
                        }
                        else {
                            cy.log('not found')
                        }
                    })
                    //   salesOrder.typeProduct(productData.product)
                    cy.wait(2000)


                    cy.wait(2000)
                    salesOrder.clickProductPackDropDown(index)
                    cy.wait(2000)
                    salesOrder.typeProductPack(productData.productPack)
                    salesOrder.typeProductQuantityField(index, productData.productQuantity)


                    if (orderDetails.length - 1 > index) {
                        salesOrder.clickAddProductDetails()
                    }

                })
                cy.wait(5000)

                salesOrder.clickSaveButton()
                cy.wait(5000)


                //To get order number
                cy.get('.breadcrumb-item > a').each(function ($ele) {
                    OrderNumber = $ele.text()
                    cy.log(OrderNumber)
                    console.log(OrderNumber)
                    cy.wait(2000)
                })

                //Change status to final 
                salesOrder.clickStatusLogButton()
                cy.wait(2000)
                salesOrder.clickStatusDropDown()
                /**
                 * in change status parameter enter the status name from your database
                 */
                loginPage.changeStatus('Final')

                //Change staus to PO confirm
                salesOrder.clickStatusLogButton()
                cy.wait(2000)
                salesOrder.clickStatusDropDown()
                loginPage.changeStatus('Confirmed')

                //Change status to Approved
                salesOrder.clickStatusLogButton()
                cy.wait(2000)
                salesOrder.clickStatusDropDown()
                loginPage.changeStatus('Approved')
                cy.wait(2000)
                cy.url().then(urlString => {
                    dispachId = urlString.split('=')[1];
                    cy.log(dispachId);
                })
            })
        })
    })
    it('Dispatch - Create', () => {
        saleOrderData.forEach((saleOrderObject) => {
            Object.keys(saleOrderObject).forEach((saleOrderKey) => {

                var saleOrderDetails = saleOrderObject[saleOrderKey]
                const basicDetails = saleOrderDetails.basicdetails;
                console.log(basicDetails)
                const orderDetails = saleOrderDetails.orderDetails;
                const branchDetails = saleOrderDetails.branchDetails;
                dispatch.visitDispatchUrl(materialDispatchUrl)
                cy.wait(500)
                dispatch.clickDispathButton()
                dispatchData.forEach((data) => {
                    cy.log(data.vehicleSource)
                    dispatch.clickVehicleSourceDropDown(data.vehicleSource)
                    dispatch.clickVehicleTypeDropDown(data.vehicleType)
                })



                cy.wait(2000)
                dispatch.clickOrderButton()
                cy.wait(2000)
                dispatch.typeSalesOrderNumber(OrderNumber)
                cy.wait(2000)
                dispatch.checkFirstCheckBox(dispachId)
                orderDetails.forEach((data, index) => {
                    dispatch.selectBranchDropDown(data.dispatch_branch, index)
                    dispatch.selectWareHouse(data.warehouse_branch, index)
                })

                dispatch.clickSubmitButton()
                cy.get('.box-header > .d-flex > :nth-child(3) > .badge > [data-bs-toggle="tooltip"]').each(function ($ele) {
                    ChallanNumber = $ele.text()
                    cy.log(ChallanNumber)
                    cy.wait(2000)
                })
                dispatch.clickStatusLogButton()
                cy.wait(2000)
                dispatch.clickStatusDropDown()
                loginPage.changeStatus('Final')
                dispatch.clickStatusLogButton()
                dispatch.clickStatusDropDown()
                loginPage.changeStatus('Approved')

            })
        })
    })

    it('Sales Invoice - Create', function () {
        salesInvoice.visitSalesInvoicePageUrl(salesInvoiceUrl)
        cy.wait(2000)
        salesInvoice.clickCreateSalesInvoiceButton(projectClone)
        salesInvoice.typeChallanNumber(ChallanNumber)
        cy.wait(2000)
        salesInvoice.clickFirstCheckBox()

        //salesInvoice.selectPaymentTerm()
        salesInvoice.clickApplyDiscountButton()
        salesInvoice.clickSaveButton()
        cy.wait(1000)
        cy.url().then(urlString => {
            salesInvoiceId = urlString.split('=')[1];
            cy.log(salesInvoiceId);
        })

        cy.wait(1000)
        cy.get('.breadcrumb-item > a').each(function ($ele) {
            InvoiceNumber = $ele.text()
            cy.log(InvoiceNumber)
            cy.wait(2000)
        })

        // Get purchase invoice value
        cy.get(':nth-child(2) > .align-items-center > input').invoke('val').then(text => {
            var temp1 = text.trim();
            salesInvoiceAmount = temp1.replace(/,/g, '');
            cy.log(salesInvoiceAmount);
        })
        cy.get('tbody>tr:nth-child(1) td:nth-child(2)').invoke('val').then(text => {
            var temp3 = text;
            salesInvoiceDate = temp3.replace(',', '');
            cy.log(salesInvoiceDate);
        })
    })
    it('Sales Invoice - Change Status', function () {
        manageSalesInvoicePage.visitSalesInvoicePage(salesInvoiceUrl)
        manageSalesInvoicePage.typeInvoiceNumber(InvoiceNumber)
        cy.wait(2000)
        manageSalesInvoicePage.clickStatusChangeButton()
        cy.wait(2000)
        manageSalesInvoicePage.clickStatusChangeDropDown()
        loginPage.changeStatus('Final')
        cy.wait(2000)

        //Change status to Approved
        manageSalesInvoicePage.clickStatusChangeButton()
        cy.wait(2000)
        manageSalesInvoicePage.clickStatusChangeDropDown()
        loginPage.changeStatus('Approved')
        cy.wait(2000)

    })
    it('Recieve Payment-Create', () => {


        receivePayemntPage.visitReceivePaymentUrl(receivePaymentUrl)
        cy.wait(1000)
        receivePayemntPage.clickAddReceivePaymentButton()
        receivePayemntPage.clickPartyNameDropDown()
        cy.wait(2000)
        // console.log(basicDetails.partyName)


        receivePaymentData.forEach((data) => {
            cy.get('li[role=option]').each(function ($ele) {

                if ($ele.text() === data.partyName) {

                    cy.wrap($ele).click({ force: true })

                }

                else {

                    cy.log('not found')

                }

            })
            receivePayemntPage.clickPaymentModeDropDown(data.paymentMode)
        })
        cy.get('#payment-int_against_account_head_id').select("Cash In Hand")
        receivePayemntPage.typeAmount(salesInvoiceAmount)
        receivePayemntPage.clickSaveButton()

        cy.get('.breadcrumb-item > a').each(function ($ele) {

            receivePaymentNumber = $ele.text().trim()

            cy.log(receivePaymentNumber)

            cy.wait(1000)

        })


        cy.url().then(urlString => {
            receivePaymentId = urlString.split('=')[1];
            cy.log(receivePaymentId);
        })
    })

    it('Receive Payment - Change Status ', () => {
        manageRecievePaymentPage.visitManageRecievePaymentPage(receivePaymentUrl)
        manageRecievePaymentPage.typeInSearchField(receivePaymentNumber)
        cy.wait(1000)
        manageRecievePaymentPage.clickStatusButton()
        cy.wait(1000)
        manageRecievePaymentPage.clickStatusDropDown()
        cy.wait(1000)
        loginPage.changeStatus('Final')
        cy.wait(1000)
        manageRecievePaymentPage.clickStatusButton()
        cy.wait(1000)
        manageRecievePaymentPage.clickStatusDropDown()
        cy.wait(1000)
        loginPage.changeStatus('Approved')
        cy.wait(1000)



    })
    it('Receive Payment Tagging ', () => {
        receivePayemntPage.visitReceivePaymentUrl(receivePaymentUrl)
        cy.wait(1000)
        manageRecievePaymentPage.typeInSearchField(receivePaymentNumber)
        manageRecievePaymentPage.clickActionDropDown()
        manageRecievePaymentPage.clickPaymentTaggingOption()

        var salesInvoiceCheckboxXpath = 'input[id="to_base_id_' + salesInvoiceId + '_' + salesInvoiceDocTypeId + '"]'

        var receivePaymentCheckboxXpath = 'input[id="from_base_id_' + receivePaymentId + '_' + receivePaymentDocTypeId + '"]'



        cy.get('#autoTag').first().uncheck({ force: true })

        cy.wait(500)

        cy.get(receivePaymentCheckboxXpath).first().check({ force: true })

        cy.wait(500)

        cy.get(salesInvoiceCheckboxXpath).first().check({ force: true })

        // cy.wait(500)
        cy.wait(500)
        manageRecievePaymentPage.clickSaveButton()
        cy.wait(5000)




    })

})

describe.only('Sales Invoice Revision Regression Suite', () => {
    let salesOrderUrl = QAServerUrl + 'Sales/index.php/order/index'
    let materialDispatchUrl = QAServerUrl + 'Inventory/index.php/delivery/index'
    let salesInvoiceUrl = QAServerUrl + 'Sales/index.php/invoice/index'

    let salesInvoiceRevisonUrl = QAServerUrl + 'Sales/index.php/invoice-revision/index-debit'


    var OrderNumber //this variable will store Sales Order number
    var ChallanNumber // This variable will store Dispatch Challan Number
    var salesInvoiceId
    var InvoiceNumber // This variable will store Invoice number
    var salesInvoiceAmount
    var salesInvoiceDate
    var InvoiceRevisonNumber
    var InvoiceRevisonCrNumber
    var DebitNoteAmount
    var CredtiNoteAmount
    var salesInvoiceRevisonAmount
    var dispachId

    beforeEach('login', function () {
        cy.visit(QAServerUrl)
        cy.wait(500)
        loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
        cy.wait(2000)
    })



    it('Sales Order - Create', function () {
        saleOrderData.forEach((saleOrderObject) => {
            Object.keys(saleOrderObject).forEach((saleOrderKey) => {

                var saleOrderDetails = saleOrderObject[saleOrderKey]
                const basicDetails = saleOrderDetails.basicdetails;
                console.log(basicDetails)
                const orderDetails = saleOrderDetails.orderDetails;
                const branchDetails = saleOrderDetails.branchDetails;
                salesOrder.visitSalesOrderPageUrl(salesOrderUrl)
                cy.wait(1000)

                salesOrder.clickSalesOrderButton()
                salesOrder.clickCustomerTypeDropDown()
                cy.get('li[role=option]').each(function ($ele) {
                    if ($ele.text() === basicDetails.customerType) {
                        cy.wrap($ele).click({ force: true })
                    }
                    else {
                        cy.log('not found')
                    }
                })

                salesOrder.clickPartyNameDropDown()
                cy.wait(1000)
                cy.get('li[role=option]').each(function ($ele, index) {
                    cy.log($ele.text())
                    if ($ele.text() === basicDetails.partyName) {
                        cy.wrap($ele).click({ force: true })
                    }
                    else {
                        cy.log('not found')
                    }
                })

                salesOrder.clickPlacedByDropDown()
                cy.get('li[role=option]').each(function ($ele, index, list) {
                    cy.log($ele.text())
                    if ($ele.text() === basicDetails.placedBy) {
                        cy.wrap($ele).click({ force: true })
                    }
                    else {
                        cy.log('not found')
                    }
                })
                cy.get('#order-dat_expected_delivery').type("01-12-2028")
                salesOrder.clickSaveButton()
                cy.wait(5000)
                salesOrder.clickModifyOrderButton()
                cy.wait(5000)
                console.log(orderDetails.length)
                orderDetails.forEach((productData, index) => {

                    salesOrder.clickProductDropDown(index)
                    cy.wait(2000)
                    cy.get('li[role=option]').each(function ($ele, index, list) {
                        cy.log($ele.text())
                        if ($ele.text() === productData.product) {
                            cy.wrap($ele).click({ force: true })
                        }
                        else {
                            cy.log('not found')
                        }
                    })
                    //   salesOrder.typeProduct(productData.product)
                    cy.wait(2000)


                    cy.wait(2000)
                    salesOrder.clickProductPackDropDown(index)
                    cy.wait(2000)
                    salesOrder.typeProductPack(productData.productPack)
                    salesOrder.typeProductQuantityField(index, productData.productQuantity)


                    if (orderDetails.length - 1 > index) {
                        salesOrder.clickAddProductDetails()
                    }

                })
                cy.wait(5000)

                salesOrder.clickSaveButton()
                cy.wait(5000)


                //To get order number
                cy.get('.breadcrumb-item > a').each(function ($ele) {
                    OrderNumber = $ele.text()
                    cy.log(OrderNumber)
                    console.log(OrderNumber)
                    cy.wait(2000)
                })

                //Change status to final 
                salesOrder.clickStatusLogButton()
                cy.wait(2000)
                salesOrder.clickStatusDropDown()
                /**
                 * in change status parameter enter the status name from your database
                 */
                loginPage.changeStatus('Final')

                //Change staus to PO confirm
                salesOrder.clickStatusLogButton()
                cy.wait(2000)
                salesOrder.clickStatusDropDown()
                loginPage.changeStatus('Confirmed')

                //Change status to Approved
                salesOrder.clickStatusLogButton()
                cy.wait(2000)
                salesOrder.clickStatusDropDown()
                loginPage.changeStatus('Approved')
                cy.wait(2000)
                cy.url().then(urlString => {
                    dispachId = urlString.split('=')[1];
                    cy.log(dispachId);
                })
            })
        })
    })
    it('Dispatch - Create', () => {
        saleOrderData.forEach((saleOrderObject) => {
            Object.keys(saleOrderObject).forEach((saleOrderKey) => {

                var saleOrderDetails = saleOrderObject[saleOrderKey]
                const basicDetails = saleOrderDetails.basicdetails;
                console.log(basicDetails)
                const orderDetails = saleOrderDetails.orderDetails;
                const branchDetails = saleOrderDetails.branchDetails;
                dispatch.visitDispatchUrl(materialDispatchUrl)
                cy.wait(500)
                dispatch.clickDispathButton()
                dispatchData.forEach((data) => {
                    cy.log(data.vehicleSource)
                    dispatch.clickVehicleSourceDropDown(data.vehicleSource)
                    dispatch.clickVehicleTypeDropDown(data.vehicleType)
                })



                cy.wait(2000)
                dispatch.clickOrderButton()
                cy.wait(2000)
                dispatch.typeSalesOrderNumber(OrderNumber)
                cy.wait(2000)
                dispatch.checkFirstCheckBox(dispachId)
                orderDetails.forEach((data, index) => {
                    dispatch.selectBranchDropDown(data.dispatch_branch, index)
                    dispatch.selectWareHouse(data.warehouse_branch, index)
                })

                dispatch.clickSubmitButton()
                cy.get('.box-header > .d-flex > :nth-child(3) > .badge > [data-bs-toggle="tooltip"]').each(function ($ele) {
                    ChallanNumber = $ele.text()
                    cy.log(ChallanNumber)
                    cy.wait(2000)
                })
                dispatch.clickStatusLogButton()
                cy.wait(2000)
                dispatch.clickStatusDropDown()
                loginPage.changeStatus('Final')
                dispatch.clickStatusLogButton()
                dispatch.clickStatusDropDown()
                loginPage.changeStatus('Approved')

            })
        })
    })

    it('Sales Invoice - Create', function () {
        salesInvoice.visitSalesInvoicePageUrl(salesInvoiceUrl)
        cy.wait(2000)
        salesInvoice.clickCreateSalesInvoiceButton(projectClone)
        salesInvoice.typeChallanNumber(ChallanNumber)
        cy.wait(2000)
        salesInvoice.clickFirstCheckBox()

        //salesInvoice.selectPaymentTerm()
        salesInvoice.clickApplyDiscountButton()
        salesInvoice.clickSaveButton()
        cy.wait(1000)
        cy.url().then(urlString => {
            salesInvoiceId = urlString.split('=')[1];
            cy.log(salesInvoiceId);
        })

        cy.wait(1000)
        cy.get('.breadcrumb-item > a').each(function ($ele) {
            InvoiceNumber = $ele.text()
            cy.log(InvoiceNumber)
            cy.wait(2000)
        })

        // Get purchase invoice value
        cy.get(':nth-child(2) > .align-items-center > input').invoke('val').then(text => {
            var temp1 = text.trim();
            salesInvoiceAmount = temp1.replace(/,/g, '');
            cy.log(salesInvoiceAmount);
        })
        cy.get('tbody>tr:nth-child(1) td:nth-child(2)').invoke('val').then(text => {
            var temp3 = text;
            salesInvoiceDate = temp3.replace(',', '');
            cy.log(salesInvoiceDate);
        })
    })
    it('Sales Invoice - Change Status', function () {
        manageSalesInvoicePage.visitSalesInvoicePage(salesInvoiceUrl)
        manageSalesInvoicePage.typeInvoiceNumber(InvoiceNumber)
        cy.wait(2000)
        manageSalesInvoicePage.clickStatusChangeButton()
        cy.wait(2000)
        manageSalesInvoicePage.clickStatusChangeDropDown()
        loginPage.changeStatus('Final')
        cy.wait(2000)

        //Change status to Approved
        manageSalesInvoicePage.clickStatusChangeButton()
        cy.wait(2000)
        manageSalesInvoicePage.clickStatusChangeDropDown()
        loginPage.changeStatus('Approved')
        cy.wait(2000)

    })

    it("Invoice Revision - Debit Note for Rate and Qty", () => {



        invoiceRevisionData.debitNote.forEach((salesInvoiceRevData) => {
            invoiceRevision.visitInvoiceRevision(salesInvoiceRevisonUrl)
            cy.wait(2000)
            invoiceRevision.clickAddInvoiceRevisionButton()
            invoiceRevision.clickPartyDropDown()
            invoiceRevision.typePartyInSearchField("Avinash Sharma")
            cy.wait(2000)
            invoiceRevision.clickInvoiceField()
            cy.wait(2000)
            invoiceRevision.typeInvoiceNumber(InvoiceNumber)
            cy.wait(2000)
            invoiceRevision.clickSaveButton()







            // Declare an array to store matched indices
            saleOrderData.forEach((saleOrderObject) => {
                const orderDetails = saleOrderObject.SalesOrder.orderDetails;

                invoiceRevisionData.debitNote.forEach((debitNote) => {
                    debitNote.products.forEach((product, debitNoteIndex) => {
                        const matchingOrderDetail = orderDetails.find((orderDetail) => orderDetail.product === product.name);

                        if (matchingOrderDetail) {
                            const orderDetailIndex = orderDetails.indexOf(matchingOrderDetail);

                            // Perform actions based on the comparison
                            // For example, click modify pencil icon for each match
                            invoiceRevision.clickModifyPencilIcon(orderDetailIndex);
                            cy.wait(5000);
                            invoiceRevision.clickModifyPencilIcon(orderDetailIndex);
                            cy.wait(5000);


                            invoiceRevision.clickConversionDropDown(product.conversionType);
                            cy.wait(5000);

                            if (product.conversionType === "Rate") {
                                invoiceRevision.typeRateInRateConversionField(product.rate, orderDetailIndex);
                            } else {
                                invoiceRevision.typeQuantityConversionField(product.quantity, orderDetailIndex);
                                cy.wait(1000);
                                invoiceRevision.clickCheckBox();
                                invoiceRevision.typeQuantity(product.quantity);
                            }

                            cy.wait(5000);

                            // Log the matched products
                            console.log(product.name + ' and ' + matchingOrderDetail.product);
                        }
                    });
                });
            });



            cy.wait(1000)



        })
        //  invoiceRevision.clickSaveButton()
        cy.wait(2000)
        invoiceRevision.clickStatusButton()
        invoiceRevision.clickStatusDropDown()
        loginPage.changeStatus('Final')
        invoiceRevision.clickStatusButton()
        invoiceRevision.clickStatusDropDown()
        loginPage.changeStatus('Approved')




    })
    it("Invoice Revision - Credit Note for Rate and Qty", () => {


        invoiceRevisionData.creditNote.forEach((salesInvoiceRevData) => {
            invoiceRevision.visitInvoiceRevision(creditNoteUrl)
            cy.wait(2000)
            invoiceRevision.clickAddInvoiceRevisionButton()
            invoiceRevision.clickPartyDropDown()
            invoiceRevision.typePartyInSearchField("Avinash Sharma")
            cy.wait(2000)
            invoiceRevision.clickInvoiceField()
            cy.wait(2000)
            invoiceRevision.typeInvoiceNumber(InvoiceNumber)
            cy.wait(2000)
            invoiceRevision.clickSaveButton()







            // Declare an array to store matched indices
            saleOrderData.forEach((saleOrderObject) => {
                const orderDetails = saleOrderObject.SalesOrder.orderDetails;

                invoiceRevisionData.creditNote.forEach((creditNote) => {
                    creditNote.products.forEach((product, debitNoteIndex) => {
                        const matchingOrderDetail = orderDetails.find((orderDetail) => orderDetail.product === product.name);

                        if (matchingOrderDetail) {
                            const orderDetailIndex = orderDetails.indexOf(matchingOrderDetail);

                            // Perform actions based on the comparison
                            // For example, click modify pencil icon for each match
                            invoiceRevision.clickModifyPencilIcon(orderDetailIndex);
                            cy.wait(5000);
                            invoiceRevision.clickModifyPencilIcon(orderDetailIndex);
                            cy.wait(5000);


                            invoiceRevision.clickConversionDropDown(product.conversionType);
                            cy.wait(5000);

                            if (product.conversionType === "Rate") {
                                invoiceRevision.typeRateInRateConversionField(product.rate, orderDetailIndex);
                            } else {
                                invoiceRevision.typeQuantityConversionField(product.quantity, orderDetailIndex);
                                cy.wait(1000);
                                invoiceRevision.clickCheckBox();
                                invoiceRevision.typeQuantity(product.quantity);
                            }

                            cy.wait(5000);

                            // Log the matched products
                            console.log(product.name + ' and ' + matchingOrderDetail.product);
                        }
                    });
                });
            });

            // Perform further actions based on the stored indices
            // For example, click modify pencil icon again for unmatched products


            cy.wait(1000)



        })
        //  invoiceRevision.clickSaveButton()
        cy.wait(2000)
        invoiceRevision.clickStatusButton()
        invoiceRevision.clickStatusDropDown()
        loginPage.changeStatus('Final')
        invoiceRevision.clickStatusButton()
        invoiceRevision.clickStatusDropDown()
        loginPage.changeStatus('Approved')




    })
    it("Invoice Revision - Credit Note with gst for Rate and Qty", () => {


        invoiceRevisionData.creditNoteWithGST.forEach((salesInvoiceRevData) => {
            invoiceRevision.visitInvoiceRevision(creditNoteGSTUrl)
            cy.wait(2000)
            invoiceRevision.clickAddInvoiceRevisionButton()
            invoiceRevision.clickPartyDropDown()
            invoiceRevision.typePartyInSearchField("Avinash Sharma")
            cy.wait(2000)
            invoiceRevision.clickInvoiceField()
            cy.wait(2000)
            invoiceRevision.typeInvoiceNumber(InvoiceNumber)
            cy.wait(2000)
            invoiceRevision.clickSaveButton()







            // Declare an array to store matched indices
            saleOrderData.forEach((saleOrderObject) => {
                const orderDetails = saleOrderObject.SalesOrder.orderDetails;

                invoiceRevisionData.creditNoteWithGST.forEach((creditNoteWithGST) => {
                    creditNoteWithGST.products.forEach((product, debitNoteIndex) => {
                        const matchingOrderDetail = orderDetails.find((orderDetail) => orderDetail.product === product.name);

                        if (matchingOrderDetail) {
                            const orderDetailIndex = orderDetails.indexOf(matchingOrderDetail);

                            // Perform actions based on the comparison
                            // For example, click modify pencil icon for each match
                            invoiceRevision.clickModifyPencilIcon(orderDetailIndex);
                            cy.wait(5000);
                            invoiceRevision.clickModifyPencilIcon(orderDetailIndex);
                            cy.wait(5000);


                            invoiceRevision.clickConversionDropDown(product.conversionType);
                            cy.wait(5000);

                            if (product.conversionType === "Rate") {
                                invoiceRevision.typeRateInRateConversionField(product.rate, orderDetailIndex);
                            } else {
                                invoiceRevision.typeQuantityConversionField(product.quantity, orderDetailIndex);
                                cy.wait(1000);
                                invoiceRevision.clickCheckBox();
                                invoiceRevision.typeQuantity(product.quantity);
                            }

                            cy.wait(5000);

                            // Log the matched products
                            console.log(product.name + ' and ' + matchingOrderDetail.product);
                        }
                    });
                });
            });


            cy.wait(1000)



        })
        //  invoiceRevision.clickSaveButton()
        cy.wait(2000)
        invoiceRevision.clickStatusButton()
        invoiceRevision.clickStatusDropDown()
        loginPage.changeStatus('Final')
        invoiceRevision.clickStatusButton()
        invoiceRevision.clickStatusDropDown()
        loginPage.changeStatus('Approved')




    })


})
describe('Retail Order - Create',()=>{
    beforeEach('login', function () {
        cy.visit(QAServerUrl)
        cy.wait(500)
        loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
        cy.wait(2000)
    })
    it("Retail Order - Create ",()=>{
        retailOrder.visitRetailOrderUrl(retailPageUrl)
        retailOrder.clickAddButton(projectClone)
        retailData.forEach((data)=>{
            retailOrder.typeDiscountValue(data.discount)
            retailOrder.selectDeliveryMode()
            retailOrder.typeInSearchField(data.deliveryMode)
            data.retailOrder.forEach((retailOrderData,index)=>{
                retailOrder.clickProductPackDropDown(index)
                cy.wait(5000)
                cy.get('li[role=option]').each(function ($ele) {
                    if ($ele.text() === retailOrderData.productPackName) {
                      cy.wrap($ele).click()
                    }
                    else {
                      cy.log('not found')
                    }
                  })
                  retailOrder.typeCount(retailOrderData.count,index)
                  retailOrder.typeRate(index,retailOrderData.rate)
                  retailOrder.typeValue(index,retailOrderData.discountRate)

                  if(data.retailOrder.length-1 > index)
                  {
                    retailOrder.clickAddOrderButton()
                    cy.wait(2000)
                  }

            })
            retailOrder.clickRetailSaveButton()
            retailOrder.clickReceivePaymentButton()
            cy.get('#paymentForm > .card > .card-body > .table > tbody > :nth-child(1) > .text-end').invoke('text').then(val =>{
                var t = val
                 amount = t.replace(',', '')
                str =  amount.replace("\u20b9",'');

                cy.log(str)
                console.log(str.trim())

        cy.wait(2000)
        retailOrder.typeBalToReceive(str.trim())

            })
            retailOrder.clickSubmitButton()
            retailOrder.clickDownloadSlipButton()
            retailOrder.clickPrintInvoiceOption()

            //retailOrder.clickProductPackDropDown()
        })



    })
})
describe("Sales Return Order ", () => {
    beforeEach('login', function () {
        cy.visit(QAServerUrl)
        cy.wait(500)
        loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
        cy.wait(2000)
    })
    it("Sales Return Order ", () => {
        salesReturnOrderPage.visitsalesReturnOrderUrl(saleReturnOrderPageUrl)
        cy.wait(2000)
        salesReturnOrderPage.clickAddSalesOrderButton()
        salesReturnOrderData.forEach((saleReturnOrderObject) => {
            Object.keys(saleReturnOrderObject).forEach((saleReturnOrderKey) => {
                var salereturnOrderDetails = saleReturnOrderObject[saleReturnOrderKey]
                const basicDetails = salereturnOrderDetails.basicdetails;
                const returnOrderDetail = salereturnOrderDetails.returnorderdetails;
                //  console.log(basicDetails+ 'hjgdhgdgf  ')
                salesReturnOrderPage.clickCustomerTypeDropDown()
                salesReturnOrderPage.typeInSearchField(basicDetails.customerType)
                salesReturnOrderPage.clickCustomerDropDown()
                salesReturnOrderPage.typeInSearchField(basicDetails.partyName)
                cy.wait(2000)
                salesReturnOrderPage.clickSaveButton()
                cy.wait(2000)
                salesReturnOrderPage.clickReturnButton()
                cy.wait(2000)
                salesReturnOrderPage.clickAddIcon()
                salesReturnOrderPage.typeInSearchInvoiceField(InvoiceNumber)
               // cy.get('.select2-results__option--highlighted').click({ force: true })
                // cy.type("{enter}",{force:true})
                cy.wait(2000)
                cy.wait(2000)
                cy.wait(2000)
                saleOrderData.forEach((saleOrderObject) => {
                    Object.keys(saleOrderObject).forEach((saleOrderKey) => {

                        var saleOrderDetails = saleOrderObject[saleOrderKey]
                        const basicDetails = saleOrderDetails.basicdetails;
                        const orderDetails = saleOrderDetails.orderDetails;

                        var test
                        var j = 0
                        var data1
                        for (var i = 0; i < orderDetails.length; i++) {
                            cy.get(`body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(7) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(${9 * i + 9}) >  td:nth-child(1) > div:nth-child(3)`).invoke("text").then((text) => {
                                test = text
                                returnOrderDetail.forEach((data, index) => {
                                    data1 = data.productName


                                    if (data1 == test) {

                                        console.log('j==> ', j)
                                        salesReturnOrderPage.typeInReturnNoOfPacksField(j)
                                        cy.wait(2000)
                                        salesReturnOrderPage.selectOrganisation(j)
                                    }



                                })

                                j++;

                            })


                        }


                        salesReturnOrderPage.clicksaveReturnOrderButton()
                        cy.wait(5000)

                    })
                })
            })
        })
        cy.get('.breadcrumb-item.active').each(function ($ele) {
            var temp1 = $ele.text()
            var temp2 = temp1.replace('Sales Return Order - ', '')
            var temp3 = temp2.split(' ')[0]
            salesReturnOrderNumber = temp3.replace('New', '').trimEnd()
            cy.log(salesReturnOrderNumber)
        })
        cy.url().then(urlString => {
            saleReturnId = urlString.split('=')[1];
            cy.log(saleReturnId);
        })
        cy.wait(1000)
    })
    it("Sales Return Order - Change status", () => {
        cy.log(salesReturnOrderNumber)
        salesReturnOrderPage.visitsalesReturnOrderUrl(saleReturnOrderPageUrl)
        cy.wait(1000)
        manageSalesReturnPage.typeNumberInSearchColumn(salesReturnOrderNumber)
        cy.wait(2000)
        manageSalesReturnPage.clickStatusButton()
        cy.wait(2000)
        manageSalesReturnPage.clickStatusDropDown()
        cy.wait(2000)
        manageSalesReturnPage.typeInSearchField("Final")
        manageSalesReturnPage.clickSaveButton()
        cy.wait(2000)
        manageSalesReturnPage.clickStatusButton()
        manageSalesReturnPage.clickStatusDropDown()
        manageSalesReturnPage.typeInSearchField("Approved")
        manageSalesReturnPage.clickSaveButton()
        cy.wait(2000)


    })
    var orderDetailsLength
    var materialReceiveLength
    var materialProduct
    var returnOrderDetails
    it("Material Recieve - Sales Return Order", () => {
        materialReceivePage.visitMaterialRecievePage(materialReceiveSROUrl)
        cy.wait(2000)
        cy.scrollTo('top', { ensureScrollable: false })
        materialReceivePage.clickAddMaterialReceiveButton()
        cy.wait(2000)
        MaterialReceiveData.forEach((data) => {
          
            materialReceivePage.clickPartyDropDown()

            materialReceivePage.typeInSerachDropDown(data.basicDetails.party)
            cy.wait(2000)
            materialReceivePage.selectVehicleSource(data.basicDetails.vehicleSource)
            //console.log(data.basicDetails.IsInvoiceBeforeQC ==1)
            if (data.basicDetails.IsInvoiceBeforeQC == 1) {
                materialReceivePage.clickInvoiceBeforeQCToggleButton()
            }
            materialReceivePage.clickVehicleTypeDropDown(data.basicDetails.vehicleType)
            materialReceivePage.clickSaveButton()
            cy.wait(2000)

            materialReceivePage.clickOrderButton()
            materialReceivePage.typeInSerachFieldForMR(salesReturnOrderNumber)
            materialReceivePage.clickCheckBox(saleReturnId)

            cy.wait(2000)
         
            cy.wait(2000)
     

            materialReceivePage.clickSaveButton()
            cy.wait(2000)

            for (var index = 0; index < materialReceiveLength; index++) {

                console.log(materialProduct.OrderDetails[index].qualityCheckDetails == "")
                if (materialProduct.OrderDetails[index].qualityCheckDetails != "") {

                }

            }

            // materialReceivePage.clickSaveButton()
            cy.get('.breadcrumb-item').each(function ($ele) {
                var temp1 = $ele.text()
                var temp2 = temp1.replace('Material Receive (Sales Return) - ', '')
                var temp3 = temp2.split(' ')[0]
                materialReceiveNumber = temp3.replace('New', '').trimEnd()
                cy.log(materialReceiveNumber)
            })

            cy.url().then(urlString => {
                materialReceiveId = urlString.split('=')[1];
                cy.log(materialReceiveId);
            })
          

        })

    })
    it("Material Receive - Change Status ", () => {
        materialReceivePage.visitMaterialRecievePage(materialReceiveSROUrl)
        manageMaterialReceivePage.typeInSearchColumn(materialReceiveNumber)
        cy.wait(5000)
        manageMaterialReceivePage.clickStatusButton()
        cy.wait(5000)
        manageMaterialReceivePage.clickStatusDropdown()
        cy.wait(1000)
        manageMaterialReceivePage.typeInSearchField("Final")
        manageMaterialReceivePage.clickSaveButton()
        cy.wait(2000)
        manageMaterialReceivePage.clickStatusButton()
        cy.wait(5000)
        manageMaterialReceivePage.clickStatusDropdown()
        cy.wait(1000)
        manageMaterialReceivePage.typeInSearchField("Received")
        manageMaterialReceivePage.clickSaveButton()
        cy.wait(2000)


    })

    var salesReturnMaterialRecieve

    // it("Quality Check", () => {
    //     materialReceivePage.visitMaterialRecievePage(materialReceiveSROUrl)
    //     manageMaterialReceivePage.typeInSearchColumn(materialReceiveNumber)
    //     cy.wait(5000)
    //     materialReceivePage.clickOnMaterialReceiveLink()
    //     MaterialReceiveData.forEach((materialData, index) => {
    //         salesReturnMaterialRecieve = materialData.materialReceiveDetails
    //         materialReceiveLength = materialData.materialReceiveDetails.OrderDetails.length;

    //     });
    //     var j = 0;
    //     var flag = 0;
    //     for (var index = 0; index < materialReceiveLength; index++) {
    //         if (salesReturnMaterialRecieve.OrderDetails[index].qualityCheckDetails.physicalCheck.stockType != "") {
    //             console.log(index)
    //             flag = index
    //             cy.wait(2000)
    //             materialReceivePage.clickQualityCheckButton()
    //             materialReceivePage.selectQualityType("Physical Check")
    //             cy.get('table table tbody tr').each(($row) => {
    //                 // Find the badge element in the current row
    //                 var badgeElement = $row.find('span.badge');
    //                 console.log("span" + badgeElement[0].innerText.trim())
    //                 console.log(flag)

    //                 if (j <= materialReceiveLength) {
    //                     console.log(salesReturnMaterialRecieve.OrderDetails[flag].qualityCheckDetails.physicalCheck.stockType + "  Comparing With" + badgeElement[0].innerText.trim())
    //                     console.log(salesReturnMaterialRecieve.OrderDetails[flag].qualityCheckDetails.physicalCheck.stockType === badgeElement[0].innerText.trim(), salesReturnMaterialRecieve.OrderDetails[flag].qualityCheckDetails.physicalCheck.stockType, badgeElement[0].innerText.trim())
    //                     if (salesReturnMaterialRecieve.OrderDetails[flag].qualityCheckDetails.physicalCheck.stockType === badgeElement[0].innerText.trim()) {
    //                         console.log("Yes")
    //                         cy.get(`body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4) > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(${j + 1}) > td:nth-child(2) > div > div > input.text-end.form-control`).clear().type("1", { force: true }).type("{enter}", { force: true })

    //                     }
    //                     j++;

    //                     console.log(j)


    //                 }

    //             });
    //         }
    //             }
    //     cy.get(':nth-child(1) > .text-center > .btn').click({ force: true })

    //     materialReceivePage.visitMaterialRecievePage(materialReceiveSROUrl)
    //     manageMaterialReceivePage.typeInSearchColumn(materialReceiveNumber)
    //     cy.wait(5000)
    //     materialReceivePage.clickOnMaterialReceiveLink()
    //     MaterialReceiveData.forEach((materialData, index) => {
    //         salesReturnMaterialRecieve = materialData.materialReceiveDetails
    //         materialReceiveLength = materialData.materialReceiveDetails.OrderDetails.length;

    //     });
    //     var k= 0;
    //     var flag1 = 0;
    //     for (var index = 0; index < materialReceiveLength; index++) {
    //         if (salesReturnMaterialRecieve.OrderDetails[index].qualityCheckDetails.physicalCheck.stockType != "") {
    //             console.log(index)
    //             flag1 = index
    //             cy.wait(2000)
    //             materialReceivePage.clickQualityCheckButton()
    //             materialReceivePage.selectQualityType("Lab Check")
    //             cy.get('table table tbody tr').each(($row) => {
    //                 // Find the badge element in the current row
    //                 var badgeElement = $row.find('span.badge');
    //                 console.log("span" + badgeElement[0].innerText.trim())
    //                 console.log(flag1)

    //                 if (k <= materialReceiveLength) {
    //                         if (salesReturnMaterialRecieve.OrderDetails[flag1].qualityCheckDetails.labCheck.stockType === badgeElement[0].innerText.trim()) {
    //                         console.log("Yes")
    //                         cy.get(`body > div:nth-child(2) > section:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(4) > table:nth-child(4) > tbody:nth-child(1) > tr:nth-child(${k + 1}) > td:nth-child(2) > div > div > input.text-end.form-control`).clear().type("1", { force: true }).type("{enter}", { force: true })

    //                     }
    //                     k++;

    //                     console.log(j)


    //                 }

    //             });
    //         }
    //             }
    //     cy.get(':nth-child(1) > .text-center > .btn').click({ force: true })

    // });

    it("Credit Note with GST", () => {
        creditNoteWithGST.visitCreditNoteWithGSTUrl(creditNoteWithGSTUrl)
        cy.wait(5000)
        creditNoteWithGST.clickAddCreditButton()
        salesReturnOrderData.forEach((saleReturnOrderObject) => {
            Object.keys(saleReturnOrderObject).forEach((saleReturnOrderKey) => {
                var salereturnOrderDetails = saleReturnOrderObject[saleReturnOrderKey]
                const basicDetails = salereturnOrderDetails.basicdetails;
                creditNoteWithGST.clickCustomerDropDown()
                creditNoteWithGST.typeDataInSearchField(basicDetails.customerType)
                creditNoteWithGST.clickPartyTypeDropDown()
                creditNoteWithGST.typeDataInSearchField(basicDetails.partyName)
                cy.wait(2000)
                creditNoteWithGST.clickSaveButton()
                cy.wait(5000)
            })
        })

        creditNoteWithGST.clickReceiveButton()
        creditNoteWithGST.typeInSearchMaterialReceiveField(materialReceiveNumber)
        creditNoteWithGST.clickcheckBox(materialReceiveId)
        creditNoteWithGST.clickCrNoteSaveButton()
        creditNoteWithGST.clickCrNoteSaveButton()
        cy.get('.breadcrumb-item').each(function ($ele) {
            var temp1 = $ele.text()
            var temp2 = temp1.replace('Credit Note GST (Sales Return) - ', '')
            var temp3 = temp2.split(' ')[0]
            creditNoteNumber = temp3.replace('New', '').trimEnd()
            cy.log(creditNoteNumber)
        })

    })
    
    it("Credit Note Change Status ", () => {
        creditNoteWithGST.visitCreditNoteWithGSTUrl(creditNoteWithGSTUrl)
        manageCreditNotePage.typeInSearchColumn(creditNoteNumber)
        cy.wait(2000)
        manageCreditNotePage.clickStatusButton()
        manageCreditNotePage.clickStatusDropDown()
        cy.wait(2000)
        manageCreditNotePage.typeInSearchField("Final")
        manageCreditNotePage.clickStatusSaveButton()
        manageCreditNotePage.clickStatusButton()
        cy.wait(5000)
        manageCreditNotePage.clickStatusDropDown()
        manageCreditNotePage.typeInSearchField("Approved")
        cy.wait(2000)
        manageCreditNotePage.clickStatusSaveButton()
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