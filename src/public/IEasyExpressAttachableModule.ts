import { EasyExpressServer } from './EasyExpressServer';

export interface IEasyExpressAttachableModule {
  attachTo(server: EasyExpressServer): Promise<unknown>;
}
