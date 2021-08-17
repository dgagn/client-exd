import { GetState, SetState } from 'zustand';
import { PersistantStoreState } from './use-persistant-store';

export interface ColorSlice {
    primary: string
    contrast: string

    setPrimary: (color: string) => void
    setContrast: (color: string) => void
}

export default function createColorSlice(set: SetState<PersistantStoreState>, get: GetState<PersistantStoreState>): ColorSlice {
    return {
        primary: 'blue',
        contrast: 'blue-gray',
        setPrimary: (color) => {
            set({ primary: color })
        },
        setContrast: (color) => {
            set({ contrast: color })
        }
    };
};
