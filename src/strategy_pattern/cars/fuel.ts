export interface FuelStrategy {
  refuel(): void;
}

export class Gasoline implements FuelStrategy {
  refuel(): void {
    console.log("Refueling gasoline...");
  }
}

export class Diesel implements FuelStrategy {
  refuel(): void {
    console.log("Refueling diesel...");
  }
}

export class Electric implements FuelStrategy {
  refuel(): void {
    console.log("Charging the battery...");
  }
}
