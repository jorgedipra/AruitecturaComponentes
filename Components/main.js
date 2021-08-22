class Component {

    CEditor() {
        let obj = new editor();
        obj.interface();
        console.log("cargo componete Editor");
    }
    CComprimir() {
        console.log("cargo componete Compresor");
    }
    CArchivar() {
        console.log("cargo componete Archivador")
    }
}

let obj = new Component();

importJS("Components/Component.editor.js", obj.CEditor);
importJS("Components/Component.comprimir.js", obj.CComprimir);
importJS("Components/Component.archivador.js", obj.CArchivar);



function comprimir() {
    let obj = new Compresor();
    obj.zip();
}

function activador() {
    let obj = new archivador();
    obj.guardar();
}