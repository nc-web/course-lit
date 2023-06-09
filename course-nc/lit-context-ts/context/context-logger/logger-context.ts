import { createContext } from '@lit-labs/context';

export interface Logger {
  log: (msg: string) => void;
}

export interface interfaceLogger2 {
  log: (stateGlobalLogger2: number) => void;
}

export const loggerContext = createContext<Logger>('Hello logger');
export const contextLogger = createContext<interfaceLogger2>;

