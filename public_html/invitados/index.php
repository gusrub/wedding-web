<html>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<head>
	<title>Lista de invitados</title>
	<style type="text/css">
		td, th {
			padding: 8px;
		}
		th {
			border: 1px solid #000;
		}
		.comments {
			width: 40%;
		}
		.yes {
			background: #E5EECC;
		}
		.no {
			background: #E18882;
		}
	</style>
</head>
<body>
<table>
<thead>
	<tr>
		<th align="left">ID</th>
		<th align="left">Nombre</th>
		<th align="left">E-Mail</th>		
		<th align="left">Asistir&aacute;</th>
		<th align="left">Invitados</th>
		<th align="left" class="comments">Comentarios</th>
	</tr>
</thead>
<tbody>

<?php 
	$con = new mysqli("127.0.0.1:3306", "root", "", "wedding_web");
    $sql = 'SELECT ID, Name, Email, Attending, Guests, Comments  FROM wedding_web.rsvp';
    $query = $con->prepare($sql);

    if($query->execute() == TRUE) {
    	$query->bind_result($id, $name, $email, $attending, $guests, $comments);
    	while($query->fetch()) {
    		if($attending == 1)
    			$attending = "<td align='center' class='yes'>si</td>";
    		else 
    			$attending = "<td align='center' class='no'>no</td>";
    		printf("<tr><td>%s</td> <td>%s</td> <td>%s</td> %s <td align='center'>%s</td> <td>%s</td><tr>\r\n", $id, $name, $email, $attending, $guests, $comments);
    	}
    } else {
    	echo "Error";
    }
?>

</tbody>
</table>
</body>
</html>