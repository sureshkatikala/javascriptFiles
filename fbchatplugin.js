 window.fbAsyncInit = function() {
     FB.init({
       appId            : '1102875969894081',
       autoLogAppEvents : true,
       xfbml            : true,
       version          : 'v2.11'
     });
   var fjs = document.getElementById("chat-widget-container");
   var js = document.createElement("script");
   js.setAttribute("id", "facebook-jssdk");
   js.setAttribute("src", "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js");
   fjs.appendChild(js);
  if(fjs.style.display == "none"){
    FB.CustomerChat.hide();
  }
 };
// FB.CustomerChat.hideDialog();

//  (function(d, s, id){
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {return;}
//       js = d.createElement(s); js.id = id;
//       js.src = "https://connect.facebook.net/en_US/sdk.js";
//       fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));
