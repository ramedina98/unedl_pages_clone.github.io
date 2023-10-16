<!--Aqui tenemos todo el json...-->

<?php 
    function json1(){
        $arreglo = array(
            'dato1'=>45, 
            'dato2'=>'Ricardo Medina',
            'dato3'=>array(
                'subdato1'=>'Aguilar Espinosa Daniel', 
                'subdato2'=>'Cardenas Barajas Arturo', 
                'subdato3'=>'Careaga Panduro Ivan', 
                'subdato4'=>'Díaz Cervantes Cynthia'
            )
        );
        return json_encode($arreglo);
    };
    echo json1();
?>