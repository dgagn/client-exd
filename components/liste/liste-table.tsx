import React from 'react';
import classNames from 'classnames';
import { Liste } from '../../store/create-liste-slice';
import IconCircle from '../icon-circle';
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai';

type GroupsTableProps = {
    className?: string;
    groupObj: Liste[];
    toggleClose: () => void;
    setNom: (nom: string) => void;
    setNote: (note: string) => void;
    toggleEdit: () => void;
};

export default function ListeTable({
    className,
    groupObj,
    toggleClose,
    setNom,
    toggleEdit,
    setNote,
}: GroupsTableProps) {
    return (
        <>
            <table className={classNames('table mb-lg', className)}>
                <thead>
                    <tr className="table__heading-group">
                        <th className="table__heading ">Nom</th>
                        <th className="table__heading ">Note</th>
                        <th className="table__heading ">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {groupObj.map((group) => {
                        return (
                            <tr
                                key={group.nom}
                                onClick={() => {}}
                                className="pointer table__group relative"
                            >
                                <td className="table__item" data-title={'Nom'}>
                                    {group.nom}
                                </td>
                                <td className="table__item" data-title={'Note'}>
                                    {group.note}
                                </td>
                                <td className="table__item" data-title={'Nombre'}>
                                    {group.ids?.length ?? 0}
                                    {group.nom.toLowerCase() !== 'favoris' && (
                                        <div className="flex gap-x-3xs absolute top-md right-sm">
                                            <IconCircle className="" color={'primary'} onClick={() => {
                                                setNom(group.nom);
                                                setNote(group.note);
                                                toggleEdit();
                                            }}>
                                                <AiFillEdit

                                                />
                                            </IconCircle>
                                            <IconCircle className="" color={'error'} onClick={() => {
                                                setNom(group.nom);
                                                toggleClose();
                                            }}>
                                                <AiOutlineClose

                                                />
                                            </IconCircle>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
