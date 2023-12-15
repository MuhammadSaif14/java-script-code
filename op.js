function calculate(){

var valu1=parseInt(document.getElementById("value1").value)
var valu2=parseInt(document.getElementById("value2").value)
var operator=document.getElementById("op").value

if(operator=="+"){
    alert("Addition of valu1 and valu2 is: "+(valu1+valu2))
}else if(operator=="-"){
    alert("Substraction of valu1 and valu2 is: "+(valu1-valu2))
}

}