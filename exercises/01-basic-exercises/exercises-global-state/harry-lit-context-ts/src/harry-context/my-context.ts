import { Context, createContext } from '@lit-labs/context';

export const myContextH: Context<Boolean, any> = createContext(true);

export const myContextH2: Context<Boolean, any> = createContext(false);
