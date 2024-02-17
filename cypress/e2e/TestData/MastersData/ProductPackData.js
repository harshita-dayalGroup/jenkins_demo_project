export class CreateProductpackData{
    productpackName = "Mother Dairy Milk Pack(10l)"
    productpackShortName = "MotherDairy"
    productName = "Cows Fresh Milk"
    productpackRateUnit = "Quintal"
    productpackContentUnit = "Kilogram"
    branchName = "HE - Works (Head office)"
    chossingdate(){
        const currentDate = new Date();
    
        const dateString = `${currentDate.getDate().toString().padStart(2, '0')}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}- ${currentDate.getFullYear()}`;
          return dateString
       }
}