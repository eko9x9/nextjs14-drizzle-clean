import { create } from 'zustand'
import { logger } from '../logger'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

type State = {
    firstName: string
    lastName: string
}

type Action = {
    updateFirstName: (firstName: State['firstName']) => void
    updateLastName: (lastName: State['lastName']) => void
}

export const usePersonStore = create<State & Action, [["zustand/persist", unknown]]>(
    logger(
        persist(
            (set, get) => ({
                firstName: '',
                lastName: '',
                updateFirstName: (firstName) => set(() => ({ firstName: firstName })),
                updateLastName: (lastName) => set(() => ({ lastName: lastName })),
            }),
            {
                name: 'person-store', 
                storage: createJSONStorage(() => localStorage), 
            },
        ),
        'person-store'
    )
)