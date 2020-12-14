import cors from 'cors';
import express from 'express';
import { IRouterMatcher, RequestParamHandler, PathParams, IRoute } from 'express-serve-static-core';
import { Server } from 'http';
import { IEasyExpressModule } from '../IEasyExpressModule';

const DEFAULT_PORT = 8000;

// A server object that is used to encapsulate an express application.
// It offers all the methods of an express app, but is extendable with
// other easy-express packages.
export class EasyExpressServer {
  app: express.Application;

  // Initializes this.app to be a new express application.
  constructor() {
    this.app = this.createExpressApp();
  }

  // Returns an express application with basic settings.
  createExpressApp() {
    const expressApp = express();
    expressApp.use(express.json({ limit: '50mb' }));
    expressApp.use(express.urlencoded({ limit: '50mb' }));
    expressApp.use(cors());
    return expressApp;
  }

  // starts the app and runs on given port
  start(port?: number) {
    if (port === undefined) {
      port = process.env.PORT !== undefined ? Number(process.env.PORT) : DEFAULT_PORT;
    }

    this.app.listen({ port }, () => console.log(`✅ Server listening on port ` + port));
  }

  // adds the module to this server.
  // It should be an attachable module
  addModule(module: IEasyExpressModule) {
    module.attachTo(this);
  }

  // ================= implementations of interface =====================
  init(): void {
    this.app.init();
  }
  defaultConfiguration(): void {
    this.app.defaultConfiguration();
  }
  engine(
    ext: string,
    fn: (path: string, options: object, callback: (e: any, rendered?: string) => void) => void,
  ): this {
    this.app.engine(ext, fn);
    return this;
  }
  set(setting: string, val: any): this {
    this.app.set(setting, val);
    return this;
  }
  get!: ((name: string) => any) & IRouterMatcher<this, any>;
  param(name: string | string[], handler: RequestParamHandler): this;
  param(callback: (name: string, matcher: RegExp) => RequestParamHandler): this;
  param(name: any, handler?: any) {
    this.app.param(name, handler);
    return this;
  }
  path(): string {
    return this.app.path();
  }
  enabled(setting: string): boolean {
    return this.app.enabled(setting);
  }
  disabled(setting: string): boolean {
    return this.app.disabled(setting);
  }
  enable(setting: string): this {
    this.app.enable(setting);
    return this;
  }
  disable(setting: string): this {
    this.app.disable(setting);
    return this;
  }
  render(name: string, options?: object, callback?: (err: Error, html: string) => void): void;
  render(name: string, callback: (err: Error, html: string) => void): void;
  render(name: any, options?: any, callback?: any) {
    this.app.render(name, options, callback);
  }
  listen(port: number, hostname: string, backlog: number, callback?: () => void): Server;
  listen(port: number, hostname: string, callback?: () => void): Server;
  listen(port: number, callback?: () => void): Server;
  listen(callback?: () => void): Server;
  listen(path: string, callback?: () => void): Server;
  listen(handle: any, listeningListener?: () => void): Server;
  listen(port?: any, hostname?: any, backlog?: any, callback?: any) {
    return this.app.listen(port, hostname, backlog, callback);
  }

  addListener(event: string | symbol, listener: (...args: any[]) => void): this {
    this.app.addListener(event, listener);
    return this;
  }
  once(event: string | symbol, listener: (...args: any[]) => void): this {
    this.app.once(event, listener);
    return this;
  }
  removeListener(event: string | symbol, listener: (...args: any[]) => void): this {
    this.app.removeListener(event, listener);
    return this;
  }
  off(event: string | symbol, listener: (...args: any[]) => void): this {
    this.app.off(event, listener);
    return this;
  }
  removeAllListeners(event?: string | symbol): this {
    this.app.removeAllListeners(event);
    return this;
  }
  setMaxListeners(n: number): this {
    this.app.setMaxListeners(n);
    return this;
  }
  getMaxListeners(): number {
    return this.app.getMaxListeners();
  }
  listeners(event: string | symbol): Function[] {
    return this.app.listeners(event);
  }
  rawListeners(event: string | symbol): Function[] {
    return this.app.rawListeners(event);
  }
  emit(event: string | symbol, ...args: any[]): boolean {
    return this.app.emit(event, args);
  }
  listenerCount(event: string | symbol): number {
    return this.app.listenerCount(event);
  }
  prependListener(event: string | symbol, listener: (...args: any[]) => void): this {
    this.app.prependListener(event, listener);
    return this;
  }
  prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this {
    this.app.prependOnceListener(event, listener);
    return this;
  }
  eventNames(): (string | symbol)[] {
    return this.app.eventNames();
  }
  route(prefix: PathParams): IRoute {
    return this.app.route(prefix);
  }
}
