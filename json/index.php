<!---->
<!DOCTYPE html>
<html lang="en">
<head>
    <!--meta tags--> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Ricardo Abraham Medina Martin Del Campo">
    <meta name="description" content="Pagina oficial de JAL NEWS">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="keywords" content="jal news, noticias, ultima hora, lo más relevante, HTML, CSS, JS">
    <meta name="robots" content="index, follow">
    <meta name="generator" content="preshop">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="X-UA-Compatible" content="IE=7">
    <!--tab titles-->
    <title>Elementos || JSON</title>
    <!--icon-->
    <link rel="shortcut icon" href="../imagenes/news.ico" type="image/x-icon">
    <!--css-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!--<link rel="stylesheet" href="style.css">-->
    <link rel="stylesheet" href="../bootstrap.css">
    <!--<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>-->
</head>
<body>
    
</body>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" type="text/javascript"></script>
<script src="../jquery.js"></script>
<script type="text/javascript">
    $(function(){
        //como ya sabemos, aqui solamente estamos 
        //solicitando los datos... eso es un get...
        $.getJSON('./funciones.php', {}, function(data){
            console.log(data);

            // Accessing and logging specific data from the JSON
            console.log('Dato1:', data.dato1);
            console.log('Dato2:', data.dato2);

            // Accessing and logging subdato values
            $.each(data.dato3, function(key, value){
                console.log('Subdato ' + key + ': ' + value);
            });
        });
    });
</script>
</html>