export class CustomerData{
    customerFirmName = "ASUSLap"
    customerIdentifier = "ASUSLAP"
    shortName = "ASUSLAP"
    contactPersonName = "Amrita"
    email = "asuslap@gmail.com"
    mobileNo = "90755476239"
    alternateMobileNo = "9022990000"
    customerType = "End Customer"
    customerSubType ="None"
    vendorType = "Vendor"
    streetaddress = "Street 1"
    branchName = "Dayal Fertilizers Office(Meerut)"
   fetchingCurrentDate()
{
    const currentDate = new Date();

    const dateString = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getFullYear()}`;
      return dateString


}
}