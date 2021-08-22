class editor {

    interface() {
        const elem = document.querySelector("#elem");
        const content = elem.innerHTML;

        elem.innerHTML = `
        <div class="container-fluid">
            <div class="row">
                <div class="col"></div>
                <div class="col text-center">
                <div class="card text-center">
                    <div class="card-header">
                        Editor - comprimir ZIP
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Nombre de archivo</h5>
                        <input type="text" id="txt-archive"  value="arhivo" /><br>
                        <h5 class="card-title">Contenido:</h5>
                        <textarea id="text-val" rows="4">Este es el contenido del archivo</textarea><br/>
                        <p class="card-text">Ejemplo de Arquitectura por componentes.</p>
                        <a href="#" id="dwn-btn" onclick="activador()" class="btn btn-primary">Descargar como .txt</a>
                        <a href="#" id="dwn-btn" onclick="comprimir()"  class="btn btn-primary">Descargar como .zip</a>
                    </div>
                    <div class="card-footer text-muted">
                    @jorgedipra
                    </div>
                    </div>

                </div>
                <div class="col"></div>
            </div>
        </div>
        
        `;
        return this;
    }

}