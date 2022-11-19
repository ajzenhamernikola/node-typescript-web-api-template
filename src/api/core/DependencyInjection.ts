import { useContainer } from "routing-controllers";
import Container from "typedi";
import { RepositoryTokens } from "../../application";
import { WeatherMemoryRepository } from "../../infrastructure";

export class DependencyInjection {
  public static registerServices(): void {
    useContainer(Container);

    Container.set(
      RepositoryTokens.WeatherMemoryRepository,
      new WeatherMemoryRepository()
    );
  }
}
