
import { createContext } from '@lit/context'


const KeyOSTheme = ('KeyOSTheme')

export type TypeOSTheme = string

export const contextOSTheme = createContext<TypeOSTheme>(KeyOSTheme)