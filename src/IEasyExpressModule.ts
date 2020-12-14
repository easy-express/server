// To avoid circular references
export interface IEasyExpressModule {
  attachTo(x: unknown): void;
}
