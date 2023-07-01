$(document).ready( () => {

    let items = JSON.parse(localStorage.getItem('items') || "[]")

    const qtyReg = /^\d+$/;



    const drinksList = [];
        drinksList.push({"ID": "drink1", "Description": "Double Latte Combo", "Price": 7.99});
        drinksList.push({"ID": "drink2", "Description": "Strawberry Slush", "Price": 4.99});
        drinksList.push({"ID": "drink3", "Description": "Specialty Tea", "Price": 3.99});
        drinksList.push({"ID": "drink4", "Description": "Cappuccino", "Price": 5.99});
        drinksList.push({"ID": "drink5", "Description": "Lemonade", "Price": 2.99});
        drinksList.push({"ID": "drink6", "Description": "Boba Tea", "Price": 8.99});
        drinksList.push({"ID": "drink7", "Description": "Horchata", "Price": 4.99});
        drinksList.push({"ID": "drink8", "Description": "Strong Blend", "Price": 4.99});
        drinksList.push({"ID": "drink9", "Description": "Iced Tea", "Price": 2.99});
        drinksList.push({"ID": "drink10", "Description": "Water", "Price": 99.99});

    const findDrink = (drinkID) => {
    let index = -1;
    for (var i = 0; i < drinksList.length; i++) {
    if (drinksList[i].ID == drinkID) {
    index = i;
    break;
    }
    }
    return index;
    }

        


    let buttons = $(".add");

    console.log(buttons); 


    for (const button of buttons) {
        
        button.addEventListener("click", () => {
            if (button.id !== undefined && button.id != "") {
            let index = findDrink(button.id);
            if (index != -1) {
            let selectedDrink = drinksList[index];


            let qtyIdField = "#" + button.id + "Qty"; 
            var drinkQtyValue=$(qtyIdField).val();

            if (drinkQtyValue == "")
            {drinkQtyValue = 1;}
                
            if ((!qtyReg.test(drinkQtyValue)))
                {
                    alert("Invalid drink quantity!");
                } 

               
            else {


             items.push({"ID": selectedDrink.ID, "Description": selectedDrink.Description, "Price": selectedDrink.Price, "Qty": drinkQtyValue})
            
                
                localStorage.setItem("items", JSON.stringify(items));
                
                items = (JSON.parse(localStorage.getItem("items")));
                
                let i = 0; 
                for (const item of items) { 
                    console.log(i + item.ID + item.Description + item.Price); 
                    i++;
                }

            }
            }
            }

            updateCart();
        })

    }
    
}); 
