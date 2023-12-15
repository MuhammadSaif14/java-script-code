


function generate(){

    var number=parseInt(document.getElementById("input").value)
    var height=parseInt(document.getElementById("height").value)
    var width=parseInt(document.getElementById("width").value)
     
    
    for(i =1; i<=number; i++){
     
        document.write('<img src="wallpaper2 (1).jpg" style=" width="'+width+'px" height="'+height+'px" "><br>')
   height-=10
   width-=10
    }



  }
  
  
