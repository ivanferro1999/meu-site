

function ola(){
 
    var p = document.getElementById("email_set");
    if(p.style.display == "none"){
        p.style.display = "flex";
    }
    else{
        p.style.display = "none";
    }   
} 

function yy(){
    var y = document.getElementById("menu_mobile") ;
    var x = document.getElementById("nerd") ;


    if(document.getElementById("menu").style.display === "flex" ){
        document.getElementById("menu").style.display = "none";
        x.classList.toggle("change"); 
        y.style.display = "none";
        }		
     else {
        document.getElementById("menu").style.display = "flex";
        x.classList.toggle("change");
        y.style.display = "flex";
        
    }
}

function y(){
    var y = document.getElementById("menu_mobile") ;
    if (document.getElementById("menu").style.display === "none" ){
        y.style.display = "flex";
    }
    else {
        y.style.display = "flex";
}
}