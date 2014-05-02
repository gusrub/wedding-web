<?php
    $con = mysqli_connect("127.0.0.1:3306", "root", "", "wedding_web");
    $sql = "INSERT INTO rsvp (Name, Email, Attending, Guests, Comments) VALUES (?, ?, ?, ?, ?)";
    $query = $con->prepare($sql);
    $query->bind_param('ssiis', $_POST['name'], $_POST['email'], $_POST['attending'], $_POST['guests'], $_POST['comments']);

    $person = $_POST['name'];
    $reply_to = $_POST['email'];

    if($_POST['attending'] == 1)
        $attending = "SI";
    else 
        $attending = "NO";

    $guests = $_POST['guests'];

    if($_POST['comments'] == "")
        $comments = "Sin comentarios.";
    else 
        $comments = $_POST['comments'];

    $to = "gustavo@42ideas.mx, ahgyari@gmail.com";
    $sub = "$person se ha registrado";
    $msg = "Hola cara de bola! \r\n\r\n$person se ha registrado y confirma que $attending va asistir a la boda con $guests invitados! \r\n\r\nComentarios: \r\n$comments";

    $headers = 'From: Boda Gus y Yari<noreply@yari-gus.com>' . "\r\n" .
    'Reply-To: ' .$reply_to. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if ($query->execute() == FALSE || mail($to, $sub, $msg, $headers) == FALSE) {
        $response = array(
            'error' => '1',
            'msg' => 'Inténtalo nuevamente'
        );
        echo json_encode($response);
    } else {
        $response = array(
            'error' => '0',
            'msg' => "Gracias por registrarte " . $_POST[name]
        );
        echo json_encode($response);
    }
    mysqli_close($con);
?>
