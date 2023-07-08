
import { Context, createContext } from "@lit-labs/context";

export const myContext: Context<Symbol, any> = createContext(Symbol("my-context"));