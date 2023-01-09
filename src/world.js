class world extends worldConfig{
    constructor(fase,player){
        super()
        this.fase = fase
        this.player = player
        this.colider = new coliderConfig()
    }

    Update(){
        this.player.Update()
        this.fase.Update()
        
        for (let i = 0; i < this.fase.ListPlataformMap.length; i++) {
            if(this.colider.CollisionDetectionPlayerPlataform(this.player,this.fase.ListPlataformMap[i][0])){
                this.player.pos.Y = this.fase.ListPlataformMap[i][0].pos.Y - this.player.length.Y
                this.player.velocity = 0
            }
               // this.player.velocity = -20
            
            
        }
        
       
    }

    Draw(){
        this.player.Drawn()
        this.fase.Drawn()
    }

}