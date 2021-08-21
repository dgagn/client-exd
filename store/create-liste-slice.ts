import { trim } from 'lodash';
import { GetState, SetState } from 'zustand';
import { PersistantStoreState } from './use-persistant-store';

export type Liste = {
    nom: string
    note: string
    ids?: string[]
}
export interface ListeSlice {
    liste: Liste[]
    addListe: (liste: Liste) => void
    deleteListe: (nom: string) => void
    addToListe: (nom: string, id: string) => void
    modifyListe: (nom: string, liste: Liste) => void
    deleteToListe: (nom: string, id: string) => void
}

export default function createListeSlice(set: SetState<PersistantStoreState>, get: GetState<PersistantStoreState>): ListeSlice {
    return {
        liste: [
            { nom: 'Favoris', note: 'La liste par défaut pour enregistrer les favoris.', ids: [] }
        ],
        addListe: (liste) => {
            const original = get().liste

            const correctList = { ids: [], ...liste }

            if(original.length >= 50) {
                return;
            }

            const names = original.map((o) => o.nom)

            if(!names.includes(liste.nom)) {
                set({ liste: [...get().liste, correctList] })
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
        },
        addToListe: (nom, id) => {
            const listeToAdd = get().liste.filter(l => l.nom === nom)[0]

            if(listeToAdd) {
                const { ids } = listeToAdd

                if(ids && !ids.includes(id)) {
                    const newIds = [...ids, id]

                    const newList = {
                        ids: newIds,
                        nom: listeToAdd.nom,
                        note: listeToAdd.note
                    }

                    const removedList = get().liste.filter(l => l.nom !== nom)

                    set({ liste: [...removedList, newList] })
                }
            }
        },
        deleteToListe: (nom, id) => {
            const original = get().liste.filter(l => l.nom === nom)[0]

            if(original) {
                const { ids } = original
                if(ids && ids?.includes(id)) {
                    const newList = {
                        ids: original.ids?.filter(d => d !== id),
                        nom: original.nom,
                        note: original.note
                    }

                    const removedList = get().liste.filter(l => l.nom !== nom)
                    set({ liste: [...removedList, newList] })
                }
            }
        },
        modifyListe: (nom, liste) => {
            const newEdit = get().liste.filter(l => l.nom === nom)[0]
            const originalListe = get().liste.filter(l => l.nom !== nom)

            const editObj: Liste = {
                ids: newEdit.ids,
                nom: liste.nom,
                note: liste.note
            }

            set({ liste: [...originalListe, editObj] })
        }
    };
};
