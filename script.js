
        // Función para mostrar la ventana emergente de cookies al cargar la página
        window.onload = function() {
            mostrarVentanaCookies();
        };

        // Función para mostrar la ventana emergente de cookies
        function mostrarVentanaCookies() {
            var aceptarCookies = confirm("¿Desea aceptar el uso de cookies?");
            if (aceptarCookies) {
                // Aquí puedes agregar el código para aceptar las cookies
                alert("Cookies aceptadas. Gracias por tu aceptación.");
            } else {
                // Aquí puedes agregar el código para rechazar las cookies
                alert("Cookies rechazadas. Algunas funcionalidades pueden verse afectadas.");
            }
        }
