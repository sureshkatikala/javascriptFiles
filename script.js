<<<<<<< HEAD
(function () {
       var options = {
           facebook: "1629986620602076", // Facebook page ID
           whatsapp: "+919490339525", // WhatsApp number
           call_to_action: "Message us", // Call to action
           button_color: "#FF6550", // Color of button
           position: "right", // Position may be 'right' or 'left'
           order: "facebook,whatsapp", // Order of buttons
       };
      var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
      //var url = forwardingAddress;
       var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://cdn.jsdelivr.net/gh/sureshkatikala/javascriptFiles/init.js';
       s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
       var x = document.getElementsByTagName('script')[0];
       console.log(x);
       x.parentNode.insertBefore(s, x);
   })();
=======
document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("PageContainer"); 
//   document.body.insertBefore(newDiv, currentDiv); 
    document.getElementsByTagName('head')[0].appendChild(newContent);

}
>>>>>>> modified script.js
