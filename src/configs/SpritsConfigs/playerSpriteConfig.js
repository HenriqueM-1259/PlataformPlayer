class playerSpriteConfig extends canvasConfig {
    constructor(player) {
        super()
        this.player = player
        this.image = new Image()
        this.image.src = ""
        this.pos = {
            X: 0, Y: 0
        }
        this.lenght = {
            X: 64, Y: 64
        }
        this.frame = {
            X: 1,
            Y: 1
        }
        this.FrameFunction = setInterval(() => {
            this.isFrame()
        }, 100);
    }
    Update() {
        this.setFrame()
        this.isPlayerMoveSprite()
    }

    Drawn() {
        this.render.drawImage(this.image, 64 * this.frame.X, 1* this.frame.Y, 64, 64, this.pos.X, this.pos.Y, 64, 64)
    }

    isPlayerMoveSprite() {
        this.pos = this.player.pos
    }
    setFrame() {
        try {

            if (this.player.tecla.w) {

            } else {
                this.image.src = "./src/img/Player/PlayerDefault.png"
            }
            if (this.player.tecla.a) {
                this.image.src = "./src/img/Player/PlayerIdller.png"
                this.frame.Y = 200
            }
            if (this.player.tecla.s) {
                this.frame.Y += 1
            }
            if (this.player.tecla.d) {
                this.image.src = "./src/img/Player/PlayerIdller.png"
                this.frame.Y = 2
            }
        } catch (error) {

        }
    }
    isFrame(frame) {

        try {
            this.frame.X += 1
            if (this.frame.X >= 10) this.frame.X = 1  
        } catch (error) {

        }

    }
}
