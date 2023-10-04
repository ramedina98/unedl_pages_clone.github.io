<!--Este es para el menu...-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu || Jquerys</title>
    <!--icon-->
    <link rel="shortcut icon" href="imagenes/jqueryicon.ico" type="image/x-icon">
    <!--css-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="jquery.js"></script>
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">UNEDL</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" id="home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="contenido">Contenido</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="historia">Historia</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true" id="contacto">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true" id="ayuda">Ayuda</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <section id="mainContent">
            <p>contenido principal</p>
        </section>
        <aside></aside>
    </main>
    
    <footer>
    </footer>
</body>
<!--bootstrap...-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
<!--jquery-->
<script type="text/javascript">
    $(function(){ //we created an object...
        alert("Pagina cargada totalmente");
        //Atraparemos un objeto...
        $('#contenido').click(function(){
            //Estamos mandando a llamar componentes...
            $('#mainContent').empty();//limpiamos lo que hay
            $('#mainContent').load('contenido.html'); //cargamos lo nuevo
        });
    });
</script>
</html>