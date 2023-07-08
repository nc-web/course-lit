import { createContext } from '@lit-labs/context';

export interface Logger {
  log: (msg: string) => void;
}

export interface ILogger {
  stateGlobalLogger: string;
  funLogger(): string;
}

export const loggerContext = createContext<Logger>('Hello logger');
export const contextLogger = createContext<ILogger>('keyLogger');
// export const contextLogger = createContext<ILogger>(Symbol('keyLogger'));
