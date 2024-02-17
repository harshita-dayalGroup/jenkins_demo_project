Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
import { post } from 'axios';
import axios from 'axios';
import { sendEmail } from './Email/email';
import { SalesReturnOrderPage } from "../Pages/Sales/SalesReturnOrderPage250"
import salesReturnOrderData from "../TestData/Sales/salesreturnOrderData2.json"
import LoginPage from "../Pages/LoginPageNew"
import { LoginData } from "../TestData/LoginData"
import { ApplicationUrl } from "../TestData/LoginData"
import { ManageSalesReturn } from "../Pages/Sales/ManageSalesReturnPage"
import { MaterialReceiveSalesReturnPage } from "../Pages/Sales/MaterialReceiveSalesReturnPage"
import { ManageMaterialReceive } from "../Pages/Sales/ManageMaterialRecieveSalesReturn"


var salesReturnOrderNumber
var saleReturnId

var loginPage = new LoginPage()
var loginData = new LoginData()
var applicationurl = new ApplicationUrl()
const salesReturnOrderPage = new SalesReturnOrderPage()
const manageSalesReturnPage = new ManageSalesReturn()
const materialReceivePage = new MaterialReceiveSalesReturnPage()
const manageMaterialReceivePage = new ManageMaterialReceive()
let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'
let saleReturnOrderPageUrl = QAServerUrl + 'Sales/index.php/sales-return-order/index'
let materialReceiveSROUrl = QAServerUrl + 'Inventory/index.php/receive/sale-return-index'
describe("Sales Return Order ", () => {
    beforeEach('login', function () {
        cy.visit(QAServerUrl)
        cy.wait(500)
        loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
        cy.wait(2000)
    })
    let salesReturnOrderObject = salesReturnOrderData[0];
    let salesReturnKeys = Object.keys(salesReturnOrderObject);
    salesReturnKeys.forEach((key) => {
        let basicDetails = salesReturnOrderObject[key];

        if (basicDetails.Invoice_No != null) {

            it("Sales Return Order with invoice ", () => {
                salesReturnOrderPage.visitsalesReturnOrderUrl(saleReturnOrderPageUrl)
                cy.wait(2000)
                salesReturnOrderPage.clickAddSalesOrderButton()
                cy.wait(2000)
                salesReturnOrderPage.clickDateClear()
                salesReturnOrderPage.typeSalesReturnOrderDate(basicDetails.Order_Date)
                cy.wait(5000)
                // salesReturnOrderPage.clickDocumentSriesDropDown()
                cy.wait(5000)
                //  salesReturnOrderPage.typeDocumentSeries(basicDetails.Document_Series)  
                salesReturnOrderPage.clickCustomerTypeDropDown()
                salesReturnOrderPage.typeInSearchField(basicDetails.CustomerType)
                salesReturnOrderPage.clickCustomerDropDown()
                salesReturnOrderPage.typeInSearchField(basicDetails.Customer)
                cy.wait(2000)
                salesReturnOrderPage.clickSaveButton()
                cy.wait(5000)
                salesReturnOrderPage.clickReturnButton()
                cy.wait(2000)
                salesReturnOrderPage.clickAddIcon()
                salesReturnOrderPage.typeInSearchInvoiceField(basicDetails.Invoice_No)
                cy.wait(2000)
                // cy.get('.select2-results__option--highlighted').click({ force: true })
                cy.wait(2000)
                basicDetails.Product_Details.forEach((data1) => {
                    console.log(data1);
                    cy.get('tbody > tr').each(($row, i) => {
                        // Get the product name from the first column of the row
                        const productName = $row.find('td:first-child > span').text().trim();

                        console.log(productName);
                        console.log(data1.Pack_Name === productName)
                        if (data1.Pack_Name === productName) {
                            salesReturnOrderPage.typeInReturnNoOfPacksField(i, data1.Return_Quantity)
                            salesReturnOrderPage.selectOrganisation(i, data1.Received_Branch)

                        }
                    });
                })
                salesReturnOrderPage.clicksaveReturnOrderButton()
                cy.wait(20000)
                // salesReturnOrderPage.visitsalesReturnOrderUrl(saleReturnOrderPageUrl)
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
        }

        if (basicDetails.Invoice_No == null) {

            it("Sales Return Order with out invoice ", () => {
                salesReturnOrderPage.visitsalesReturnOrderUrl(saleReturnOrderPageUrl)
                cy.wait(2000)
                salesReturnOrderPage.clickAddSalesOrderButton()
                cy.wait(2000)
                salesReturnOrderPage.clickDateClear()
                salesReturnOrderPage.typeSalesReturnOrderDate(basicDetails.Order_Date)
                cy.wait(5000)
                // salesReturnOrderPage.clickDocumentSriesDropDown()
                cy.wait(5000)
                //  salesReturnOrderPage.typeDocumentSeries(basicDetails.Document_Series) 
                salesReturnOrderPage.clickCustomerTypeDropDown()
                salesReturnOrderPage.typeInSearchField(basicDetails.CustomerType)
                salesReturnOrderPage.clickCustomerDropDown()
                salesReturnOrderPage.typeInSearchField(basicDetails.Customer)
                cy.wait(2000)
                salesReturnOrderPage.clickSaveButton()
                cy.wait(2000)
                salesReturnOrderPage.clickReturnButton()
                cy.wait(2000)
                basicDetails.Product_Details.forEach((data, i) => {
                    salesReturnOrderPage.clickNotInvoiceKnownAddProductButton()
                    salesReturnOrderPage.clickProductDropDown(i)
                    cy.wait(2000)
                    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(data.Product_Name).type("{enter}", { force: true })
                    cy.wait(2000)
                    salesReturnOrderPage.clickProductPackDropDown(i)
                    cy.wait(2000)
                    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(data.Pack_Name).type("{enter}", { force: true })
                    cy.wait(2000)
                    salesReturnOrderPage.typeReturnQty(i, data.Return_Quantity)
                    salesReturnOrderPage.clickReceiveBranch(i)
                    cy.wait(2000)
                    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type(data.Received_Branch).type("{enter}", { force: true })
                })
                cy.wait(2000)
                salesReturnOrderPage.clickSaveInvoiceNotKnown()
                cy.wait(2000)
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

        }

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
        var materialReceiveLength
        var materialProduct
        var returnOrderDetails
        var materialReceiveNumber
        var materialReceiveId
        if (basicDetails.IsMaterialReceive === "Yes") {

            it("Material Recieve - Sales Return Order", () => {
                materialReceivePage.visitMaterialRecievePage(materialReceiveSROUrl)
                cy.wait(2000)
                cy.scrollTo('top', { ensureScrollable: false })
                materialReceivePage.clickAddMaterialReceiveButton()
                cy.wait(2000)
                materialReceivePage.clickPartyDropDown()
                materialReceivePage.typeInSerachDropDown(basicDetails.Customer)
                cy.wait(2000)
                cy.pause()
                materialReceivePage.selectVehicleSource(basicDetails.Vehicle_Source)
                materialReceivePage.clickVehicleTypeDropDown(basicDetails.Vehicle_Type)
                materialReceivePage.clickSaveButton()

                cy.wait(5000)

                materialReceivePage.clickOrderButton()
                cy.wait(5000)
                materialReceivePage.typeInSerachFieldForMR(salesReturnOrderNumber)
                materialReceivePage.clickCheckBox(saleReturnId)

                cy.wait(2000)

                cy.wait(2000)


                materialReceivePage.clickSaveButton()
                cy.wait(6000)

                basicDetails.Product_Details.forEach((productData, index) => {
                    if (productData.Batch_Details.length != 0) {
                         materialReceivePage.clickAddBtachDetailsButton()
                        
                         productData.Batch_Details.forEach((batchData, batchIndex) => {

                            materialReceivePage.typeBatchName(batchIndex, batchData.Batch_Name);
                            // Handle other batch details here if neededp=
                            materialReceivePage.typeMfgDate(batchIndex, batchData.Mfg_Date);
                            materialReceivePage.typeExpDate(batchIndex, batchData.Expiry_Date);
                            materialReceivePage.typeQty(batchIndex, batchData.Quantity);
                            if (productData.Batch_Details.length > 1) {
                                for (var i = batchIndex + 1; i < productData.Batch_Details.length; i++) {
                                    materialReceivePage.clickAddBtachDetailsButton()
                                    cy.wait(2000)
                                }

                            }
                        });


                    }

                })
                cy.wait(2000)
                materialReceivePage.clicSavebuttonforMR()
                cy.wait(2000)

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

        }




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