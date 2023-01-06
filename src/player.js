class player extends playerConfig{

    constructor(color) {
        super()
        this.color = color
        this.Inputs = new inputsConfig()
        this.playerSprite = new playerSpriteConfig(this)
        this.tecla = new teclaConfig()
        this.gravidade = 3.2
    }
  
    Update(){
        this.isGravity()
        this.isMove(this.Inputs.UpdateInput())
        this.playerSprite.Update()
    }

    Drawn(){
        this.render.clearRect(0,0,window.innerWidth,window.innerHeight)
       
        //this.render.fillStyle = 'red'
        //this.render.fillRect(this.pos.X,this.pos.Y,this.leght.X,this.leght.Y)
        this.playerSprite.Drawn()
    }

    isGravity(){
        if(!(this.leght.Y + this.pos.Y >= window.innerHeight)){
            this.gravidade =3
            this.pos.Y += this.velocity * this.gravidade + 1
        }
        else{
            this.gravidade = 0
        }

    }
    isMove(tecla){
        this.tecla = new teclaConfig()
        this.tecla = tecla
        if(tecla.a == true){
            this.pos.X -= this.velocity * 1.5
        }
        if(tecla.d == true){
            this.pos.X += this.velocity * 1.5
            
        }
        if(tecla.w == true){
            if(this.gravidade == 0){
                this.pos.Y -= (this.velocity * 15)
            }
        }
        if(tecla.s == true){
            this.pos.Y += this.velocity * 1.5
            
        }
        
    }
       
       
}
