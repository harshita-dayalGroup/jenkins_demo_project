export class ImportCustomersPage {
    visitImportCustomersPage(url) {
        cy.visit(url)
    }
    get organisationDropDown() {
        return cy.get('#select2-party-int_organisation_id-container')
    }
    get searchFieldPath() {
        return cy.get('.select2-search__field')
    }
    get partyTypePath() {
        return cy.get('#select2-party-int_customer_type-container')
    }
    get chooseFileButtonPath() {
        return cy.get("input[name='Party[file]'][type='file']")

    }
    get summaryDataTablePath() {
        return cy.get('#tableId')
    }
    get importButtonPath() {
        return cy.get('.col-sm-12 > .btn-sm')
    }

    get exportButtonPath() {
        return cy.get('#exportBtn')
    }
    clickOrganisationDropDown() {
        this.organisationDropDown.click({ force: true })
    }
    typeInSearchField() {
        this.searchFieldPath.type("Dayal").type("{enter}", { force: true })
    }
    clickPartyTypeDropDown() {
        this.partyTypePath.click({ force: true })
    }
    typeInSearchFieldforParty() {
        this.searchFieldPath.type("Customer", { force: true }).type("{enter}", { force: true })
    }
    clickChooseFileButton() {
        cy.fixture("ManageParty_Customers.csv").then((fileContent) => {
            this.chooseFileButtonPath.attachFile(
                {
                    fileContent: fileContent,
                    fileName: "ManageParty_Customers",
                    mimeType: "file/csv",
                },
                { subjectType: "input" }
            );
        });


    }
    clickImportButton() {
        this.importButtonPath.click({ force: true })
    }
    verifySummaryTable() {
        this.summaryDataTablePath.should("be.visible")
    }
    clickExportButton() {
        this.exportButtonPath.click({ force: true })
    }



}