class fase extends canvasConfig{
    constructor(){
        super()
        this.ListPlataformMap = [{0: new plataformaBasica({X:0,Y:200},{X:150,Y:20})},
            {0: new plataformaMoveX({X:300,Y:200},{X:150,Y:20})},
            //{0: new plataformaMoveX({X:600,Y:200},{X:150,Y:20})},
            {0: new plataformaMoveY({X:600,Y:300},{X:150,Y:20})}
           
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