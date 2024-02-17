Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
import { post } from 'axios';
import axios from 'axios';
import { sendEmail } from './Email/email';
import { LoginData } from '../TestData/LoginData';
import { ApplicationUrl } from '../TestData/LoginData';
import LoginPage from '../Pages/LoginPageNew';
import { StockTransferRequestPage } from '../Pages/Inventory/CreateStockTransferRequestPage';
import { ManageStockTransferRequestPage } from '../Pages/Inventory/ManageStockTransferRequestPage';
import { Dispatch } from '../Pages/Sales/DispatchPage';
import { ManageDispatchPage } from '../Pages/Sales/ManageDispatchPage';
import { StockTransferAdvice } from '../Pages/Inventory/StockTransferAdvicePage';
import { ManageSTAPage } from '../Pages/Inventory/ManageSTAPage';
import { StockRecievePage } from '../Pages/Inventory/StockRecievePage';
import strData from '../TestData/InventoryData/STRData.json'
import { MaterialInPage } from '../Pages/Inventory/MaterialInPage';
import materialInData from '../TestData/InventoryData/MaterialInData.json'
import { BulkMaterialInPage } from '../Pages/Inventory/BulkMaterialInPage';
import bulkMaterialInData from '../TestData/InventoryData/BulkMaterialInData.json'
const materialInPage = new MaterialInPage();
const bulkMaterialInPage = new BulkMaterialInPage();
const loginData = new LoginData();
const loginPage = new LoginPage();
const applicationurl = new ApplicationUrl();
// const strData = new STRData();
const strPage = new StockTransferRequestPage();
const dispatch = new Dispatch();
const manageDispatch = new ManageDispatchPage();
const manageSTA = new ManageSTAPage();
const stockRecieve = new StockRecievePage();

let isIconVisible;
var i;
var STR_Number
var strId
var STA_Number
var branchNameTransfer
var dispatchChallanNo
let domain = applicationurl.domain
let projectClone = applicationurl.projectClone
let QAServerUrl = domain + projectClone + '/'
let stockTransferRequestUrl = QAServerUrl + 'Inventory/index.php/Saarthi/indent-order/index'
let dispatchPageUrl = QAServerUrl + 'Inventory/index.php/delivery/index'
let stockTransferAdviceUrl = QAServerUrl + "Sales/index.php/invoice/stock-transfer-advice"
let stockRecieveUrl = QAServerUrl + "Inventory/index.php/stock-receive/index"
let materialInPageUrl = QAServerUrl+"Inventory/index.php/stock-tx/index"

    const currentDate = new Date();

    const dateString = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;
    



