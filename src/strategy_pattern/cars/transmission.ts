export interface TransmissionStrategy {
  changeGear(): void;
}

export class ManualTransmission implements TransmissionStrategy {
  changeGear(): void {
    console.log("Changing gear manually.");
  }
}

export class AutomaticTransmission implements TransmissionStrategy {
  changeGear(): void {
    console.log("Changing gear automatically.");
  }
}

export class SemiAutomaticTransmission implements TransmissionStrategy {
  changeGear(): void {
    console.log("Changing gear semi-automatically.");
  }
}
