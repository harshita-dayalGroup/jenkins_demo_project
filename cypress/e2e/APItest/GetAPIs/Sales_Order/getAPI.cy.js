/// <reference types = "Cypress"/>
import {APIdata} from "../../../TestData/APIparam"
var data = new APIdata()

let BaseURL = 'http://'+data.Server+'/'+data.Clone+'/';
describe('Sales Order Get API',function(){

    it('GET - Application',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "clientId": data.ClientId,
                    "blIncludeParent": 1,
                    "model": "Application",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": "",
                    "appName": "eSATHI",
                    "appNameForService": "COMMON_API",
                    "appVersion": "22.52.456",
                    "access-token": data.AccessToken,
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "requestType": "GET"
                        }
                    }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    } )
    it('GET - Branch',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "Branch",
                    "actionModel": "Default",
                    "intEmpId": 
                    data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "expand": "tbl_address#int_address_id,tbl_address#int_address_id.tbl_city#int_city_id,tbl_address#int_address_id.tbl_city#int_tehsil_city_id,tbl_branch_regn#int_branch_id",
                    "blShowUserBranch": true
                        }
                    }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - Organisation',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "Organisation",
                    "actionModel": "Default",
                    "intEmpId":data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "expand": "tbl_address#int_address_id,tbl_address#int_address_id.tbl_city#int_city_id,tbl_address#int_address_id.tbl_city#int_tehsil_city_id,tbl_branch_regn#int_branch_id",
                    "blShowUserBranch": true
                        }
                    }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - OrganisationAttachment',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "OrganisationAttachment",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "eSATHI",
                    "appNameForService": "COMMON_API",
                    "appVersion": "22.52.456",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0
                        }
                    }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - EmployeeAttachment',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/hcms.php',
            body :{              
                params: {
                    "model": "EmployeeAttachment",
                    "actionModel": "EmployeeAttachmentImage",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "eSATHI",
                    "appNameForService": "hcms_app",
                    "appVersion": "22.52.456",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - Configuration',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "Configuration",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it.only('GET - UserPermission',function(){
        var pageCount = 1;
        var PageLeft
        class AllPage{
            NextPage(){
                cy.request({
                    Method : 'GET',
                    url : BaseURL+'api/common.php',
                    body :{              
                        params: {
                            "model": "UserPermission",
                            "actionModel": "Default",
                            "intEmpId": data.intEmpId,
                            "page": pageCount,
                            "last_sync_date": data.LSD,
                            "appName": "order_app",
                            "appNameForService": "order_app",
                            "appVersion": "22.52.172",
                            "access-token": data.AccessToken,
                            "clientId": data.ClientId,
                            "action": "",
                            "requestType": "GET",
                            "primaryKey": "",
                            "intCustomerUserId": 1001,
                            "intCustomerUserDeviceId": 0,
                            "intApplicationId": 0,
                            "txtApplicationIds": "311,600,721,111"
                                }
                            }
                }).then((res)=>{
                        expect(res.status).to.eq(200)
                        expect(res.body.response[0].int_delete_type).to.eq(0)
                        //expect(res.body.status).to.eq('success')
                         PageLeft = res.body.page
                            cy.log(PageLeft)
                            cy.log(res.body.total_records)
                            cy.log(res.body.message)
                            if(PageLeft!=='No pages left.'){
                                next.NextPage()   
                            } else{
                               expect(res.body.status).to.eq('success')
                            }
                    // let numberOfKey = Object.keys(res.body.response[0]).toString()
                    // cy.log(numberOfKey) 
                    pageCount= pageCount+1           
                })
            } 
        }
        var next = new AllPage()
    cy.api({
        Method : 'GET',
        url : BaseURL+'api/common.php',
        body :{              
            params: {
                "model": "UserPermission",
                "actionModel": "Default",
                "intEmpId": data.intEmpId,
                "page": pageCount,
                "last_sync_date": data.LSD,
                "appName": "order_app",
                "appNameForService": "order_app",
                "appVersion": "22.52.172",
                "access-token": data.AccessToken,
                "clientId": data.ClientId,
                "action": "",
                "requestType": "GET",
                "primaryKey": "",
                "intCustomerUserId": 1001,
                "intCustomerUserDeviceId": 0,
                "intApplicationId": 0,
                "txtApplicationIds": "311,600,721,111"
                    }
                }
    }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.response[0].int_delete_type).to.eq(0)
            //expect(res.body.status).to.eq('success')
             PageLeft = res.body.page
                cy.log(PageLeft)
                cy.log('Total records: '+res.body.total_records)
                cy.log(res.body.message)
                if(PageLeft!=='No pages left.'){
                    next.NextPage()   
                } else{
                   expect(res.body.status).to.eq('success')
                }
        // let numberOfKey = Object.keys(res.body.response[0]).toString()
        // cy.log(numberOfKey)            
    })
    


    })
    it('GET - Product',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/scms.php',
            body :{              
                params: {
                    "model": "Product",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "eSATHI",
                    "appVersion": "22.44.169",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 694,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "expand": "tbl_product_pack#int_product_id.tbl_product_pack_bom#int_product_pack_id, tbl_product_pack#int_product_id.tbl_product_pack_branch#int_product_pack_id, tbl_product_attachment#int_product_id, tbl_product_pack#int_product_id.tbl_product_attachment#int_product_pack_id,tbl_product_organisation#int_product_id, tbl_product_party#int_product_id, tbl_product_sales_applicability#int_product_id"
                }
            }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].ysn_to_sale).to.eq(1)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
                    
                // let numberOfKey = Object.keys(res.body.response[0]).toString()
                // cy.log(numberOfKey)
            
        })

    })
    it('GET - Party',function(){

        cy.request({
            Method : 'GET',
            url : BaseURL+'api/scms.php',
            body :{
                
                params: {
                    "model": "Party",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "20.51.96",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 2,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "expand": "tbl_address#int_address_id, tbl_address#int_billing_address_id, tbl_address#int_shipping_address_id, tbl_party_regn#int_party_id, tbl_party_organisation#int_party_id, tbl_party_branch#int_party_id, tbl_party_branch_tax_category#int_party_id, tbl_party_employee#int_party_id"
                    
                }
            }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].txt_name).to.eq('Cash Sale')
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
                // let numberOfKey = Object.keys(res.body.response[0]).toString()
                // cy.log(numberOfKey)
            
        })
    })
    it('GET - DocumentStatus',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "DocumentStatus",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - District',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "District",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - City',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "City",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - Employee',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/hcms.php',
            body :{              
                params: {
                    "model": "Employee",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - State',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "State",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - Area',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "Area",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - DocumentSeries',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "DocumentSeries",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - Type',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "Type",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - Unit',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "Unit",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - UnitConversion',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "UnitConversion",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - Block',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "Block",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - Country',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "Country",
                    "actionModel": "Default",
                    "intEmpId": data.ClientId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "intDocumentType": 201
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - Organisation',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "Organisation",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "expand": "tbl_address#int_address_id,tbl_address#int_address_id.tbl_city#int_city_id,tbl_address#int_address_id.tbl_city#int_tehsil_city_id,tbl_branch_regn#int_branch_id",
                    "blShowUserBranch": true
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - Branch',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "Branch",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "expand": "tbl_address#int_address_id,tbl_address#int_address_id.tbl_city#int_city_id,tbl_address#int_address_id.tbl_city#int_tehsil_city_id,tbl_branch_regn#int_branch_id",
                    "blShowUserBranch": true
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - OrganisationRegn',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "OrganisationRegn",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - DocumentHead',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "DocumentHead",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "expand": "tbl_document_head_value#int_document_head_id"
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - AccountGroup',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/account.php',
            body :{              
                params: {
                    "model": "AccountGroup",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "22.52.172",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0
                        }
                    }
        }).then((res)=>{
            cy.log(res.body.message)
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log('Total Records: '+res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - Order',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/scms.php',
            body :{              
                params: {
                    "model": "Order",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "20.51.96",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 2,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "expand": "tbl_address#int_address_id, tbl_address#int_billing_address_id, tbl_address#int_shipping_address_id, tbl_party_regn#int_party_id, tbl_party_organisation#int_party_id, tbl_party_branch#int_party_id, tbl_party_branch_tax_category#int_party_id, tbl_party_employee#int_party_id"
                    
                }
            }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_document_type).to.eq(201)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
                // let numberOfKey = Object.keys(res.body.response[0]).toString()
                // cy.log(numberOfKey)
            
        })

    })
    it('GET - Scheme',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/scms.php',
            body :{              
                params: {
                    "model": "Scheme",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "order_app",
                    "appVersion": "21.51.125",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1010,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0
                        }
                    }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - PartyGroupMember',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "PartyGroupMember",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "eSATHI",
                    "appVersion": "22.44.169",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 694,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0
                        }
                    }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - ProductSetMember',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "ProductSetMember",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "eSATHI",
                    "appVersion": "22.44.169",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 1001,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0
                        }
                    }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - ProductRateTemplate',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "ProductRateTemplate",
                    "actionModel": "ProductRateTemplate",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "eSATHI",
                    "appVersion": "22.44.169",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 694,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "int_rate_type": 1,
                    "expand": "tbl_product_rate_template_party#int_product_rate_template_id" 
                        }
                }
        }).then((res)=>{
            
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.message)
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
                // let numberOfKey = Object.keys(res.body.response[0]).toString()
                // cy.log(numberOfKey)
        })

    })
    it('GET - ProductRateTemplateProduct',function(){
        cy.request({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "ProductRateTemplateProduct",
                    "actionModel": "ProductRateTemplateProduct",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "eSATHI",
                    "appVersion": "22.44.169",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 694,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0,
                    "int_rate_type": 1
                        }
                    }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
            
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
    it('GET - TaxCategory',function(){
        cy.api({
            Method : 'GET',
            url : BaseURL+'api/common.php',
            body :{              
                params: {
                    "model": "TaxCategory",
                    "actionModel": "Default",
                    "intEmpId": data.intEmpId,
                    "page": "",
                    "last_sync_date": data.LSD,
                    "appName": "order_app",
                    "appNameForService": "eSATHI",
                    "appVersion": "22.44.169",
                    "access-token": data.AccessToken,
                    "clientId": data.ClientId,
                    "action": "",
                    "requestType": "GET",
                    "primaryKey": "",
                    "intCustomerUserId": 694,
                    "intCustomerUserDeviceId": 0,
                    "intApplicationId": 0
                        }
                    }
        }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.response[0].int_delete_type).to.eq(0)
                expect(res.body.status).to.eq('success')
                    cy.log(res.body.status)
                    cy.log(res.body.total_records)
            // let numberOfKey = Object.keys(res.body.response[0]).toString()
            // cy.log(numberOfKey)            
        })
    })
})