/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function analizarDatosUsuario()
{
      //Invocamos el serviciio REST a traves de una peticion AJAX
    $.ajax({
            method: "GET",
            async: true,
            url: "rest/ma/cu",
            data: {
                nombre1 : $("#txtNombre1").val(),
                nombre2 : $("#txtNombre2").val(),
                ap1 : $("#txtApellido1").val(),
                ap2 : $("#txtApellido2").val(),
                ge : $("#cmbGenero").val(),
                es : $("#cmbEstado").val(),
                fn : $("#txtFechaNacimiento").val(),               
               }
       })
    .done(function(data)
        {
            $("#spnNombre1").html(data.nombre1);
            $("#spnNombre2").html(data.nombre2);
            $("#spnApellido1").html(data.apellido1);
            $("#spnApellido2").html(data.apellido2);
            $("#spnGenero").html(data.genero);
            $("#spnEstado").html(data.estado);
            $("#spnFechaNacimiento").html(data.fechaNacimiento);
            $("#spnResultado").html(data.resultado);
        });
}