const manageSTR = new ManageStockTransferRequestPage()
const stockTransferAdvicePage = new StockTransferAdvice()
strData.forEach(data => {
    const branch = data.destinationBranch; // Get the destination branch
    const strType = data.strType;

    describe("Stock Transfer Request Regression Suite", () => {
        beforeEach("Test", () => {

            loginPage.visitLoginPage(QAServerUrl);
            cy.wait(1000)
            loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
            cy.wait(1000)
        });
        it("Create STR ", () => {
            strPage.visitStockTransferRequestPageUrl(stockTransferRequestUrl)
            cy.wait(2000)
            strPage.clickaddSTRButton()
            cy.wait(2000)
            strPage.clickDocumentSeriesField()
            strPage.typeInSearchFeild(data.documentSeries)
            strPage.clickTransferFromDropDown()
            strPage.typeTransferFromBranchInSearchField(data.transferFromBranch)

            strPage.clickstrTypeDropDown(strType)
            strPage.clicktransferToDropDown()
            strPage.typeTransfertoBranchInSearchField(branch)
            strPage.clickSaveButton()
            cy.wait(1000)
            strPage.clickAddProductsIcon()
            data.products.forEach((product, productIndex) => {
                
                console.log("Product Name: " + product.name);
                console.log(productIndex)
                // Select the product for the current iteration
                strPage.productDropDownPath(productIndex);

                strPage.typeProductInSearchField(product.name);

                // Select the corresponding product pack for the current product
                const productPack = data.productPackName[productIndex];
                console.log(productPack)
                cy.wait(2000)
                strPage.productPackDropDownPath(productIndex);
                cy.wait(1000)
                strPage.typeProductPackInSearchField(productPack.name);

                // Set the number of packs and quantity for the current product and product pack
                strPage.typeNumberOfPacks(productIndex, data.numberOfPacks);
                strPage.clickQuantityField(productIndex);
                cy.wait(1000);
                if (productIndex < data.products.length - 1) {
                    strPage.clickplusIcon();
                }

            });
            cy.wait(2000)
            strPage.clickAdditionalSaveButton()
            cy.wait(5000)
            strPage.getSTRNumberAlias()
            strPage.getSTRNumber().each(($ele) => {
                STR_Number = $ele.text().split("New")[0].trim().replace("Stock Transfer Request - ", "");
                cy.log(STR_Number);

            });
            cy.url().then(urlString => {
                strId = urlString.split('=')[1];
                console.log(strId);
            })


        })
        it("STR - Status Change ", () => {


            cy.log(branchNameTransfer)
            console.log(STR_Number)
            manageSTR.visitManageSTRPage(stockTransferRequestUrl)
            cy.viewport(1200, 800);
            // Scroll to the top of the page by clicking the body or html element
            cy.get('body').scrollTo('top', { ensureScrollable: false });
            manageSTR.typeSTRnumber(STR_Number)
            cy.wait(2000)
            manageSTR.clickStatusChangeButton()
            cy.wait(2000)
            manageSTR.clickStatusChangeDropdown()
            manageSTR.typeInSearchField("Final")
            manageSTR.clickStatusSaveButton()
            cy.wait(2000)
            manageSTR.clickStatusChangeButton()
            cy.wait(2000)
            manageSTR.clickStatusChangeDropdown()
            manageSTR.typeInSearchField("Approved")
            cy.wait(1000)
            manageSTR.clickStatusSaveButton()
            cy.wait(1000)
            manageSTR.verifyMessage()
            cy.log("Yes")
        }
        )
        it("Create - Dispatch Challan", () => {

            dispatch.visitDispatchUrl(dispatchPageUrl)
            cy.wait(1000)
            dispatch.clickDispathButton()
            cy.wait(1000)
            dispatch.clickVehicleSourceDropDown("Self")
            dispatch.clickVehicleTypeDropDown("Truck")
            cy.wait(2000)
            dispatch.clickOrderButton()
            cy.wait(2000)
            dispatch.clickarraowDropDown()
            cy.wait(2000)
            cy.wait(2000)
            dispatch.typeInSTRSearchBox(STR_Number)
           cy.wait(2000)
        
            dispatch.clickcheckBoxForSTR(strId)
            cy.wait(10000)

            for (var j = 1; j <= data.products.length; j++) {
                dispatch.selectDispatchBranch(j,data.transferFromBranch)
                dispatch.selectDispatchWareHouse(j,data.transferFromBranch)
            }

            dispatch.clickDispatchSaveButton()
            cy.wait(5000)


            dispatch.iconPath()
                .should(($icon) => {
                    // Check for existence without throwing an error
                    isIconVisible = $icon.length > 0;
                })
                .then(() => {
                    // Continue with your test logic here based on the value of isIconVisible
                    dispatch.getDispatchNumberAlias();
                    dispatch.getDispatchNumber().invoke('text').then((text) => {
                        dispatchChallanNo = text;
                        cy.log(dispatchChallanNo);
                        cy.log(isIconVisible)
                    });
                    if (isIconVisible) {
                        cy.log("true")
                    }
                    else {
                        cy.log("false")
                    }
                });

        });





        it("Dispatch Challan - Change Status", () => {
            cy.log(isIconVisible)
            manageDispatch.visitManageDispatchPageUrl(dispatchPageUrl)
            cy.viewport(1200, 800);
            // Scroll to the top of the page by clicking the body or html element
            cy.get('body').scrollTo('top', { ensureScrollable: false });
            manageDispatch.typeInChallanNumberColumnSearchField(dispatchChallanNo)
            cy.wait(2000)
            manageDispatch.typeInSearchColumn("Stock Transfer")
            cy.wait(2000)
            manageDispatch.clickStatusChangeButton()
            manageDispatch.clickStatusChangeDropDown()
            manageDispatch.typeInSearchField("Final")
            manageDispatch.clickStatusSaveButton()
            cy.wait(2000)
            manageDispatch.clickStatusChangeButton()
            manageDispatch.clickStatusChangeDropDown()
            manageDispatch.typeInSearchField("Approved")
            cy.wait(2000)
            manageDispatch.clickStatusSaveButton()
            cy.wait(2000)
        })




        it("Stock Transfer Advice", () => {
            if (isIconVisible) {
                stockTransferAdvicePage.visitStockTransferPage(stockTransferAdviceUrl)
                stockTransferAdvicePage.clickAddSTAButton()
                stockTransferAdvicePage.typeSTAInSearchField(dispatchChallanNo)
                stockTransferAdvicePage.clickcheckBoxOfSTA()
                for (var i = 1; i <= data.products.length; i++) {
                    stockTransferAdvicePage.typeInRateInputFied(i)
                }

                stockTransferAdvicePage.clickApplyDiscountButton()
                stockTransferAdvicePage.clickSaveButton()
                stockTransferAdvicePage.getSTANumberAlias()

                stockTransferAdvicePage.getSTANumber().invoke('text').then((text) => {

                    STA_Number = text;
                    cy.log(STA_Number)

                });

            }
            else {
                return;
            }


        })


        it("Stock Transfer Advice - Change Status", () => {
            if (isIconVisible) {
                manageSTA.visitManageSTAPage(stockTransferAdviceUrl)
                cy.viewport(1200, 800);
                // Scroll to the top of the page by clicking the body or html element
                cy.get('body').scrollTo('top', { ensureScrollable: false });
                manageSTA.typeSTANumber(STA_Number)
                cy.wait(2000)
                manageSTA.clickStatusChangeButton()
                cy.wait(2000)
                manageSTA.clickStatusChangeDropDown()
                manageSTA.typeInSearchField("Final")
                cy.wait(2000)
                manageSTA.clickStatusSaveButtonPath()
                cy.wait(2000)
                manageSTA.clickStatusChangeButton()
                manageSTA.clickStatusChangeDropDown()
                manageSTA.typeInSearchField("Approved")
                cy.wait(2000)
                manageSTA.clickStatusSaveButtonPath()
                cy.wait(2000)
            }
            else {
                return;
            }


        }
        )
        it("Create Stock Recieve", () => {
            cy.log(dispatchChallanNo)
            stockRecieve.visitStockRecievePage(stockRecieveUrl)
            cy.wait(1000)
            stockRecieve.clickMainBranchDropDown()
            stockRecieve.clickBranchDropDown()
            cy.wait(2000)
            cy.get('li[role=option]').each(function ($ele) {
                if ($ele.text() === data.destinationBranch) {
                    cy.wrap($ele).click()
                }
                else {
                    cy.log('not found')
                }
            })

            cy.wait(5000)
            cy.viewport(1400, 800);
            // Scroll to the top of the page by clicking the body or html element
            cy.get('body').scrollTo('top', { ensureScrollable: false });
          
            stockRecieve.verifyMarksAsRecieveButton()
        })
        it("Changing branch", () => {
            stockRecieve.visitStockRecievePage(stockRecieveUrl)
            cy.wait(1000)
            stockRecieve.clickMainBranchDropDown()
            stockRecieve.clickBranchDropDown()
            cy.wait(2000)
            cy.get('li[role=option]').each(function ($ele) {
                if ($ele.text() === data.transferFromBranch) {
                    cy.wrap($ele).click()
                }
                else {
                    cy.log('not found')
                }
            })
            cy.wait(5000)
        })
    })
   
})
describe("Material In Regression Suite",()=>{
    beforeEach("Login", () => {

        loginPage.visitLoginPage(QAServerUrl);
        cy.wait(1000)
        loginPage.loginWeb(loginData.username, loginData.password, loginData.orgcode)
        cy.wait(1000)
    });
     it("Manage Material In",()=>{
        materialInPage.visitMaterialInPage(materialInPageUrl)
        cy.wait(2000)
        materialInPage.clickCreateMaterialInButton()
        materialInPage.clickProductPackDropDown()
        materialInPage.typeProductPackName(materialInData.productName)
        materialInPage.typeNumberOfPacks(materialInData.numberOfPacks)
        materialInPage.typeInRateField(materialInData.rate)
        materialInPage.clickSaveButton()
        cy.scrollTo('top', { ensureScrollable: false })
        cy.wait(2000)
        materialInPage.typeDateInSearchField(dateString)
        cy.wait(2000)
        materialInPage.clickFirstStatusChangeButton()
        materialInPage.clickStatusDropDown()
        cy.wait(2000)
        materialInPage.typeSearchField("final")
        materialInPage.clickStatusSaveButton()
        cy.wait(5000)
        materialInPage.clickFirstStatusChangeButton()
        materialInPage.clickStatusDropDown()
        cy.wait(2000)
        materialInPage.typeSearchField("Approved")
        materialInPage.clickStatusSaveButton()
     })
     it("Bulk Entry Material In",()=>{
        materialInPage.visitMaterialInPage(materialInPageUrl)
        bulkMaterialInPage.clickBulkEntryButton(projectClone)
        bulkMaterialInPage.clickSeriesDropDown()
        bulkMaterialInPage.typeSearchField(bulkMaterialInData.documentSeries)
        for(var i =0 ;i< bulkMaterialInData.products.length;i++){
            bulkMaterialInPage.dropDownOfProduct(i+1);
            
            console.log(i)
           
                console.log(i)
               
                cy.get('.select2-search__field').type(bulkMaterialInData.products[i].name,{force:true}).type("{enter}",{force:true})
                cy.wait(2000)
                cy.get(`#int_pack_count-${i+1}`).type(bulkMaterialInData.products[i].noOfPacks,{force: true}).type("{enter}",{force:true})
                cy.wait(2000)


        }
        for(var i =0;i<bulkMaterialInData.products.length;i++){
            cy.get(`#int_stock_tx_detail_id_checkbox-${i+1}`).click({force:true})
        }
        bulkMaterialInPage.clickFinalButton()
        bulkMaterialInPage.clickApproveButton()


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
