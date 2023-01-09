class plataformaMoveY extends plataformaBasica {

    constructor(pos,length){
        super(pos,length)
        this.moveNumber = 100
        this.move ={
            Yl:true,
            Yr:false
        }
        this.FrameFunction = setInterval(() => {
            this.plataforMove()
        }, 60);
     }

    Update(){
       this.plataforMove()
    }
    plataforMove(){
        if(this.move.Yl){
            this.pos.Y++
            this.moveNumber--
            if(this.moveNumber == 0){
                this.move.Yl = false
                this.move.Yr = true
            }
        }
        if(this.move.Yr){
            this.pos.Y--
            this.moveNumber++
            if(this.moveNumber == 100){
                this.move.Yl = true
                this.move.Yr = false
            }
        }
    }
}