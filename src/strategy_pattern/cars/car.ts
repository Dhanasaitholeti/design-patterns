import { TransmissionStrategy } from "./transmission";

export class Car {
  private transmission: TransmissionStrategy;

  constructor(transmission: TransmissionStrategy) {
    this.transmission = transmission;
  }

  setTransmission(transmission: TransmissionStrategy): void {
    this.transmission = transmission;
  }

  changeGear(): void {
    this.transmission.changeGear();
  }
}
