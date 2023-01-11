class fase extends canvasConfig{
    constructor(){
        super()
        this.ListPlataformMap = [{0: new plataformaBasica({X:0,Y:200},{X:950,Y:20})},
            {0: new plataformaMoveY({X:600,Y:500},{X:50,Y:20})},
            {0: new plataformaMoveY({X:800,Y:500},{X:50,Y:20})},
            {0: new plataformaMoveY({X:200,Y:500},{X:50,Y:20})},
           
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