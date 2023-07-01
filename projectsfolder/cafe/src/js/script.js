

$( document ).ready(function() {
 
    updateCart();

});
let cart = []


loadItems = function () {
    if (cart = JSON.parse(localStorage.getItem('items')) != null && (Object.keys(JSON.parse(localStorage.getItem('items'))).length) > 0) { 
        return (JSON.parse(localStorage.getItem("items"))); 
    }
    else 
    {
        return false;
    }
}

updateCart = function() { 
if (cart = JSON.parse(localStorage.getItem('items'))
 != null) { 
    cart = JSON.parse(localStorage.getItem('items'))



        let length = Object.keys(cart).length;
        if (length > 0) {
        $("#cartNum").removeClass("hidden");
        $("#cartNum").addClass("show");
            } else {
                $("#cartNum").addClass("hidden");
                $("#cartNum").removeClass("show");
            }

        let i = 0;

        $("#cartNum").text(length);
        for (const item of cart) { 
            i++;
        }
    }
}

function deleteItem (id) {

    items = loadItems();

    items.splice(id, 1);

    saveItems(items);
    
    location.reload();
}

function saveItems(items) {
    localStorage.setItem("items", JSON.stringify(items));
}

displayTableHeader = function(table) { 

    let tr = document.createElement("tr"); 
    
    let thItem = document.createElement("th"); 
    thItem.appendChild(document.createTextNode("Item No."));
    thItem.setAttribute("scope", "col");

    let thDesc = document.createElement("th"); 
    thDesc.appendChild(document.createTextNode("Item Desc"));
    thDesc.setAttribute("scope", "col");

    let thAmt = document.createElement("th"); 
    thAmt.appendChild(document.createTextNode("Amount"));
    thAmt.setAttribute("scope", "col");

    let thUnitCost = document.createElement("th"); 
    thUnitCost.appendChild(document.createTextNode("Single Unit Cost"));
    thUnitCost.setAttribute("scope", "col");

    let thTotal = document.createElement("th"); 
    thTotal.appendChild(document.createTextNode("Total Cost"));
    thTotal.setAttribute("scope", "col");

    tr.appendChild(thItem);
    tr.appendChild(thDesc);
    tr.appendChild(thAmt);
    tr.appendChild(thUnitCost);
    tr.appendChild(thTotal);

    let thead = document.createElement('thead'); 

    thead.appendChild(tr);

    table.appendChild(thead);

}

displayNoCell = function(item, i, row) { 
    let noCell = document.createElement('td');
    noCell.appendChild(document.createTextNode(i));
    noCell.setAttribute("class", "noCell");
    row.appendChild(noCell);
    return noCell;

}

displayDescCell = function(item, row) { 
    descCell = document.createElement('td');
    descCell.appendChild(document.createTextNode(item.Description));
    descCell.setAttribute("class", "descCell");
    row.appendChild(descCell);
    return descCell;
}

displayIntQtyCell = function(item, i, row) { 
    let qtyCell = document.createElement('td');
    qtyDiv = document.createElement('DIV'); 
    qtyDiv.setAttribute("class", "input-group");
    qtyAmt = document.createElement('INPUT');
    qtyAmt.type = "text";
    qtyAmt.value = item.Qty;
    qtyAmt.setAttribute("id", i);
    qtyAmt.setAttribute("class", "w-25 inp");
    qtyDiv.appendChild(qtyAmt);

    appendDiv = document.createElement('DIV'); 
    appendDiv.setAttribute("class" ,"input-group-append");



    qtyDiv.appendChild(appendDiv);

    qtyCell.setAttribute("class", "qtyCell");
    row.appendChild(qtyDiv);

    return qtyCell;
}

displayQtyCell = function(item, i, row) { 
    let qtyCell = document.createElement('td');
    qtyCell.appendChild(document.createTextNode(item.Qty));
    qtyCell.setAttribute("class", "qtyCell");
    row.appendChild(qtyCell);

    return qtyCell;
}

displayPrcCell = function(item, row, qtyCell) { 

    prcCell = document.createElement('td');
    prcCell.appendChild(document.createTextNode(item.Price));
    qtyCell.setAttribute("class", "prcCell");
    row.appendChild(prcCell);


}

displayTtlCell = function(item, row) {
    ttlCell = document.createElement('td');
    ttlCell.appendChild(document.createTextNode((item.Qty * item.Price).toFixed(2)));
    ttlCell.setAttribute("class", "ttlCell");
    row.appendChild(ttlCell);

    return ttlCell;
}

