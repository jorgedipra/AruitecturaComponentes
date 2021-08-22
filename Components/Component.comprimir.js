class Compresor {
    zip() {
        var zip = new JSZip();
        var text = document.getElementById("text-val").value;
        var archivo = document.getElementById("txt-archive").value;

        zip.file(archivo + ".txt", text);

        zip.generateAsync({
                type: "blob"
            })
            .then(function(content) {
                saveAs(content, archivo + ".zip");
            });
    }
}