import React, { useCallback, useState } from "react";
import ListeTable from "../components/liste/liste-table";
import Modal from "../components/modal";
import usePersistantStore, { PersistantStoreState } from "../store/use-persistant-store";
import shallow from "zustand/shallow";
import ModalClose from "../components/modal-close";

const listeState = ({ liste }: PersistantStoreState) => ({ liste })

export default function Liste() {
    const [open, setOpen] = useState(false)
    const [openClose, setOpenClose] = useState(false)
    const [nom, setNom] = useState('')

    const { liste } = usePersistantStore(listeState, shallow)
    const toggleOpen = useCallback(() => {
        setOpen(!open)
    }, [open])

    const toggleOpenClose = useCallback(() => {
        setOpenClose(!openClose)
    }, [openClose])

    return (
            <div className='container max-w-xl'>
                <div className="mt-xl mb-lg">
                    <h3><span role='img' aria-label='Emoji de sparkles'>✨</span> Listes personnelles</h3>
                    <p className='mt-md mb-lg max-w-sm'>
                        Vous pouvez créer des listes pour classer vos recherches.
                        <span className='block mt-xs'>
                            Vous avez <span className="color-info">{liste.length}</span> listes personnelles
                        </span>
                    </p>
                </div>
                <div className="flex space-between mb-sm align-center flex-wrap gap-y-md">
                    <p
                            className="font-italic self-end"
                            aria-label="Informations sur les balises"
                    >
                        Cliquer sur une colonne pour l&apos;ordonner.
                    </p>
                    <button className='button-reset text-bg-fx text-bg-fx--scale-y button-bg px-md py-sm rounded h-50' onClick={toggleOpen}>Créer une liste</button>
                </div>
                <ListeTable groupObj={liste} toggleClose={toggleOpenClose} setNom={setNom} />
                <Modal toggleOpen={toggleOpen} open={open} />
                <ModalClose toggleOpen={toggleOpenClose} open={openClose}  nom={nom} />
            </div>
    );
}