export class ProductData{
    productName = "Borodurt(48kg)"
    productShortName = "Borodurt(48kg)"
    productType = "Products (Finished)"
    masterUnit = "Quintal"
    organisation = "Harshita Enterprises (HE)"
    country="India"
    state ="Uttar Pradesh"
    taxation ="Good"
    taxCategory="Registered"
    tax = "Central Goods"
    rate ="40"
    law="Law"
    lawNo = "123"
   chossingdate(){
    const currentDate = new Date();

    const dateString = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}- ${currentDate.getFullYear()}`;
      return dateString
   }
} 