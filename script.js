
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
var x = document.createElement("IMG");
x.setAttribute("src", "https://image1.jdomni.in/jdomni_email/whatsapp_popup.png?output-format=webp");
x.setAttribute("width", "48");
x.setAttribute("height", "48");
x.setAttribute("alt", "whatsapp icon");
x.onclick = function(){
  window.open("https://wa.me/919490339525", "_blank");
}
newDiv.style = "bottom:0;right:0;position:fixed;z-index: 9999"


newDiv.appendChild(x);  
//newDiv.appendChild(facebookImage)

// <div class="fb-customerchat"
//  page_id="<ENTER-YOUR-FACEBOOK-ID-HERE>"
//  minimized="true">
// </div>
var facebookDiv = document.createElement("div");
facebookDiv.setAttribute("class", "fb-customerchat");
facebookDiv.setAttribute("page_id", "1629986620602076");
facebookDiv.setAttribute("minimized","true");

 window.fbAsyncInit = function() {
    FB.init({
      appId            : '912333495590130',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.11'
    });
  };
(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

newDiv.appendChild(facebookDiv)
document.body.appendChild(newDiv);


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
