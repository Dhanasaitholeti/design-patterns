import { Car } from "./cars/car";
import { Diesel, Electric, Gasoline } from "./cars/fuel";
import {
  AutomaticTransmission,
  ManualTransmission,
  SemiAutomaticTransmission,
} from "./cars/transmission";

const manualCar = new Car(new ManualTransmission(), new Gasoline());
manualCar.changeGear();

const automaticCar = new Car(new AutomaticTransmission(), new Electric());
automaticCar.changeGear();

const semiAutomaticCar = new Car(new SemiAutomaticTransmission(), new Diesel());
semiAutomaticCar.changeGear();

manualCar.setTransmission(new AutomaticTransmission());
semiAutomaticCar.setFuel(new Electric());

manualCar.changeGear();
semiAutomaticCar.refuel();
