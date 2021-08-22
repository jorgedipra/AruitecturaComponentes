function importarLib(directorio, url) {
    var s = document.createElement("script");
    s.src = directorio + "/" + url;
    document.querySelector("head").appendChild(s);
}


function importJS(nombre, callback) {
    var s = document.createElement("script");
    s.onload = callback;
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}