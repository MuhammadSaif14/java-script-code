function Calculate(){

    var value1=parseInt(document.getElementById("value1").value)
    var value2=parseInt(document.getElementById("value2").value)
    var operator=document.getElementById("op").value
    
    if(operator=="+"){
        alert("By Adding value1 & value2 = "+(value1+value2))
    }else if(operator=="-"){
        alert("By Subtracting Value1 & Value2 = "+(value1-value2))
    }else if(operator=="*"){
        alert("By Multiplying value1 & value2 = "+(value1*value2))
    }else if(operator=="/"){
        alert("By Dividing value1 & value2 = "+(value1/value2))

    }

}