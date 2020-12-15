import { IEasyExpressModule } from '../IEasyExpressModule';
import { EasyExpressServer } from './EasyExpressServer';

export interface IEasyExpressAttachableModule extends IEasyExpressModule {
  attachTo(server: EasyExpressServer): Promise<unknown>;
}
