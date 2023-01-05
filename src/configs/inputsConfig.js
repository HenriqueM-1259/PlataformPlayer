var teclaAll = new teclaConfig()
class inputsConfig {
    UpdateInput() {
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

        return teclaAll.tecla.press
    }

}