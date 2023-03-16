import { createContext } from '@lit-labs/context';
import type { Logger } from 'my-logging-library';

export type { Logger } from 'my-logging-library';
export const loggerContext = createContext<Logger>('logger');
