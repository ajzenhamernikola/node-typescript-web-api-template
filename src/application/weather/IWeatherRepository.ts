import { Weather } from "../../domain";

export interface IWeatherRepository {
  findWeatherByCity(city: string): Promise<Weather[]>;
}
