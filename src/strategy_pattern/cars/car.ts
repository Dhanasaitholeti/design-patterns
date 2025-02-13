import { FuelStrategy } from "./fuel";
import { TransmissionStrategy } from "./transmission";

export class Car {
  private transmission: TransmissionStrategy;
  private fuel: FuelStrategy;

  constructor(transmission: TransmissionStrategy, fuel: FuelStrategy) {
    this.transmission = transmission;
    this.fuel = fuel;
  }

  setTransmission(transmission: TransmissionStrategy): void {
    this.transmission = transmission;
  }

  setFuel(fuel: FuelStrategy): void {
    this.fuel = fuel;
  }

  refuel(): void {
    this.fuel.refuel();
  }

  changeGear(): void {
    this.transmission.changeGear();
  }
}