displayDeleteCell = function(i) { 
    let deleteCell = document.createElement('td');
    deleteButton = document.createElement('BUTTON')
    deleteButton.innerHTML = "Remove";
    deleteButton.setAttribute("class", "btn deleteBtn btn-outline-danger");
    deleteButton.setAttribute("id", i);

    

    return deleteCell;


    
}

displayFinalTotal = function() { 
    items = (JSON.parse(localStorage.getItem("items")));

    let finalTotal = 0; 
    for (let i = 0; i < items.length ; i++ ) {
        price = items[i].Price * items[i].Qty; 
        finalTotal += price;
    }
    $("#finalTotal").text("Final Total: $" + finalTotal.toFixed(2));
}

displayCart = function() {
    
    if (loadItems() != false) 
    {
    cart = JSON.parse(localStorage.getItem('items'))
    let i = 1;

    let table = document.getElementById('cartTable');


    var tableBody = document.createElement('tbody');
    
    displayTableHeader(table);

    for (const item of cart) {
        let row = document.createElement('tr');

            let noCell = displayNoCell(item, i, row);    

            let descCell = displayDescCell(item, row);

            let qtyCell = displayIntQtyCell(item, i, row);

            let prcCell = displayPrcCell(item, row, qtyCell); 

            let ttlCell = displayTtlCell(item, row);

            let deleteCell = displayDeleteCell(i,);

            deleteCell.appendChild(deleteButton); 

            row.appendChild(deleteCell);

        tableBody.appendChild(row);
        i++;
        
    };
    
    table.appendChild(tableBody);

    document.getElementById("cartDisplay").appendChild(table);

    let buttons = $(".deleteBtn");
    for (const button of buttons) {
        button.addEventListener("click", () => { 
        
            if (button.id !== undefined && button.id != "") {
            
                index = parseInt(button.id) - 1;
                
                deleteItem(index);


                
            }

        })
    }

    displayFinalTotal();   

    let amts = $(".inp");
    for (const amt of amts) {
        amt.addEventListener("change", () => {
            if (amt.value > 0) {
            let i = 0;
            items = loadItems();
            for (const item of items) {
                if (i == (amt.id - 1)) {
                item.Qty = amt.value;
                saveCart(items);
                 
            }
            i++ 

                
            } 
            location.reload();
        }
            else 
            {
                deleteItem(amt.id -1 );
            } 

        })
    }
   
  } 

  else { 
    $("#header").text("Cart is empty!")
  }


}

displayConfirmation = function() {
    
    if (loadItems() != false) 
    {
    cart = JSON.parse(localStorage.getItem('items'))
    let i = 1;

    let table = document.getElementById('cartTable');


    var tableBody = document.createElement('tbody');
    
    displayTableHeader(table);

    for (const item of cart) {
        let row = document.createElement('tr');

            let noCell = displayNoCell(item, i, row);    

            let descCell = displayDescCell(item, row);

            let qtyCell = displayQtyCell(item, i, row);

            let prcCell = displayPrcCell(item, row, qtyCell); 

            let ttlCell = displayTtlCell(item, row);


        tableBody.appendChild(row);
        i++;
        
    };
    
    table.appendChild(tableBody);

    document.getElementById("cartDisplay").appendChild(table);



    displayFinalTotal();   

   
  } 




}

clearCart = function() { 
    localStorage.clear();
    cart = [];

}

$("#clearCart").click( () => {
    clearCart();
    location.reload();
});


validateForm = function() {
    dialog = document.getElementById("dialogBody")
    while (dialog.firstChild) {
        dialog.removeChild(dialog.firstChild);
      }

    const zipReg = /^\d{5}$/
    
   const form = $(".input")
    let errors = []; 
    let i = 0; 
    for (input of form) {
        if (input.value == "") {
            errors.push("Please enter a value for the " + input.id + " field." );
        }
         
    }

    if (!zipReg.test(document.getElementById("zip").value)) {
        errors.push("Invalid Zip code!" );
    }


    if (errors.length > 0)
    {
        for (error of errors) {
            text = document.createTextNode(error);
            p = document.createElement('p');
            p.appendChild(text); 
        document.getElementById("dialogBody").appendChild(p);}
        return false;
    }

  
    else {
      
        text = document.createTextNode("Message sent!");
        p = document.createElement('p');
        p.appendChild(text); 
    document.getElementById("dialogBody").appendChild(p);
    $("#valiDialog").dialog("option", "title", "Success!")}
    return true;
    }



