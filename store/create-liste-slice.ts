import { trim } from 'lodash';
import { GetState, SetState } from 'zustand';
import { PersistantStoreState } from './use-persistant-store';

export type Liste = {
    nom: string
    note: string
}
export interface ListeSlice {
    liste: Liste[]
    addListe: (liste: Liste) => void
    deleteListe: (nom: string) => void
}

export default function createListeSlice(set: SetState<PersistantStoreState>, get: GetState<PersistantStoreState>): ListeSlice {
    return {
        liste: [
            { nom: 'Favoris', note: 'La liste par défaut pour enregistrer les favoris.' }
        ],
        addListe: (liste) => {
            const original = get().liste

            if(original.length >= 50) {
                return;
            }

            const names = original.map((o) => o.nom)

            if(!names.includes(liste.nom)) {
                set({ liste: [...get().liste, liste] })
            }
        },
        deleteListe: (nom) => {
            const original = get().liste

            const newListe = original.filter(l => trim(l.nom.toLowerCase()) !== trim(nom.toLowerCase()))
            if(newListe.length > 0) {
                set({ liste: newListe })
            } else {
                console.log('Error dans le delete liste');
            }
        }
    };
};
