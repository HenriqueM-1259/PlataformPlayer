class plataformaBasica extends elementConfig{
    constructor(pos,length){
       super(pos,length)
       this.Sprite = new plataformaBasicaSpriteConfig(this)
    }

    Update(){

    }

    Drawn(){
        this.Sprite.Drawn();
        this.render.fillStyle =  "blue"
        //this.render.fillRect(this.pos.X,this.pos.Y,this.length.X,this.length.Y)
    }
}