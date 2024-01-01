import * as fs from "fs";
import * as path from "path";

const routeSync = (app: any, pathName: string) => {
  const routePath = path.join(__dirname, `../routes/v1/${pathName}`);

  fs.readdirSync(routePath).forEach((fileName) => {
    const routeFilePath = path.join(routePath, fileName);

    if (path.extname(fileName) === ".js") {
      const route = require(routeFilePath);
      app.use("/api/v1", route);
    }
  });
};

export default routeSync;
