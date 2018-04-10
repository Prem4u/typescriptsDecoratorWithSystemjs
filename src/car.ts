export interface  Car{
   discription: string;
   cost: number;
   getDiscription(): string;
   getCost(): number;
  }

export class ModelX implements Car {
  public discription:string="ModelX"
  
  constructor(public cost: number) {
    
  }
  getCost():number {
   return this.cost;
  }
  
  getDiscription(): string {
    return this.discription;
  }

}

export class ModelS implements Car {
  public discription:string="ModelS"
  
  constructor(public cost: number) {
    
  }
  getCost():number {
   return this.cost;
  }
  
  getDiscription(): string {
    return this.discription;
  }

}

