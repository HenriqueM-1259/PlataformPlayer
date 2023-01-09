class playerSpriteConfig extends canvasConfig {
    constructor(player) {
        super()
        this.player = player
        this.image = new Image()
        this.image.src = "./src/img/Player/PlayerDefault.png"
        this.pos = {
            X: 0, Y: 0
        }
        this.length = {
            X: 64, Y: 64
        }
        this.frame = {
            X: 1,
            Y: 1
        }
        this.quantidadeFrame = 10;
        this.FrameFunction = setInterval(() => {
           this.isFrame()
       }, 100);
    }
    Update() {
        this.setFrame()
        this.isPlayerMoveSprite()
    }

    Drawn() {
        this.render.drawImage(this.image, 64* this.frame.X, 1* this.frame.Y, 64, 66, this.pos.X - 25, this.pos.Y, 100, 100)
    }
    
    isPlayerMoveSprite() {
        this.pos = this.player.pos
    }
    setFrame() {
        try {

            if (this.player.tecla.w) {

            }

            if (this.player.tecla.a) {
                console.log(this.frame.Y)
                this.quantidadeFrame = 10
                this.image.src = "./src/img/Player/PlayerIdller.png"
                this.frame.Y = 200
            }//else this.image.src = "./src/img/Player/PlayerDefault.png"

            if (this.player.tecla.d) {
                this.quantidadeFrame = 10
                this.image.src = "./src/img/Player/PlayerIdller.png"
                this.frame.Y = 1
            }
            if (this.player.tecla.f) {
                
                    this.quantidadeFrame = 10
                    this.image.src = "./src/img/Player/PlayerDash.png"
                    //this.frame.Y = 1 
                    this.player.frameSetX = this.frame.X;
                
               
            }

            if(!(this.player.tecla.w) && !(this.player.tecla.a) 
            && !(this.player.tecla.s) && !(this.player.tecla.d )
                && !(this.player.tecla.f) ){
                this.image.src = "./src/img/Player/PlayerDefault.png"
            }
            
          
        } catch (error) {

        }
    }
    DashTrue(){
       
    }
    isFrame(frame) {

        try {
            this.frame.X += 1
            if (this.frame.X >= this.quantidadeFrame) this.frame.X = 1  
        } catch (error) {

        }

    }
}
