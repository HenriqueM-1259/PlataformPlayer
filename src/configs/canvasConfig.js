class canvasConfig{
    constructor(){
        //#region Inicia o canvas
        this.canvas = document.getElementById('canvasId')
        this.render = this.canvas.getContext("2d")
        this.configure()
        //#endregion

      
    }
    configure(){
        //#region configura o canvas
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.render.save()
        //#endregion
    }
}