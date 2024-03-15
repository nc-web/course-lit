
import { createContext } from '@lit/context'


const KeyTheme = Symbol('keyTheme')
export type TypeTheme = string
export const contextTheme = createContext<TypeTheme>(KeyTheme)
