// Agrega la clase "responsive" al elemento nav a fin de desplegar el menú responsivo

function menuResponsivo() {
    
    var x = document.getElementById("barraNav");

    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
        x.className = "topnav";
    }
}