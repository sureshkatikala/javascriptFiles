 window.fbAsyncInit = function() {
     FB.init({
       appId            : '1102875969894081',
       autoLogAppEvents : true,
       xfbml            : false,
       version          : 'v2.11'
     });
//     $(document).trigger('fbload'); 
 };
(function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'))
// $(document).on(
//     'fbload',  //  <---- HERE'S OUR CUSTOM EVENT BEING LISTENED FOR
//     function(){
     
var autochatIconContainer = document.createElement("div");
autochatIconContainer.setAttribute("id","autochat-image-container")
var autochatIcon = document.createElement("IMG");
autochatIcon.setAttribute("id","autochat-icon")
autochatIcon.setAttribute("src", "https://autochat.io/images/autochat-favicon/svg/001-communication.svg");
autochatIcon.setAttribute("width","48");
autochatIcon.setAttribute("height", "48");
autochatIcon.setAttribute("alt", "Autochat Icon");
autochatIcon.style = 'cursor: pointer';

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
closeButton.style = 'cursor: pointer';


var whatsappContainer = document.createElement("div");
whatsappContainer.setAttribute("id","whatsapp-button-container");

var whatsapp = document.createElement("IMG");
whatsapp.setAttribute("src", "https://image1.jdomni.in/jdomni_email/whatsapp_popup.png");
whatsapp.setAttribute("width", "48");
whatsapp.setAttribute("height", "48");
whatsapp.setAttribute("alt", "whatsapp icon");
whatsapp.style = 'cursor: pointer';
//      FB.Event.subscribe('customerchat.load', ()=>{
//        FB.XFBML.parse(document.getElementById('chat-widget-container'));
// });
var facebookDiv = document.createElement("div");
facebookDiv.setAttribute("class", "fb-customerchat");
facebookDiv.setAttribute("id",'fb')
facebookDiv.setAttribute("page_id", "829136050510375");
facebookDiv.setAttribute("minimized","true");

// var my_awesome_script = document.createElement('script');
// my_awesome_script.setAttribute('src','https://cdn.jsdelivr.net/gh/sureshkatikala/javascriptFiles@cce8ce7/fbchatplugin.js');

showOptionsContainer.appendChild(facebookDiv);

var facebookIcon = document.createElement('IMG');
facebookIcon.setAttribute('src','https://cdn.jsdelivr.net/gh/sureshkatikala/javascriptFiles/icons8-facebook-messenger-filled-100.png');
facebookIcon.setAttribute("width", "48");
facebookIcon.setAttribute("height", "48");
facebookIcon.setAttribute("alt", "messenger icon");
facebookIcon.style = 'cursor: pointer';
// facebookIcon.onclick = showFbChat(document, 'script', 'facebook-jssdk');
// function showFbChat(d,s,id){
//    FB.XFBML.parse();
//          var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) {return;}
//         js = d.createElement(s); js.id = id;
//         js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
//         fjs.parentNode.insertBefore(js, fjs);
// }
//         (function(d, s, id){
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) {return;}
//         js = d.createElement(s); js.id = id;
//         js.src = "https://connect.facebook.net/en_US/sdk.js";
//         fjs.parentNode.insertBefore(js, fjs);
//         }(document, 'script', 'facebook-jssdk')))
// //     $(document).trigger('fbload'); 
//  })};
    
//    var fjs  = document.getElementsByTagName('script')[0];
//    var js = document.createElement("script");
// //    if (document.getElementById("facebook-jssdk")) {return;}
//    js.setAttribute("id", "facebook-jssdk");
//    js.setAttribute("src", "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js");
//    fjs.appendChild(js);
// //    FB.CustomerChat.show(true);
//     FB.Event.subscribe('customerchat.load', ()=>{
// //        FB.XFBML.parse(document.getElementById('chat-widget-container'));
//          FB.CustomerChat.show(true);
//      });


 // FB.CustomerChat.show(true);
//  var FBChat = FB.json();
//  FBChat.CustomerChat.showDialog();
// )};

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


showOptionsContainer.appendChild(facebookIcon)
// showOptionsContainer.appendChild(my_awesome_script);
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

// (function(d, s, id){
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {return;}
//       js = d.createElement(s); js.id = id;
//       js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));
//    var fjs  = document.getElementsByTagName('script')[0];
//    var js = document.createElement("script");
// //    if (document.getElementById("facebook-jssdk")) {return;}
//    js.setAttribute("id", "facebook-jssdk");
//    js.setAttribute("src", "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js");
//    fjs.appendChild(js);
     //showOptionsContainer.appendChild(js);
//   if(fjs.style.display == "none"){
//     window.FB.CustomerChat.hide();
// if(showOptionsContainer.style.display == 'none'){
//  FB.CustomerChat.hide();
// }
// var fjs = document.getElementById("chat-widget-container");

// var divId = 'chat-widget-container';
// jQuery(divId).ready(function() {
//     var otherDiv = 'fb';
//     jQuery(otherDiv).ready(function(){
//         var chatwidget = document.getElementById('chat-widget-container');
//         var facebook = document.getElementById('fb');
//         chatwidget.appendChild(facebook);
//     });
// });

document.body.appendChild(autochatIconContainer)
document.body.appendChild(showOptionsContainer);
//     }())
//let facebookIcon = document.getElementsByClassName('fb_dialog  fb_dialog_advanced fb_customer_chat_bubble_animated_no_badge fb_customer_chat_bubble_pop_in');


