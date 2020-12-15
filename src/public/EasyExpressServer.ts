import cors from 'cors';
import express from 'express';
import { IEasyExpressAttachableModule } from './IEasyExpressAttachableModule';

const DEFAULT_PORT = 8000;

// A server object that is used to encapsulate an express application.
// It offers all the methods of an express app, but is extendable with
// other easy-express packages.
export class EasyExpressServer {
  public instance: express.Application;

  // Initializes this.app to be a new express application.
  constructor() {
    this.instance = this.createExpressApp();
  }

  // Returns an express application with basic settings.
  private createExpressApp() {
    const expressApp = express();
    expressApp.use(express.json({ limit: '50mb' }));
    expressApp.use(express.urlencoded({ limit: '50mb' }));
    expressApp.use(cors());
    return expressApp;
  }

  // starts the app and runs on given port
  public start(port?: number) {
    if (port === undefined) {
      port = process.env.PORT !== undefined ? Number(process.env.PORT) : DEFAULT_PORT;
    }

    this.instance.listen({ port }, () => console.log(`✅ Server listening on port ` + port));
  }

  // adds the module to this server.
  // It should be an attachable module
  public addModule(module: IEasyExpressAttachableModule) {
    module.attachTo(this);
  }
}
