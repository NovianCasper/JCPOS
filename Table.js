var x = 0;
var y = 0;

//Product information
var prodName = ["Ice", "Cupcakes", "poptarts", "toast", "chocolate", "soda", "air"];
var prodQuantity = [35, 25, 15, 20, 2, 16, 1]
var prodPrice = [15.50, 5.00, 1.50, 2.00, 50.00, 1.75, 20293]

//Creates table from the productName, productQuantity, and productPrice.
for (var a=0; a < prodName.length; a++) {
    document.write("<tr>");
    document.write(`<td><p id=\"name${a}">${prodName[a]}</p></td>`);
    document.write(`<td id=\"quantity${a}\">${prodQuantity[a]}</td>`);
    document.write(`<td id=\"price${a}">${prodPrice[a]}</td>`);
    document.write(`<td id=\"output${a}\">0</td>`);
    document.write(`<th><button type=\"button\" onclick=\"Remove(${a})\">-</button><button type=\"button\" onclick=\"Add(${a})\">+</button></th>`);
}
document.write("</tr>");

//add to order
function Add(c){
    x = parseInt(document.getElementById(`output${c}`).innerHTML);
    y = parseInt(document.getElementById(`quantity${c}`).innerHTML);
    if (x < 3 && x < y){
        x += 1;
        document.getElementById(`output${c}`).innerHTML = x;
    }
}

//remove from order
function Remove(c){
    x = parseInt(document.getElementById(`output${c}`).innerHTML);
    if (x > 0){
        x --;
        document.getElementById(`output${c}`).innerHTML = x;
    }
}

//outputs order information
function POSTdb(){
    for (var b = 0; b < a; b++) {
        y = parseInt(document.getElementById(`output${b}`).innerHTML);
        if (y > 0) {
            y = document.getElementById(`price${b}`).innerHTML;
            x = document.getElementById(`output${b}`).innerHTML;
            var price = y * x;
            var word = parseInt(document.getElementById(`output${b}`).innerHTML) + " " + document.getElementById(`name${b}`).innerHTML + ": $" + price;
            window.alert(word);
        }
    }                   
}