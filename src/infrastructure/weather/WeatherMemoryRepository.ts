import { Service } from "typedi";
import { IWeatherRepository, RepositoryTokens } from "../../application";
import { TemperatureUnit, Weather } from "../../domain";

@Service({ name: RepositoryTokens.WeatherMemoryRepository.name })
export class WeatherMemoryRepository implements IWeatherRepository {
  private cache: Weather[] = [
    new Weather(25, TemperatureUnit.Celsius, "Beograd"),
    new Weather(27, TemperatureUnit.Celsius, "Novi Sad"),
    new Weather(13, TemperatureUnit.Celsius, "Beograd"),
    new Weather(14, TemperatureUnit.Celsius, "Beograd"),
    new Weather(21, TemperatureUnit.Celsius, "Novi Sad"),
    new Weather(17, TemperatureUnit.Celsius, "Subotica"),
  ];

  public async findWeatherByCity(city: string): Promise<Weather[]> {
    return this.cache.filter((weather: Weather) => weather.city === city);
  }
}
