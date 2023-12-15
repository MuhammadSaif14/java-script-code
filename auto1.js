


function generate(){

     var number=parseInt(document.getElementById("input").value)
     var color=document.getElementById("bdr-clr").value
     var height=parseInt(document.getElementById("height").value)
     var width=parseInt(document.getElementById("width").value)
      
     document.write('<table border="2" width="'+width+'px" height="'+height+'px" style="border: solid '+color+'">')
     for(i =1; i<=number; i++){
      document.write('<tr><td>....</td></tr>')
     }

     document.write('</table>')

   }
   
   
