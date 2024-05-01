import appMode from '@/constants/appMode'
import { create, State, StateCreator, StoreMutatorIdentifier } from 'zustand'

type Logger = <
    T extends State,
    Mps extends [StoreMutatorIdentifier, unknown][] = [],
    Mcs extends [StoreMutatorIdentifier, unknown][] = [],
>(
    f: StateCreator<T, Mps, Mcs>,
    name?: string,
) => StateCreator<T, Mps, Mcs>

type LoggerImpl = <T extends State>(
    f: StateCreator<T, [], []>,
    name?: string,
) => StateCreator<T, [], []>

const loggerImpl: LoggerImpl = (f, name) => (set, get, store) => {
    type T = ReturnType<typeof f>
    const loggedSet: typeof set = (...a) => {
        set(...a)
        appMode == "development" && console.log(...(name ? [`${name}:`] : []), get())
    }
    const setState = store.setState
    store.setState = (...a) => {
        setState(...a)
        appMode == "development" && console.log(...(name ? [`${name}:`] : []), store.getState())
    }

    return f(loggedSet, get, store)
}

export const logger = loggerImpl as unknown as Logger