window.fbAsyncInit = function() {
     FB.init({
       appId            : '1102875969894081',
       autoLogAppEvents : true,
       xfbml            : false,
       version          : 'v2.11'
     });
//   FB.Event.subscribe('customerchat.load', function(){
//    FB.CustomerChat.hideDialog();
//   });
  
// <script src="https://www.gstatic.com/firebasejs/5.8.3/firebase.js"></script>
  FB.Event.subscribe('customerchat.dialogHide', function(){
   FB.CustomerChat.hide();
   let facebookWidgetContainer = document.getElementById('facebook-widget-container');
    facebookWidgetContainer.style.display = 'none';
   
   var showOptionsContainer = document.getElementById("chat-widget-container");
    showOptionsContainer.style.display = "inline-grid";
  });

//     $(document).trigger('fbload'); 
 };



(function storeOwnerDetails(){
 let fbPageId = 0;
let whatsappNumber;
 let data = {storeUrl : window.location.host};
 return fetch('https://eed0243b.ngrok.io/getstoreowner', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})
 .then(response => response.json())
 .then(response => {
  whatsappNumber = response.storeDetails.whatsappContact;
  fbPageId = response.storeDetails.facebookPage;
  console.log(response);
  console.log(fbPageId)
  loadWidget(fbPageId, whatsappNumber)
 })
}());


function  loadWidget(fbPageId, whatsappNumber) {
(function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'))
// console.log(FB);
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
autochatIconContainer.style = "bottom:18pt;right:18pt;position:fixed;z-index: 9999";

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

// var facebookDiv = document.createElement("div");
// facebookDiv.setAttribute("class", "fb-customerchat");
// facebookDiv.setAttribute("id",'fb')
// facebookDiv.setAttribute("minimized","true");
// facebookDiv.setAttribute("page_id", '0');



// var facebookDiv = document.createElement("div");
// facebookDiv.setAttribute("class", "fb-customerchat");
// facebookDiv.setAttribute("id",'fb')
// facebookDiv.setAttribute("page_id", "829136050510375");
// facebookDiv.setAttribute("minimized","true");

// let myVar = setInterval(myTimer, 1000);

// function myTimer() {
// let facebookIconDisplayStyling = document.getElementsByClassName('fb_dialog');
// console.log('inside', facebookIconDisplayStyling)
// if(facebookIconDisplayStyling.length !== 0) {
//   facebookIconDisplayStyling[0].style = 'background: none;border-radius: 50%;bottom: 26pt !important;display: inline;height: 45pt;padding: 0px;position: fixed;right: 24pt !important;top: auto;width: 45pt;z-index: 9999;';
//   clearInterval(myVar);
//  }
// }

// var my_awesome_script = document.createElement('script');
// my_awesome_script.setAttribute('src','https://cdn.jsdelivr.net/gh/sureshkatikala/javascriptFiles@cce8ce7/fbchatplugin.js');

// let facebookWidgetContainer = document.createElement('div');
// facebookWidgetContainer.setAttribute('id', 'facebook-widget-container');
// facebookWidgetContainer.style.display = 'none';
// facebookWidgetContainer.appendChild(facebookDiv);
// showOptionsContainer.appendChild(facebookDiv);

let facebookWidgetContainer = document.createElement('div');
var facebookDiv = document.createElement("div");

let facebookWidgetDiv= document.createElement('div');
let myVar = setInterval(myTimer, 1000, fbPageId);

function myTimer(fbPageId) {
if(fbPageId!== 0) {
         facebookWidgetContainer.setAttribute('id', 'facebook-widget-container');
         facebookWidgetContainer.style.display = 'none';
        facebookWidgetDiv.setAttribute('id', 'fb-root');
         facebookWidgetContainer.appendChild(facebookDiv);
         facebookWidgetContainer.appendChild(facebookWidgetDiv);


         facebookDiv.setAttribute("class", "fb-customerchat");
         facebookDiv.setAttribute("id",'fb')
         facebookDiv.setAttribute("minimized","true");
         facebookDiv.setAttribute("page_id", fbPageId);
         clearInterval(myVar);
 }
}

// let facebookWidgetDiv= document.createElement('div');
// facebookWidgetDiv.setAttribute('id', 'fb-root');

let flag = true;
var facebookIcon = document.createElement('IMG');
facebookIcon.setAttribute('src','https://cdn.jsdelivr.net/gh/sureshkatikala/javascriptFiles/icons8-facebook-messenger-filled-100.png');
facebookIcon.setAttribute("width", "48");
facebookIcon.setAttribute("height", "48");
facebookIcon.setAttribute("alt", "messenger icon");
facebookIcon.style = 'cursor: pointer';
facebookIcon.onclick = function() {
//  var showOptionsContainer = document.getElementById("chat-widget-container");
    showOptionsContainer.style.display = "none";
//  FB.XFBML.parse();
 if(flag){
  FB.XFBML.parse();
//    FB.CustomerChat.showDialog();
  flag = false;
 }
//  let facebookWidgetContainer = document.getElementById('facebook-widget-container');
 facebookWidgetContainer.style.display = 'inline';
 FB.CustomerChat.showDialog();

}
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
    window.open("https://wa.me/" + whatsappNumber, "_blank");
  }
  else {
    window.open("https://web.whatsapp.com/send?phone=" + whatsappNumber, "_blank");
  }
}
showOptionsContainer.style = "bottom:18pt;right:18pt;position:fixed;z-index: 9999";

// showOptionsContainer.appendChild(firebasescript)
showOptionsContainer.appendChild(facebookIcon)
// showOptionsContainer.appendChild(my_awesome_script);
showOptionsContainer.style.display = "none";

whatsappContainer.appendChild(whatsapp);
closeButtonContainer.appendChild(closeButton);
showOptionsContainer.appendChild(whatsappContainer);
showOptionsContainer.appendChild(closeButtonContainer);

autochatIcon.onclick = function(){
//    FB.XFBML.parse();
//     FB.CustomerChat.hideDialog();
//     FB.CustomerChat.hide();
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
document.body.appendChild(facebookWidgetContainer);
}
