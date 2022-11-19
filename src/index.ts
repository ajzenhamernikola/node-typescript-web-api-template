import { Express } from "express";
import "reflect-metadata";
import { createExpressServer } from "routing-controllers";
import { DependencyInjection, WeatherController } from "./api";

DependencyInjection.registerServices();

const app: Express = createExpressServer({
  cors: true,
  controllers: [WeatherController],
});

const port: number = 3000;
app.listen(port, () => {
  console.log("Server started!");
});
