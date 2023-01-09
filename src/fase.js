class fase extends canvasConfig{
    constructor(){
        super()
        this.ListPlataformMap = [{0: new plataformaBasica({X:10,Y:200},{X:150,Y:50})},
            {0: new plataformaBasica({X:400,Y:200},{X:150,Y:50})},
            {0: new plataformaBasica({X:600,Y:200},{X:150,Y:50})}
           
        ]
    }
   
    Update(){
       for (let i = 0; i < this.ListPlataformMap.length; i++) {
       
        console.log(this.ListPlataformMap[i])
        
       }
    }

    Drawn(){
        for (let i = 0; i < this.ListPlataformMap.length; i++) {
            this.ListPlataformMap[i][0].Drawn()
             
            }
        
    }
    addPlataforms(){
       
        
    }
}