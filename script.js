
// var button = document.createElement("Button");
// button.innerHTML = "Title";
// button.style = "bottom:0;right:0;position:relative;z-index: 9999"
// document.body.appendChild(button);

var newDiv = document.createElement("div"); 
var x = document.createElement("IMG");
x.setAttribute("src", "https://image1.jdomni.in/jdomni_email/whatsapp_popup.png?output-format=webp");
x.setAttribute("width", "48");
x.setAttribute("height", "48");
x.setAttribute("alt", "whatsapp icon");
newDiv.style = "bottom:0;right:0;position:fixed;z-index: 9999"

x.onclick = function(){
  window.open("https://wa.me/919490339525", "_blank");
};

newDiv.appendChild(x);  
document.body.appendChild(newDiv);

