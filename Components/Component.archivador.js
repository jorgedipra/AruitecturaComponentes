class archivador {
    guardar() {

        function save(filename, text) {
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }
        var text = document.getElementById("text-val").value;
        var archivo = document.getElementById("txt-archive").value;
        var filename = archivo + ".txt";

        save(filename, text);
    }


}