document.addEventListener("DOMContentLoaded", function (event) {

    //Obtengo la posicion del objeto a cargar desde la url
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')

    //Obtengo el usuario desde el localstorage con la posicion
    let usuario = JSON.parse(localStorage.getItem('usuarios'))[id];

    //Obtengo los input para agregar su valor
    document.getElementById("nombre").value = usuario.nombre;
    document.getElementById("apellido").value = usuario.apellido;

});