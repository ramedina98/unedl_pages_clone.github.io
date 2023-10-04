<!--practica 2...-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica 2 || Jquerys</title>
    <!--icon-->
    <link rel="shortcut icon" href="imagenes/jqueryicon.ico" type="image/x-icon">
    <!--css-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="../jquery.js"></script>
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">JAL NEWS</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" id="noticias">Noticias</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="formulario">Formulario</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="imagenes">
                                Imagenes
                            </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Noticia del día</a></li>
                                    <li><a class="dropdown-item" href="#">Internacional</a></li>
                                    <li><a class="dropdown-item" href="#">Arte</a></li>
                                </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <section id="mainContent">Seccion principal</section>
    </main>
    
    <footer>
    </footer>
</body>
<!--bootstrap...-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<!--jquery-->
<script type="text/javascript">
    $(function(){ //we created an object...
        //Atraparemos un objeto...
        //habra varios de esos...
        //este es de noticias...
        $('#noticias').click(function(){
            //Estamos mandando a llamar componentes...
            $('#mainContent').empty();//limpiamos lo que hay
            $('#mainContent').load('componentes/noticias.html'); //cargamos lo nuevo
        });
        //Este es de formulario...
        $('#formulario').click(function(){
            $('#mainContent').empty();//limpiamos lo que hay
            $('#mainContent').load('componentes/formulario.html'); //cargamos lo nuevo
        })
    });
</script>
</html>