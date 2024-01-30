import { createContext } from '@lit/context'

const contextKey = Symbol('contextKey')

type ContextValue = string

const contextData = createContext<ContextValue>(contextKey)

export default contextData
