import { Token } from "typedi";
import { IWeatherRepository } from "../weather/IWeatherRepository";

export class RepositoryTokens {
  public static readonly WeatherMemoryRepository =
    new Token<IWeatherRepository>("WeatherMemoryRepository");
}
