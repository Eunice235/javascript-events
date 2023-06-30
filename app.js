document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submit");

    submitButton.addEventListener("mouseover", function(){
        submitButton.style.backgroundColor = "red";
        submitButton.style.color = "white";
    });
    var p = document.getElementById("demo").innerHTML="welcome home";
    p.addEventListener("mouseover", function(){
        p.style.style.color = "red";
    }) ;  

  
});