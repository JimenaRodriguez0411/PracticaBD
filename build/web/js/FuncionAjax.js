/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function cargarDatos()
{
    $.ajax({
            method: "GET",
            url: "imagenes.html",
            async: true,

       }).done(function(data)
        {
         //   $("#imagen").addClase('col-ms-12');
            $('#imagen').html(data);

        });
}


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax.txt", true);
  xhttp.send();
}
