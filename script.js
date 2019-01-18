
// var button = document.createElement("Button");
// button.innerHTML = "Title";
// button.style = "bottom:0;right:0;position:relative;z-index: 9999"
// document.body.appendChild(button);
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s); js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));


var newDiv = document.createElement("div");
newDiv.setAttribute("id","chat-widget")
var whatsapp = document.createElement("IMG");
whatsapp.setAttribute("src", "https://image1.jdomni.in/jdomni_email/whatsapp_popup.png?output-format=webp");
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
    }};
}

whatsapp.onclick = function(){
  if( isMobile.any()) { 
    window.open("https://wa.me/919490339525", "_blank");
  }
  else {
    window.open("https://web.whatsapp.com/send?phone=919490339525", "_blank");
  }
}
newDiv.style = "bottom:80px;right:30px;position:fixed;z-index: 9999"


newDiv.appendChild(whatsapp);  
//newDiv.appendChild(facebookImage)

// <div class="fb-customerchat"
//  page_id="<ENTER-YOUR-FACEBOOK-ID-HERE>"
//  minimized="true">
// </div>
var facebookDiv = document.createElement("div");
facebookDiv.setAttribute("class", "fb-customerchat");
facebookDiv.setAttribute("page_id", "829136050510375");
facebookDiv.setAttribute("minimized","true");
var my_awesome_script = document.createElement('script');
//  window.fbAsyncInit = function() {
//     FB.init({
//       appId            : '1102875969894081',
//       autoLogAppEvents : true,
//       xfbml            : true,
//       version          : 'v2.11'
//     });
//   };
// var js, fjs = document.getElementsByTagName("script")[0];
// js = document.createElement("script");
// js.setAttribute("id", "facebook-jssdk");
// js.setAttribute("src", "https://connect.facebook.net/en_US/sdk.js");
// fjs.parentNode.insertBefore(js, fjs);
// (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));

newDiv.appendChild(facebookDiv);
newDiv.appendChild(my_awesome_script);
document.body.appendChild(newDiv);
my_awesome_script.setAttribute('src','https://cdn.jsdelivr.net/gh/sureshkatikala/javascriptFiles@b4606fc/fbchatplugin.js');


/*
var my_awesome_script = document.createElement('script');

my_awesome_script.setAttribute('src','http://example.com/site.js');

document.head.appendChild(my_awesome_script);

*/
// var facebookImage = document.createElement("IMG");
// facebookImage.setAttribute("src", "https://cdn.pixabay.com/photo/2016/07/03/18/35/messenger-1495274_960_720.png");
// facebookImage.setAttribute("width", "48");
// facebookImage.setAttribute("height", "48");
// facebookImage.setAttribute("alt", "Facebook icon");
// facebookImage.onclick =
      

/*

var facebookImage = document.createElement("IMG");
facebookImage.setAttribute("src", "https://cdn.pixabay.com/photo/2016/07/03/18/35/messenger-1495274_960_720.png");
facebookImage.setAttribute("width", "48");
facebookImage.setAttribute("height", "48");
facebookImage.setAttribute("alt", "Facebook icon");
facebookImage.onclick = function(){
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '95100348886',
          xfbml      : true,
          version    : 'v2.6'
        });
      };
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

//     <div class="fb-page" 
//          data-href="https://www.facebook.com/XZY/" 
//          data-tabs="messages" 
//          data-width="400" 
//          data-height="300" 
//          data-small-header="true">
//       <div class="fb-xfbml-parse-ignore">
//         <blockquote></blockquote>
//       </div>
//     </div>
    var fbPage = document.createElement("div");
fbPage.setAttribute("class", "fb-page");
fbPage.setAttribute("data-href", "https://www.facebook.com/whatshelpio/");
fbPage.setAttribute("width", "400");
fbPage.setAttribute("height", "300");
fbPage.setAttribute("data-small-header", "true");
fbPage.setAttribute("alt", "Facebook icon");
newDiv.appendChild(fbpage);
};

*/
