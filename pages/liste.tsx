import React, { useCallback, useEffect, useState } from "react";
import ListeTable from '../components/liste/liste-table';
import Modal from '../components/modal';
import usePersistantStore, { PersistantStoreState } from '../store/use-persistant-store';
import shallow from 'zustand/shallow';
import ModalClose from '../components/modal-close';
import ModalEdit from '../components/modal-edit';
import useStore, { StoreState } from "../store/use-store";

const listeState = ({ liste }: PersistantStoreState) => ({ liste });
const listState = ({ setId }: StoreState) => ({ setId })

export default function Liste() {
    const [open, setOpen] = useState(false);
    const [openClose, setOpenClose] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [nom, setNom] = useState('');
    const [note, setNote] = useState('');

    const { setId } = useStore(listState, shallow)

    useEffect(() => {
        setId('')
    }, [setId])

    const { liste } = usePersistantStore(listeState, shallow);
    const toggleOpen = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const toggleOpenClose = useCallback(() => {
        setOpenClose(!openClose);
    }, [openClose]);

    const toggleOpenEdit = useCallback(() => {
        setOpenEdit(!openEdit);
    }, [openEdit]);

    return (
        <div className="container max-w-xl mb-xl">
            <div className="mt-xl mb-lg">
                <h3>
                    <span role="img" aria-label="Emoji de sparkles">
                        ✨
                    </span>{' '}
                    Listes personnelles
                </h3>
                <p className="mt-md mb-lg max-w-sm">
                    Vous pouvez créer des listes pour classer vos recherches.
                    <span className="block mt-xs">
                        Vous avez <span className="color-info">{liste.length}</span> listes
                        personnelles
                    </span>
                </p>
            </div>
            <div className="flex space-between mb-sm align-center flex-wrap gap-y-md">
                <p className="font-italic self-end" aria-label="Informations sur les balises">
                    Cliquer sur une colonne pour l&apos;ordonner.
                </p>
                <button
                    className="button-reset text-bg-fx text-bg-fx--scale-y button-bg px-md py-sm rounded h-50"
                    onClick={toggleOpen}
                >
                    Créer une liste
                </button>
            </div>
            <ListeTable
                groupObj={liste}
                toggleClose={toggleOpenClose}
                setNom={setNom}
                toggleEdit={toggleOpenEdit}
                setNote={setNote}
            />
            <Modal toggleOpen={toggleOpen} open={open} />
            <ModalClose toggleOpen={toggleOpenClose} open={openClose} nom={nom} />
            <ModalEdit toggleOpen={toggleOpenEdit} open={openEdit} nom={nom} note={note} />
        </div>
    );
}