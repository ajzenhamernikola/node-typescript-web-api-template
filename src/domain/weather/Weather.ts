import { TemperatureUnit } from "./TemperatureUnit";

export class Weather {
  public constructor(
    public readonly degrees: number,
    public readonly unit: TemperatureUnit,
    public readonly city: string
  ) {}

  public toString(): string {
    return `${this.degrees} ${this.unit}`;
  }
}
