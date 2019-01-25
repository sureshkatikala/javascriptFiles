
var autochatIconContainer = document.createElement("div");
autochatIconContainer.setAttribute("id","autochat-image-container")
var autochatIcon = document.createElement("IMG");
autochatIcon.setAttribute("id","autochat-icon")
autochatIcon.setAttribute("src", "https://autochat.io/images/autochat-favicon/svg/001-communication.svg");
autochatIcon.setAttribute("width","48");
autochatIcon.setAttribute("height", "48");
autochatIcon.setAttribute("alt", "Autochat Icon");

autochatIconContainer.appendChild(autochatIcon);
autochatIconContainer.style = "bottom:30pt;right:30pt;position:fixed;z-index: 9999";

var showOptionsContainer = document.createElement("div");
showOptionsContainer.setAttribute("id","chat-widget-container");

var closeButtonContainer = document.createElement("div");
closeButtonContainer.setAttribute("id","close-button-container");

var closeButton = document.createElement("IMG");
closeButton.setAttribute("id", "close-button-image")
closeButton.setAttribute("src","https://cdn.jsdelivr.net/gh/sureshkatikala/javascriptFiles/icons8-cancel-80.png");
closeButton.setAttribute("width","48");
closeButton.setAttribute("height", "48");
closeButton.setAttribute("alt", "CloseButton");

var whatsappContainer = document.createElement("div");
whatsappContainer.setAttribute("id","whatsapp-button-container");

var whatsapp = document.createElement("IMG");
whatsapp.setAttribute("src", "https://image1.jdomni.in/jdomni_email/whatsapp_popup.png");
whatsapp.setAttribute("width", "48");
whatsapp.setAttribute("height", "48");
whatsapp.setAttribute("alt", "whatsapp icon");

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    },
}

whatsapp.onclick = function(){
  if( isMobile.any()) { 
    window.open("https://wa.me/919494493639", "_blank");
  }
  else {
    window.open("https://web.whatsapp.com/send?phone=919494493639", "_blank");
  }
}
showOptionsContainer.style = "bottom:30pt;right:30pt;position:fixed;z-index: 9999";

var facebookDiv = document.createElement("div");
facebookDiv.setAttribute("class", "fb-customerchat");
facebookDiv.setAttribute("page_id", "829136050510375");
facebookDiv.setAttribute("minimized","true");

var my_awesome_script = document.createElement('script');
my_awesome_script.setAttribute('src','https://cdn.jsdelivr.net/gh/sureshkatikala/javascriptFiles@f296408/fbchatplugin.js');

showOptionsContainer.appendChild(facebookDiv);
showOptionsContainer.appendChild(my_awesome_script);
showOptionsContainer.style.display = "none";

whatsappContainer.appendChild(whatsapp);
closeButtonContainer.appendChild(closeButton);
showOptionsContainer.appendChild(whatsappContainer);
showOptionsContainer.appendChild(closeButtonContainer);

autochatIcon.onclick = function(){
    var showOptionsContainer = document.getElementById("chat-widget-container");
    showOptionsContainer.style.display = "inline-grid";
    var autochatImageContainer = document.getElementById("autochat-image-container");
    autochatImageContainer.style.display = "none";
}
closeButton.onclick =  function(){
   var showOptionsContainer = document.getElementById("chat-widget-container");
    showOptionsContainer.style.display = "none";
    var autochatImageContainer = document.getElementById("autochat-image-container");
    autochatImageContainer.style.display = "inline-grid";
}

document.body.appendChild(autochatIconContainer)
document.body.appendChild(showOptionsContainer);

//let facebookIcon = document.getElementsByClassName('fb_dialog  fb_dialog_advanced fb_customer_chat_bubble_animated_no_badge fb_customer_chat_bubble_pop_in');


