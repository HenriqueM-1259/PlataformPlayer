class playerSpriteConfig extends canvasConfig{
    constructor(){
        super()
        this.image = new Image()
        this.image.src = "./src/img/Player/Player.png"
        this.pos = {
            X:0,Y:0
        }
        this.lenght = {
            X:64,Y:64
        }
        this.frame = 1
        this.FrameFunction = setInterval(() => {
            this.isCountFrameDefault()
        }, 100);
    }


    Update(player){  
        
        this.isPlayerMoveSprite(player.pos)
        this.isUpdateSpritePlayer(player)
    }

    Drawn(){
        this.render.drawImage(this.image,64 * this.frame, 64, 64, 64, this.pos.X,this.pos.Y - 20, this.lenght.X, this.lenght.Y)
    }

    isPlayerMoveSprite(pos){
        this.pos = pos
    }
    isUpdateSpritePlayer(player){

        
    }
    isCountFrameDefault(){
        //console.log("1")
        this.frame += 1
        if(this.frame >= 11)  this.frame = 1
    }
    
}
