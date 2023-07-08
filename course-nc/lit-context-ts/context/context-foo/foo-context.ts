import { createContext } from '@lit-labs/context';

export interface Foo {
  log: (msg: string) => void;
}

export const contextFoo = createContext<Foo>('foo');
