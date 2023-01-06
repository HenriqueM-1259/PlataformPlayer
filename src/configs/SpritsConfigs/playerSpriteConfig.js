class playerSpriteConfig extends canvasConfig{
    constructor(player){
        super()
        this.player = player
        this.image = new Image()
        this.image.src = "./src/img/Player/Player.png"
        this.pos = {
            X:0,Y:0
        }
        this.lenght = {
            X:64,Y:64
        }
        this.frame = {
            X:1,
            Y:1
        }
        this.FrameFunction = setInterval(() => {
            this.isFrame()
        }, 100);
    }
    Update(){  
        this.setFrame()
        this.isPlayerMoveSprite()
    }

    Drawn(){
        this.render.drawImage(this.image,64 * this.frame.X, 64 * this.frame.Y, 64, 64, this.pos.X,this.pos.Y,64, 64)
    }

    isPlayerMoveSprite(){
        this.pos = this.player.pos
    }
    setFrame(){
        try {
            
            if(this.player.tecla.w){
                this.frame.Y += 1
            }else this.frame.Y = 1
            if(this.player.tecla.a){
                this.invertframe()
                this.frame.Y = 2
            }
            if(this.player.tecla.s){
                this.frame.Y += 1
            }
            if(this.player.tecla.d){
                this.frame.Y = 2
            }
            console.log(this.player.tecla)
        } catch (error) {
            
        }
    }
    isFrame(){
        
        try {
            console.log(this.player.tecla)
            this.frame.X += 1
            if(this.frame.X >= 11)  this.frame.X = 1
        } catch (error) {
            
        }
        
   
       
    }
    invertframe(){
        this.render.translate(window.innerWidth, window.innerHeight);
        this.render.scale(-1,1)
        this.render.drawImage(this.image,64 * this.frame.X, 64 * this.frame.Y, 64, 64, this.pos.X,this.pos.Y,64, 64)
        this.render.restore();
    }
}
