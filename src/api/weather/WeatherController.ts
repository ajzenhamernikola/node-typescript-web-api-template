import { Get, JsonController, OnUndefined, Param } from "routing-controllers";
import { Service } from "typedi";
import { Weather } from "../../domain";
import { WeatherMemoryRepository } from "../../infrastructure";
import { RouteUrl } from "../core/RouteUrl";

@Service()
@JsonController(RouteUrl.Weather)
export class WeatherController {
  public constructor(private readonly repository: WeatherMemoryRepository) {}

  @Get("/:city")
  @OnUndefined(404)
  public async getByCity(@Param("city") city: string): Promise<Weather[]> {
    return this.repository.findWeatherByCity(city);
  }
}
