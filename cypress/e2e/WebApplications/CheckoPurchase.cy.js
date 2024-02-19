Cypress.on('uncaught:exception', (err, runnable) => {

    return false

})

// import { post } from 'axios';
// import axios from 'axios';
// import { sendEmail } from './Email/email';

import { LoginData } from '../TestData/LoginData';

import { ApplicationUrl } from '../TestData/LoginData';
import { ManagePurchaseOrder } from '../Pages/Purchase/ManagePurchaseOrderPage';
import LoginPage from '../Pages/LoginPageNew';
import { PurchaseOrderPage } from '../Pages/Purchase/PurchaseOrderPage';
import PurchaseOrderData from '../TestData/PurchaseData/PurchaseOrderData.json'
import { MaterialReceivePage } from '../Pages/Purchase/MaterialReceivePage';
import MaterialReceiveData from '../TestData/PurchaseData/MaterialReceiveData.json'
import { ManageMaterialReceive } from '../Pages/Purchase/ManageMaterialReceivePage';
import { MakePayment } from '../Pages/Purchase/MakePaymentPage';
import { CreatePurchaseInvoice } from "../Pages/Purchase/CreatePurchaseInvoicePage"
import { ManageMakePayment } from '../Pages/Purchase/ManageMakePaymentPage';
// import { bulkMaterial } from "../Pages/BulkMaterial"
import { ManagePurchaseInvoiceNumber } from "../Pages/Purchase/ManagePurchaseInvoicePage"
import { ModifyPurchaseInvoicePage } from "../Pages/Purchase/ModifyPurchaseInvoicePage"
const loginData = new LoginData();
const loginPage = new LoginPage();
const applicationurl = new ApplicationUrl();
const purchaseOrderPage = new PurchaseOrderPage();
const managePurchaseOrderPage = new ManagePurchaseOrder();
const materialReceivePage = new MaterialReceivePage();
const manageMaterialReceivePage = new ManageMaterialReceive();
const makePymentPage = new MakePayment();
const manageMakePayment = new ManageMakePayment();
var purchaseInvoice = new CreatePurchaseInvoice()
var managePurchaseInvoice = new ManagePurchaseInvoiceNumber()
var modifyPurchaseInvoicePage = new ModifyPurchaseInvoicePage()
let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'
let purchaseOrderUrl = QAServerUrl + 'Purchase/index.php/purchase-order/index'
let materialReceiveUrl = QAServerUrl + 'Inventory/index.php/receive/index'
let purchaseInvoiceUrl = QAServerUrl + 'Purchase/index.php/invoice/index'
let makePaymentUrl = QAServerUrl + 'Purchase/index.php/payment/index'
var purchaseOrderNumber
var materialRecieveId
var purchaseReceiveNumber
var purchaseInvoiceNumber
var purchaseInvoiceValue
var invoiceAmount
var makePaymentNumber
var purchaseInvoiceDocTypeId = '253'
var makePaymentDocTypeId = '301'
var purchaseInvoiceId
var makePaymentId

