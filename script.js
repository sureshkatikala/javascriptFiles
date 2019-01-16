
document.body.onload = addElement;

function addElement () { 
var button = document.createElement("Button");
button.innerHTML = "Title";
button.style = "top:0;right:0;position:absolute;z-index: 9999"
document.body.appendChild(button);
}
