class Player{
  constructor(initPack){
      this.x = initPack.x;
      this.y = initPack.y;
      this.id = initPack.id;
      this.mousePos = initPack.msp;
      this.dead = initPack.d;
  }
  updatePack(updatePack){
        if (updatePack.x != undefined){
            this.x = updatePack.x;
        }
        if (updatePack.y != undefined){
            this.y = updatePack.y;
        }
        if (updatePack.msp != undefined){
            this.mousePos = updatePack.msp;
        }
        if(updatePack.d != undefined){
            this.d = updatePack.d;
        }
    }
}