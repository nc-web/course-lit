
import { createContext } from '@lit/context'


// Context Logger 1 - (Definition 1)
const keyLogger1 = Symbol('ContextKeyLogger1')
export type TypeLogger1 = string
export const contextLogger1 = createContext<TypeLogger1>(keyLogger1)


// Contex Logger 2 - (Definition 2)
export type TypeLogger2 = string
export const contextLogger2 = createContext<TypeLogger2>(Symbol('ContextKeyLogger2'))


// Context Logger 3 - (Definition 3)
interface ILogger3 {
    log: (msg: string) => void
}

export type TypeLogger3 = ILogger3
export const contextLogger3 = createContext<TypeLogger3>('ContextKeyLogger3')
