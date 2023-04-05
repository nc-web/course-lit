import { createContext } from '@lit-labs/context';

export interface Logger {
  log: (msg: string) => void;
}

export const loggerContext = createContext<Logger>('Hello logger');
