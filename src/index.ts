import {Car,ModelX} from "./car";
import {MusicSystem,AutoPilot} from "./carDecorator";

let car:Car=new ModelX(300);
let musicDecorator=new MusicSystem(car);
console.log(musicDecorator.getDiscription());
console.log("Cost::"+musicDecorator.getCost());

let autopilotCar= new AutoPilot(car);
console.log(autopilotCar.getDiscription());
console.log("Cost::"+autopilotCar.getCost());