class fase extends canvasConfig{
    constructor(){
        super()
        this.ListPlataformMap = [{0: new plataformaBasica({X:10,Y:200},{X:150,Y:20})},
            {0: new plataformaBasica({X:300,Y:200},{X:150,Y:20})},
            {0: new plataformaMove({X:600,Y:200},{X:150,Y:20})}
           
        ]
    }
   
    Update(){
       for (let i = 0; i < this.ListPlataformMap.length; i++) {
       
        this.ListPlataformMap[i][0].Update()
        
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