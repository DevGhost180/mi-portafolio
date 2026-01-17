<?php
// Verificar que lleguen datos del formulario
if ($_POST) {
    // Recibir los datos
    $nombre = $_POST['nombre'];
    $email = $_POST['correo'];
    $mensaje = $_POST['mensaje'];
    
    // Tu email donde quieres recibir los mensajes
    $tu_email = "vichenzoxd@gmail.com"; // 
    // Preparar el email
    $asunto = "Nuevo mensaje desde tu portafolio";
    $cuerpo = "Nombre: " . $nombre . "\n";
    $cuerpo .= "Email: " . $email . "\n";
    $cuerpo .= "Mensaje: " . $mensaje;
    
    // Enviar el email
    if (mail($tu_email, $asunto, $cuerpo)) {
        echo "¡Mensaje enviado correctamente!";
    } else {
        echo "Error al enviar el mensaje";
    }
} else {
    echo "No se recibieron datos del formulario";
}
?>