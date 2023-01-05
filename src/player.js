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
        this.render.clearRect(0,0,window.innerWidth,window.innerHeight)
        this.render.fillStyle =  this.color
        this.render.fillRect(this.pos.X,this.pos.Y,this.leght.X,this.leght.Y) 
    }

    isMove(tecla){
        console.log(tecla.a)
        if(tecla.a == true){
            this.pos.X -= this.velocity * 1.5
        }
        if(tecla.d == true){
            this.pos.X += this.velocity * 1.5
            
        }
        if(tecla.w == true){
            this.pos.Y -= this.velocity * 1.5
            
        }
        if(tecla.s == true){
            this.pos.Y += this.velocity * 1.5
            
        }
    }
       
       
}