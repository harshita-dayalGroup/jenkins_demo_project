export class ModifyPurchaseInvoicePage{
    get modifyDetailsPencilIconPath(){
       return cy.get(':nth-child(1) > .position-relative > .view')
    }
    get modifyDetailsTextPath(){
        return  cy.get("#modal-label > strong")
    }
    get closePopupFormIconPath(){
        return cy.get("div[role='dialog'] div div div a[aria-label='Close']")
    }
    get modifyRemarksPencilIconPath(){
        return cy.get('[style="position:relative;"] > .position-relative > .view')
    }
    get remarksTextAreaPath(){
        return cy.get('#purchaseinvoice-txt_remarks')
    }
    get remarksSaveButtonPath(){
        return cy.get('.modal-footer > .btn')
    }
    
    clickModifyDetailsPencilIcon(){
        this.modifyDetailsPencilIconPath.click()
    }
    verifyingModifyDetailsText(){
        this.modifyDetailsTextPath.should('have.text','Modify Basic Details')
    }
    clickClosePopupFormIcon(){
        this.closePopupFormIconPath.click({force:true})
    }
    clickModifyRemarksPencilIcon(){
        this.modifyRemarksPencilIconPath.click()
    }
    typeInremarksTextArea(){
        this.remarksTextAreaPath.type("Good Products")
    }
    clickremarksSaveButton(){
        this.remarksSaveButtonPath.click({force:true})
    }

}