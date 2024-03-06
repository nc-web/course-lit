
import {createContext} from '@lit/context'
// import type {Logger} from 'my-logging-library'
// export type {Logger} from 'my-logging-library'

export interface ILogger {
    log: ( value: string ) => void
}

export type TypeLogger = ILogger

export const loggerContext = createContext<ILogger>('Logger Test')
