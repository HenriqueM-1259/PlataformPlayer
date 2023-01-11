class player extends playerConfig{

    constructor(color) {
        super()
        this.color = color
        this.Inputs = new inputsConfig()
        this.playerSprite = new playerSpriteConfig(this)
        this.tecla = new teclaConfig()
        this.isJump = null;
        this.teclaPositionView =  new teclaConfig()
            
        
    }
  
    Update(){
        this.updatePlayerPosition();
        this.applyGravity();
        
        //this.PP();
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

    Drawn(){
        this.render.clearRect(0,0,window.innerWidth,window.innerHeight)
       
       // this.render.fillStyle = 'red'
        //this.render.fillRect(this.pos.X,this.pos.Y,this.length.X,this.length.Y)
        this.playerSprite.Drawn()
    }
    jump() {
        
       if(this.isJump){
        this.isJump = false
        this.velocity = -20
       }
        
    }

    isMove(tecla){
        //console.log(tecla)
        this.tecla = new teclaConfig()
        this.tecla = tecla
        if(tecla.a == true){
            this.teclaPositionView.tecla.press.a = true
            this.teclaPositionView.tecla.press.d = false
            this.pos.X -= 15
        }
        if(tecla.d == true){
            this.teclaPositionView.tecla.press.a = false
            this.teclaPositionView.tecla.press.d = true
            this.pos.X += 15
        }
        if(tecla.w == true){
           this.jump()
        }
        if(tecla.s == true){
           
            
        }
        if(tecla.f == true){
            console.log(this.frame)
            if(this.frame.X == 9){
                this.isTeleporte()
            }
                
            
                
        }
       
    }
       
    isTeleporte(){
        if(this.teclaPositionView.tecla.press.a){
            this.pos.X -= 300 
           // console.log(this.frameSetX)
        }else if(this.teclaPositionView.tecla.press.d){
            this.pos.X += 300 * 0.5
            //console.log(this.frameSetX)
        }
       
    }
}