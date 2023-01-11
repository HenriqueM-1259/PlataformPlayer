class plataformaBasicaSpriteConfig extends canvasConfig {
    constructor(plataform){
        super()
        this.plataform = plataform
        this.image = new Image()
        this.image.src = "./src/img/Plataform/tileset.png"
        this.pos = {
            X: 0, Y: 0
        }
        this.length = {
            X: 10, Y: 10
        }
    }
    
    Update(){

    }

    Drawn(){

        let count = this.plataform.length.X / 10
        for (let i = 0; i < count; i++) {
            
            let pulaDrawn = 10 * i
          
             if(i > 1){
                this.render.drawImage(this.image, 3420,200 , 128, 128, this.plataform.pos.X + pulaDrawn, this.plataform.pos.Y, 32, 32)
            }else if (i <= 1){
                this.render.drawImage(this.image, 3420,200 , 128, 128, this.plataform.pos.X + pulaDrawn, this.plataform.pos.Y, 32, 32)
            }
            
        }
       
      
   
    }
}