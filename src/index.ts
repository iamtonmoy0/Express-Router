import * as fs from "fs";
import * as path from "path";

export const routeSync = (app: any, pathName: string, baseRoute: string) => {
  fs.readdirSync(pathName).forEach((fileName) => {
    const routeFilePath = path.join(pathName, fileName);

    const route = require(routeFilePath);
    app.use(baseRoute, route);
  });
};
