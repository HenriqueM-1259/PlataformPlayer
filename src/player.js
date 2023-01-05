class player extends playerConfig{

    constructor(color) {
        super()
        this.color = color
        this.Inputs = new inputsConfig()
    }

    
    Update(){

        this.isMove(this.Inputs.UpdateInput())
        
    }

    Drawn(){
        this.render.fillStyle =  this.color
        this.render.fillRect(this.pos.X,this.pos.Y,this.leght.X,this.leght.Y) 
    }

    isMove(tecla){
        console.log(tecla.tecla)
    }
       
       
}