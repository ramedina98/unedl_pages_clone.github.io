<?php
    function json1(){
        $arreglo=array(
            'dato1'=>45, 
            'dato2'=>array(
                'subdato1'=>"Edgar Hernandez"
            ), 
            'alumnos'=>array(
                '1'=> 'Aguilar Espinoza Daniel',
                '2'=> 'Medina Martin Ricardo'
            )
        );
        //retornamos aqui el json...
        return json_encode($arreglo);
    }
    echo json1();
?>

