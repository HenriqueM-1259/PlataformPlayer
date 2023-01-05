class player extends playerConfig{

    constructor(color) {
        
        super()
        this.color = color
    }

    
    Update(){

    }

    Drawn(){
        this.render.fillStyle =  this.color
        this.render.fillRect(this.pos.X,this.pos.Y,this.leght.X,this.leght.Y) 
    }
}