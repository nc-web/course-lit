
import { createContext } from '@lit-labs/context';

import type { Logger } from '../types/type-logger.js';

export type { Logger } from '../types/type-logger.js';

export const loggerContext = createContext<Logger>('logger');


