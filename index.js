
$(document).ready(function(){
    $(".btn_On").click(function(){
        alert("You have been subscribed");
    })
});

function one() {
    var a = document.getElementById("inp").getAttribute("type");
    if (a == "password") {
      document.getElementById("inp").setAttribute("type" , "text")
    }
    else {
      document.getElementById("inp").setAttribute("type" , "password")  
    }
  }