class world extends worldConfig{
    constructor(fase,player){
        super()
        this.fase = fase
        this.player = player
    }

    Update(){
        this.fase.Update()
        this.player.Update()
    }

    Draw(){
        this.fase.Drawn()
        this.player.Drawn()
    }

}