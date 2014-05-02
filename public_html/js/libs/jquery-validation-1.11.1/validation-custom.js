jQuery.extend(jQuery.validator.messages, {
    required: "requerido",
    remote: "corrije este campo.",
    email: "ingresa un correo v&aacute;lido.",
    url: "ingresa un URL v&aacute;lido.",
    date: "ingresa una fecha v&aacute;lida.",
    dateISO: "ingresa una fecha v&aacute;lida(ISO).",
    number: "ingresa un n&uacute;mero v&aacute;lido.",
    digits: "ingresa solo d&iacute;gitos.",
    creditcard: "ingresa un n&uacute;mero de tarjeta v&aacute;lido.",
    equalTo: "ingresa el mismo valor otra vez.",
    accept: "ingresa un valor con la misma extensi&oacute;n.",
    maxlength: jQuery.validator.format("no ingreses m&aacute;s de {0} caracteres."),
    minlength: jQuery.validator.format("ingresa al menos {0} caracteres."),
    rangelength: jQuery.validator.format("ingresa un valor con una longitud entre {0} y {1} caracteres."),
    range: jQuery.validator.format("ingresa un valor entre {0} y {1}."),
    max: jQuery.validator.format("ingresa un valor menor o igual a {0}."),
    min: jQuery.validator.format("ingresa un valor mayor o igual a {0}.")
});