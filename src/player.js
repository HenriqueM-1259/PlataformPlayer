class player extends playerConfig{

    constructor(color) {
        super()
        this.color = color
        this.Inputs = new inputsConfig()
        this.playerSprite = new playerSpriteConfig(this)
        this.tecla = new teclaConfig()
        this.Plataformsel = null
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
        try {
            if(this.Plataformsel != null){
                if(this.pos.Y + this.length.Y > this.Plataformsel.pos.Y){
                    this.velocity = 0;
                    this.pos.Y = this.Plataformsel.pos.Y - this.length.Y
                }
            }
        } catch (error) {
            
        }
        
    }

    isColliderPrataform(plataform){

        for (let i = 0; i < plataform.length; i++) {
           console.log("y: " + this.pos.Y + this.length.Y >= plataform[i].pos.Y - plataform[i].length.Y)
           console.log("x: " + this.pos.X + this.length.X >= plataform[i].pos.X - plataform[i].length.X)

           if (this.pos.Y + this.length.Y >= plataform[i].pos.Y &&
            this.pos.Y + this.length.Y < plataform[i].pos.Y + plataform[i].length.Y &&
            this.pos.X + (this.length.X / 2) >= plataform[i].pos.X &&
            this.pos.X +  (this.length.X / 2)<= plataform[i].length.X
                ) {
                this.Plataformsel = plataform[i]
                
            }else if(this.pos.Y + this.length.Y < plataform[i].pos.Y + plataform[i].length.Y){
                this.Plataformsel = null
            }
            
            
            
        }

       
    }

    Drawn(){
        this.render.clearRect(0,0,window.innerWidth,window.innerHeight)
       
        //this.render.fillStyle = 'red'
        //this.render.fillRect(this.pos.X,this.pos.Y,this.length.X,this.length.Y)
        this.playerSprite.Drawn()
    }
    jump() {
        try {
            if (this.pos.Y + this.length.Y >= this.Plataformsel.pos.Y) {
                this.velocity = -20;
            }
        } catch (error) {
            
        }
       
      }

    isMove(tecla){
        //console.log(tecla)
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