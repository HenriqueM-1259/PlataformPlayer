class player extends playerConfig{

    constructor(color) {
        super()
        this.color = color
        this.Inputs = new inputsConfig()
        this.playerSprite = new playerSpriteConfig(this)
        this.tecla = new teclaConfig()
    }
  
    Update(){
        this.applyGravity();
        this.updatePlayerPosition();
        this.PP();
        this.isMove(this.Inputs.UpdateInput())
        this.playerSprite.Update()
    }

    //Implementacao da gravidade
    updatePlayerPosition(){
        this.pos.Y += this.velocity;
    }

    applyGravity(){
        this.velocity += this._GRAVIDADE
    }

    PP(){
        if(this.pos.Y + this.leght.Y > window.innerHeight){
            this.pos.Y = window.innerHeight - this.leght.Y
        }
    }

    Drawn(){
        this.render.clearRect(0,0,window.innerWidth,window.innerHeight)
       
        //this.render.fillStyle = 'red'
        //this.render.fillRect(this.pos.X,this.pos.Y,this.leght.X,this.leght.Y)
        this.playerSprite.Drawn()
    }
    jump() {
        debugger
        if (this.pos.Y + this.leght.Y >= window.innerHeight) {
            this.velocity = -20;
        }
      }

    isMove(tecla){
        this.tecla = new teclaConfig()
        this.tecla = tecla
        if(tecla.a == true){
            this.pos.X -= 15
        }
        if(tecla.d == true){
            this.pos.X += 15
            
        }
        if(tecla.w == true){
           this.jump()
        }
        if(tecla.s == true){
           
            
        }
        
    }
       
       
}