class world extends worldConfig{
    constructor(fase,player){
        super()
        this.fase = fase
        this.player = player
        
    }

    Update(){
        
        this.player.Update()
       // this.fase.Update()
    }

    Draw(){
        this.render.save()
        this.player.Drawn()
        //this.fase.Drawn()
    }

}