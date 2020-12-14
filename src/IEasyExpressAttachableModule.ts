import { IEasyExpressModule } from './IEasyExpressModule';
import { EasyExpressServer } from './public/EasyExpressServer';

export interface IEasyExpressAttachableModule extends IEasyExpressModule {
  attachTo(server: EasyExpressServer): void;
}
