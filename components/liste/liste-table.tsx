import React from 'react';
import classNames from 'classnames';
import { Liste } from '../../store/create-liste-slice';
import IconCircle from "../icon-circle";
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";

type GroupsTableProps = {
    className?: string;
    groupObj?: Liste[];
    toggleClose: () => void
    setNom: (nom: string) => void
};

const liste = [
    { nom: 'Dany', note: 'Une liste pour ma recherche de science', nombre: 12 },
    { nom: 'Travail de session', note: 'Recherche pour mon cours de sociologie', nombre: 3 },
    { nom: 'Test', note: 'Les extrémistes', nombre: 1 },
];

export default function ListeTable({ className, groupObj = liste, toggleClose, setNom }: GroupsTableProps) {
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
                            <tr key={group.nom} onClick={() => {}} className="pointer table__group relative">
                                <td className="table__item" data-title={'Nom'}>
                                    {group.nom}
                                </td>
                                <td className="table__item" data-title={'Note'}>
                                    {group.note}
                                </td>
                                <td className="table__item" data-title={'Nombre'}>
                                    516
                                    {group.nom.toLowerCase() !== 'favoris' &&
                                        <div className="flex gap-x-3xs absolute top-md right-sm">
                                            <IconCircle className='' color={'primary'}>
                                                <AiFillEdit />
                                            </IconCircle>
                                            <IconCircle className='' color={'error'}>
                                                <AiOutlineClose onClick={() => {
                                                    setNom(group.nom)
                                                    toggleClose()
                                                }} />
                                            </IconCircle>
                                        </div>
                                    }
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
