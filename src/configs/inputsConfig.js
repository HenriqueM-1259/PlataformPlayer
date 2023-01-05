class inputsConfig {
    constructor() {
        this.tecla = new teclaConfig();
    }

    UpdateTecla(tecla){
        console.log(tecla)
        if(tecla != null){
            debugger
            this.tecla = tecla
        }
       
    }
    UpdateInput() {
        var teclaAll = null
        window.onkeyup = function (e) {
            if (e.key == 'a') {
                teclaAll.tecla.press.a = false
            }
            if (e.key == 's') {
                teclaAll.tecla.press.s = false
            }
            if (e.key == 'd') {
                teclaAll.tecla.press.d = false
            }
            if (e.key == 'w') {
                teclaAll.tecla.press.w = false
            }

        }

        window.onkeypress = function (e) {
            teclaAll = new teclaConfig()
            if (e.key == 'a') {
                teclaAll.tecla.press.a = true
            }
            if (e.key == 's') {
                teclaAll.tecla.press.s = true
            }
            if (e.key == 'd') {
                teclaAll.tecla.press.d = true
            }
            if (e.key == 'w') {
                teclaAll.tecla.press.w = true
            }
        }

        
            
        
         
    }

}