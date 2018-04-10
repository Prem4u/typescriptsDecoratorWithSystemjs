import {Car,ModelX} from "./car";

interface CarOptions{
  getCost(car:Car):number;
}


export class MusicSystem implements CarOptions {
  

  constructor(public car:Car){
    
  }
  getCost(): number {
   
    return this.car.getCost()+20;
  }
  getDiscription():string{
    return this.car.getDiscription()+",Music system configured.";
  }

  
}

export class AutoPilot implements CarOptions {
  
   
  
  constructor(public car:Car){
    
  }
  getCost(): number {
   
    return this.car.getCost()+60;
  }
  
  getDiscription():string{
    return this.car.getDiscription()+",AutoPilot configured.";
  }

  
}





