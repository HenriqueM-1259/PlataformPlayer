class coliderConfig{
    constructor(){
        
    }


    CollisionDetectionPlayerPlataform(objOne,objTwo){
        try {
            if (objOne.pos.X  < objTwo.pos.X + objTwo.length.X &&
                objOne.pos.X + objOne.length.X > objTwo.pos.X &&
                // Verifique se houve colisão no eixo y
                objOne.pos.Y < objTwo.pos.Y + objTwo.length.Y &&
                objOne.pos.Y + objOne.length.Y > objTwo.pos.Y
                ) {
              // Houve colisão
              return true;
            }
            // Não houve colisão
            return false;
        } catch (error) {
            
        }
        
    }
}