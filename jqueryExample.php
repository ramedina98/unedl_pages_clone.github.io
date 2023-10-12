<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHPWebPage.php to edit this template
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    </head>
    <body>
        
    </body>
    <script type="text/javascript">
        $(function(){
            //se esta haciendo una peticion a una api...
            $.post('funciones.php',{}, function(obj){
               console.log(obj);
            });
        });
    </script>
</html>
