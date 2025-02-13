import { Car } from "./cars/car";
import {
  AutomaticTransmission,
  ManualTransmission,
  SemiAutomaticTransmission,
} from "./cars/transmission";

const manualCar = new Car(new ManualTransmission());
manualCar.changeGear(); 

const automaticCar = new Car(new AutomaticTransmission());
automaticCar.changeGear(); 

const semiAutomaticCar = new Car(new SemiAutomaticTransmission());
semiAutomaticCar.changeGear(); 

manualCar.setTransmission(new AutomaticTransmission());
manualCar.changeGear(); 
