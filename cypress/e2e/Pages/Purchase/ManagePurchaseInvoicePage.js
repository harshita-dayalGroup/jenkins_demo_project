 export class ManagePurchaseInvoiceNumber{
    visitManagePIPage(purchaseInvoiceServer)
   {
        cy.visit(purchaseInvoiceServer)

    }
     numberSerachInputFieldPath(){
   return   cy.get("input[name='Search[txt_formatted_number]']").as("numberSearchInputFieldPath")
    }
    get changeStatusButtonPath(){
        return cy.get("body > div:nth-child(2) > section:nth-child(8) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(3) tr td:nth-child(11) a")
    }
    get changeStatusDropDownPath(){
        return cy.get("div[role='dialog'] div div div div form div div div div div span span[role='textbox']")
    }
    get changeStatusSearchTextInputPath(){
        return cy.get("body span span[dir='ltr'] span input[role='searchbox']")
    }
    get statusSaveButtonPath(){
        return cy.get("div[role='dialog'] div div div div form div button[type='submit']")
    }
    typeInNumberSerachInputField(){
        return cy.get("@numberSearchInputFieldPath")
    }
    clickOnChangeStatusButton(){
        this.changeStatusButtonPath.click({force:true});
    }
    clickOnChangeStatusDropDown(){
        this.changeStatusDropDownPath.click({force:true})
    }
    typeInchangeStatusSearchTextInput(data){
        this.changeStatusSearchTextInputPath.type(data).type("{enter}",{force:true})
    }
    clickOnStatusSaveButton(){
        this.statusSaveButtonPath.click({force:true})
    }
}