describe("Purchase Order Regression Suite ", () => {
    beforeEach("Test", () => {

        loginPage.visitLoginPage(QAServerUrl);
        cy.wait(1000)
        loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
        cy.wait(1000)
    });

    it("Purchase Order - Create", () => {
        purchaseOrderPage.visitPurchaseorderPage(purchaseOrderUrl)
        cy.wait(2000)

        PurchaseOrderData.forEach((data) => {
            purchaseOrderPage.clickCreateaddButtonPurchaseOrderButton()
            purchaseOrderPage.clickOnBuyerDropDown()
            purchaseOrderPage.typeInSearchField(data.buyer)
            purchaseOrderPage.clickOnVendorDropDownField()
            purchaseOrderPage.typeInSearchField(data.vendor)
            cy.wait(1000)

            purchaseOrderPage.typeVendorReferenceNumber(data.vendorReferenceNo)
            purchaseOrderPage.typeQuotationRefNumber(data.quotationRefNo)
            purchaseOrderPage.clickSaveButton()
            cy.wait(2000)
            purchaseOrderPage.clickAddProductsButton()
            cy.wait(2000)
            data.purchaseOrder.forEach((purchaseData, index) => {
                console.log(data.purchaseOrder.length)
                purchaseOrderPage.clickProductDropDown(index)
                // purchaseOrderPage.typeInSearchField(purchaseData.productName)
                cy.wait(2000)
                cy.get('li[role=option]').each(function ($ele) {
                    cy.log($ele.text())
                    if ($ele.text() === purchaseData.productName) {
                        cy.wrap($ele).click({ force: true })
                    }
                    else {
                        cy.log('not found')
                    }
                })
                purchaseOrderPage.clickProductPackDropDown(index)
                console.log(purchaseData.productName)
                cy.wait(2000)
                // purchaseOrderPage.typeInSearchField(purchaseData.productPackName)
                cy.get('li[role=option]').each(function ($ele) {
                    cy.log($ele.text())
                    if ($ele.text() === purchaseData.productPackName) {
                        cy.wrap($ele).click({ force: true })
                    }
                    else {
                        cy.log('not found')
                    }
                })
                purchaseOrderPage.typeNumberOfPacks(purchaseData.numberOfPacks, index)
                purchaseOrderPage.clickDeliveryAtDropDown(purchaseData.deliveryAt, index)
                purchaseOrderPage.clickDeliveryOptions(index)
                purchaseOrderPage.typeInSearchField(purchaseData.deliveryName)
                purchaseOrderPage.clickPaymentTermDropDown(index)
                cy.wait(1000)
                purchaseOrderPage.typeInSearchField(purchaseData.paymentTerm)
                if (data.purchaseOrder.length - 1 > index) {
                    purchaseOrderPage.clickMultipleProducts()
                    cy.wait(2000)
                }
                purchaseOrderPage.clickSaveButton()
                cy.get('.breadcrumb-item.active').each(function ($ele) {
                    var temp1 = $ele.text()
                    var temp2 = temp1.replace('PO - ', '')
                    var temp3 = temp2.split(' ')[0]
                    purchaseOrderNumber = temp3.replace('New', '').trimEnd()
                    cy.log(purchaseOrderNumber)
                })
                cy.url().then(urlString => {
                    materialRecieveId = urlString.split('=')[1];
                    cy.log(materialRecieveId);
                })
                cy.wait(1000)



            })
            // purchaseOrderPage.clickProductDropDown()


        })
    })

    it("Purchase Order - Change Status", () => {
        purchaseOrderPage.visitPurchaseorderPage(purchaseOrderUrl)
        cy.wait(2000)

        cy.scrollTo('top', { ensureScrollable: false })

        managePurchaseOrderPage.typeInSearchColumn(purchaseOrderNumber)
        cy.get('tbody tr:nth-child(1) td:nth-child(8)').invoke('text').then((text) => {
            // Log the extracted text content to the Cypress console
            purchaseInvoiceValue = text
            cy.log(text);
        })
        managePurchaseOrderPage.clickStatusButtonPath()
        cy.wait(2000)
        managePurchaseOrderPage.clickStatusDropDown()
        managePurchaseOrderPage.typeInSearchField("Final")
        managePurchaseOrderPage.clickSaveButton()
        cy.wait(2000)
        managePurchaseOrderPage.clickStatusButtonPath()
        cy.wait(2000)
        managePurchaseOrderPage.clickStatusDropDown()
        managePurchaseOrderPage.typeInSearchField("Approved")
        managePurchaseOrderPage.clickSaveButton()

        cy.wait(5000)
    })

    it("Material Receive - Create", () => {
        materialReceivePage.visitMaterialRecievePage(materialReceiveUrl)
        cy.wait(2000)
        cy.scrollTo('top', { ensureScrollable: false })
        materialReceivePage.clickAddMaterialReceiveButton()
        cy.wait(2000)

        MaterialReceiveData.forEach((data) => {
            materialReceivePage.clickPartyDropDown()
            cy.wait(1000)
            materialReceivePage.typeInSerachDropDown(data.party)
            cy.wait(5000)
            materialReceivePage.selectVehicleSource(data.vehicleSource)
            materialReceivePage.clickVehicleTypeDropDown(data.vehicleType)
            materialReceivePage.clickSaveButton()
            cy.wait(2000)

            materialReceivePage.clickOrderButton()
            materialReceivePage.typeInSerachFieldForMR(purchaseOrderNumber)
            materialReceivePage.clickCheckBox(materialRecieveId)
            cy.wait(2000)
            materialReceivePage.clickReceiveSaveButton()
            cy.wait(8000)
            // materialReceivePage.clickSaveButton()
            PurchaseOrderData.forEach((data) => {
                data.purchaseOrder.forEach((purchaseData, index) => {
                    if(purchaseData.isBatchDetailsReq=="Yes"){
                        cy.get("div[data-bs-title='Add Batch Details']").click({force:true})
                        //cy.pause()
                        purchaseData.Batch_Details.forEach((batchData, batchIndex) => {

                            materialReceivePage.typeBatchName(batchIndex, batchData.batch_name);
                            // Handle other batch details here if need=
                            materialReceivePage.typeMfgDate(batchIndex, batchData.mfg_Date);
                            materialReceivePage.typeExpDate(batchIndex, batchData.exp_Date);
                            materialReceivePage.typeQty(batchIndex, batchData.quantity);
                            if (purchaseData.Batch_Details.length > 1) {
                                for (var i = batchIndex + 1; i < data.Batch_Details.length; i++) {
                                    materialReceivePage.clickAddBtachDetailsButton()
                                    cy.wait(2000)
                                }

                            }
                        });
                    }
                })
            })

            cy.get('.breadcrumb-item').each(function ($ele) {
                var temp1 = $ele.text()
                var temp2 = temp1.replace('Material Receive (Purchase) - ', '')
                var temp3 = temp2.split(' ')[0]
                purchaseReceiveNumber = temp3.replace('New', '').trimEnd()
                cy.log(purchaseReceiveNumber)
            })
        })

    })

    it("Material Receive - Change Status ", () => {
        materialReceivePage.visitMaterialRecievePage(materialReceiveUrl)
        manageMaterialReceivePage.typeInSearchColumn(purchaseReceiveNumber)
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

    it('Purchase Invoice - Create', function () {
        purchaseInvoice.visitPurchaseInvoiceUrl(purchaseInvoiceUrl)
        cy.wait(1000)
        purchaseInvoice.clickCreatePurchaseInvoiceButton()
        purchaseInvoice.clickselectVendorDropDown()
        PurchaseOrderData.forEach((data,index) => {
            purchaseInvoice.typeInSearchField(data.vendor)
            const randomNo = purchaseInvoice.getRandomTwoDigitNumber()
            purchaseInvoice.typeInpurchaseNumberField("INVOICENUM" + randomNo)
            purchaseInvoice.clickToggleButton()
            // purchaseInvoice.typeInTotalInvoiceValueField(purchaseInvoiceValue)
            purchaseInvoice.clickInvoiceSaveButton()
            cy.wait(2000)
      
        cy.wait(2000)
        purchaseInvoice.clickRecieveButton()
        cy.wait(2000)
        purchaseInvoice.typeInsearchrReciveTextField(purchaseReceiveNumber)
        purchaseInvoice.clickFirstCheckBox()
        purchaseInvoice.typeInrateInputTextField(index)
        purchaseInvoice.clickSaveButton()
        cy.wait(5000)
        purchaseInvoice.getPurchaseInvoiceNumberAlias();
        purchaseInvoice.getPurchaseInvoiceNumber().each(($ele) => {
            purchaseInvoiceNumber = $ele.text().split("New")[0].trim().replace("PInv - ", "");;
            cy.log(purchaseInvoiceNumber);
        });
    });
        // purchaseInvoice.clickSaveButton()
        // purchaseInvoice.verifyingMessage()
        cy.wait(2000)
        cy.url().then(urlString => {
            purchaseInvoiceId = urlString.split('=')[1];
            cy.log(purchaseInvoiceId);
        })
    })

    it("Purchase Invoice - Change Status", () => {

        console.log(purchaseInvoiceNumber)

        managePurchaseInvoice.visitManagePIPage(purchaseInvoiceUrl)
        cy.viewport(1200, 800);
        cy.scrollTo('top', { ensureScrollable: false })
        managePurchaseInvoice.numberSerachInputFieldPath()
        managePurchaseInvoice.typeInNumberSerachInputField().type(purchaseInvoiceNumber, { force: true }).type("{enter}", { force: true })

        cy.wait(2000)
        managePurchaseInvoice.clickOnChangeStatusButton()
        managePurchaseInvoice.clickOnChangeStatusDropDown()
        managePurchaseInvoice.typeInchangeStatusSearchTextInput("Final")
        managePurchaseInvoice.clickOnStatusSaveButton()
        cy.wait(2000)
        managePurchaseInvoice.clickOnChangeStatusButton()
        cy.wait(2000)
        managePurchaseInvoice.clickOnChangeStatusDropDown()
        cy.wait(2000)
        managePurchaseInvoice.typeInchangeStatusSearchTextInput("Approved")
        managePurchaseInvoice.clickOnStatusSaveButton()
        cy.wait(2000)
    })

    it("Make Payment", () => {
        makePymentPage.viistMakePaymnetPage(makePaymentUrl)
        cy.wait(2000)
        makePymentPage.clickAddMakePaymentButton()
        makePymentPage.clickVendorTypeDropDown()
        PurchaseOrderData.forEach((data)=>{
            makePymentPage.typeSearchField(data.vendor)
            makePymentPage.clickPaymentModeDropDown()
            makePymentPage.typeAmount()
        })
        cy.wait(2000)

            
        // });
        cy.get("nav[aria-label='breadcrumb'] ol").each(($ele) => {
            makePaymentNumber = $ele.text().split("New")[0].trim().replace("Payment Voucher -  ", "");;
            cy.log(makePaymentNumber);
      
          });
          cy.url().then(urlString => {
            makePaymentId = urlString.split('=')[1];
            cy.log(makePaymentId);
        })
          

       
       
    })
    it("Make Payment - Change Status",()=>{
        makePymentPage.viistMakePaymnetPage(makePaymentUrl)
        cy.wait(2000)
        manageMakePayment.typeInSearchColumn(makePaymentNumber)
        cy.wait(2000)
        manageMakePayment.clickStatusButton()
        cy.wait(2000)
        manageMakePayment.clickStatusDropDown()
        manageMakePayment.typeStatusField("Final")
        cy.wait(2000)
        manageMakePayment.clickSubmitButton()
       
        cy.wait(2000)
        manageMakePayment.clickStatusButton()
        cy.wait(2000)
        manageMakePayment.clickStatusDropDown()
        manageMakePayment.typeStatusField("Approved")
        cy.wait(2000)
        manageMakePayment.clickSubmitButton()
        cy.wait(2000)

      
    })
    it("Payment Tagging",()=>{
     makePymentPage.viistMakePaymnetPage(makePaymentUrl)
        cy.wait(2000)
        manageMakePayment.typeInSearchColumn(makePaymentNumber)
        cy.wait(2000)
        manageMakePayment.clickActionDropDown()
        manageMakePayment.clickPaymentTaggingOption()
        var purchaseInvoiceCheckboxXpath = 'input[id="to_base_id_' + purchaseInvoiceId + '_' + purchaseInvoiceDocTypeId + '"]'
        var makePaymentCheckboxXpath = 'input[id="from_base_id_' + makePaymentId + '_' + makePaymentDocTypeId + '"]'

        manageMakePayment.clickOnAutoTag()
        cy.get(purchaseInvoiceCheckboxXpath).first().check({ force: true })
    cy.wait(500)
    cy.get(makePaymentCheckboxXpath).first().check({ force: true })
    cy.wait(500)
    manageMakePayment.clickSaveButtonForPaymentTagging()
        cy.wait(2000)
        manageMakePayment.clickSaveButtonForPaymentTagging()
        cy.wait(2000)


      
    
    })
    // after(() => {
    //     // Make a request to the Express server to trigger email sending
    //     axios.post('http://localhost:3000/send-email')
    //         .then((response) => {
    //             console.log(response.data.message, response.data.result);
    //         })
    //         .catch((error) => {
    //             console.log('Error triggering email sending:', error.message);
    //         });
    // });

})