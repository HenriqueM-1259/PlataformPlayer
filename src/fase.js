class fase extends canvasConfig{
    constructor(){
        super()
        this.elementPlataform = []
        this.addPlataforms();
    }
    
    Update(){

    }

    Drawn(){
        this.elementPlataform.forEach((obj) => {
            obj.Drawn()
            //console.log(obj)
        })
        
    }
    addPlataforms(){
        this.elementPlataform.push(new plataformaBasica({X:10,Y:400},{X:500,Y:50}))
        this.elementPlataform.push(new plataformaBasica({X:10*8,Y:270},{X:50,Y:50}))
    }
}