document.getElementById("res").style.color="red";
function val(elem) {
    if (isNaN(elem.value)) {
        document.grtElementById("res").innerText = "Please enter numbers only";
    } else {
        document.getElementById("res").innerText = "";
        if(elem.value.length>10){
            alert("More than 10 digit")
        }else{
        
        }
    }
}
