class plataformaMoveX extends plataformaBasica {

    constructor(pos,length){
        super(pos,length)
        this.moveNumber = 100
        this.move ={
            Xl:true,
            Xr:false
        }
        this.FrameFunction = setInterval(() => {
            this.plataforMove()
        }, 60);
     }

    Update(){
       this.plataforMove()
    }
    plataforMove(){
        if(this.move.Xl){
            this.pos.X++
            this.moveNumber--
            if(this.moveNumber == 0){
                this.move.Xl = false
                this.move.Xr = true
            }
        }
        if(this.move.Xr){
            this.pos.X--
            this.moveNumber++
            if(this.moveNumber == 100){
                this.move.Xl = true
                this.move.Xr = false
            }
        }
    }
}