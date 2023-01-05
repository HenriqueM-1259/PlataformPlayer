//#region Inicia Entradas de teclado e mouse
const input = new inputsConfig()
input.Update()
//#endregion

const Fase = new fase()
const Player = new player("red")
const World = new world(Fase,Player)

function Update(){
    World.Update();
    World.Draw();
}


setInterval(() => {
    Update()
}, 60);

