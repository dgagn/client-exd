import React, { useEffect, useMemo, useState } from "react";
import usePersistantStore, { PersistantStoreState } from "../store/use-persistant-store";
import shallow from "zustand/shallow";
import useColors from "../hooks/use-colors";
import Tag from "../components/tag";
import Table, { TableBody, TableHead, TableHeader } from "../components/table";
import { AiOutlineCheck } from 'react-icons/ai'
import classNames from "classnames";
import useStore, { StoreState } from "../store/use-store";
import Search from "../components/search";
import { BsFillEyeFill } from "react-icons/bs";

const yearState = ({ setId }: StoreState) => ({ setId })

export default function Parametre() {
    const { setContrast, contrast, primary, primaryColors, setPrimary, contrastColors } = useColors()
    const [value, setValue] = useState('')
    const [cValue, setCValue] = useState('')

    const { setId } = useStore(yearState, shallow);

    useEffect(() => {
        setId('')
    }, [setId])

    useEffect(() => {
        setValue(primary)
    }, [primary])

    useEffect(() => {
        setCValue(contrast)
    }, [contrast])

    const selectedContrast = useMemo(() => {
        return contrastColors.filter(el => el.color === contrast).map((el) => el.name)[0]
    }, [contrast, contrastColors])

    const selectedPrimary = useMemo(() => {
        return primaryColors.filter(el => el.color === primary).map((el) => el.name)[0]
    }, [primary, primaryColors])

    return (
        <>
            <div className="container max-w-xl">
                <div className="mb-lg mt-2xl">
                    <h3 className="mb-md">Paramètres</h3>
                    <p className="mb-md">
                        Couleur primaire <span className="text-primary-500">{selectedPrimary}</span>
                    </p>
                    <ul className="flex gap-sm flex-wrap">
                        {primaryColors.map((color) => (
                            <button
                                key={color.color}
                                className={classNames(
                                    `button-reset circle circle--large bg-hover-${color.color}-500`,
                                    {
                                        'circle--selected align-center': value === color.color,
                                    }
                                )}
                                onClick={() => setPrimary(color.color)}
                            >
                                {value === color.color && (
                                    <AiOutlineCheck className="flex text-contrast-50" />
                                )}
                            </button>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="mb-sm">
                        Couleur de contraste{' '}
                        <span className="text-contrast-500">{selectedContrast}</span>
                    </p>
                    <ul className="flex gap-x-sm">
                        {contrastColors.map((color) => (
                            <button
                                key={color.color}
                                className={classNames(
                                    `button-reset circle circle--large bg-hover-${color.color}-500`,
                                    {
                                        'circle--selected align-center': cValue === color.color,
                                    }
                                )}
                                onClick={() => setContrast(color.color)}
                            >
                                {cValue === color.color && (
                                    <AiOutlineCheck className="flex text-contrast-50" />
                                )}
                            </button>
                        ))}
                    </ul>
                </div>
                <div className="mt-lg">
                    <button className="button-reset text-bg-fx text-bg-fx--scale-y mt-sm">
                        Un bouton
                    </button>

                    <ul className="tag-list mt-lg flex@md gap-x-md gap-y-xs flex-wrap font-bold">
                        <Tag onClick={() => {}} isSelected={true}>
                            {selectedPrimary}
                        </Tag>
                        <Tag onClick={() => {}} isSelected={true}>
                            {selectedContrast}
                        </Tag>
                        <Tag onClick={() => {}} isSelected={true}>
                            Tag
                        </Tag>
                        <Tag onClick={() => {}} isSelected={true}>
                            Tag
                        </Tag>
                        <Tag onClick={() => {}} isSelected={true}>
                            Tag
                        </Tag>
                    </ul>

                    <Search className='mt-lg' id='parametre' value={''} onChange={() => {}} />

                    <Table
                        className="mb-2xl mt-lg"
                        body={
                            <>
                                <tr className="table__group">
                                    <td className="table__item" data-title={'Primaire'}>
                                        {selectedPrimary}
                                    </td>
                                    <td className="table__item" data-title={'Contraste'}>
                                        {selectedContrast}
                                    </td>
                                </tr>
                                <tr className="table__group">
                                    <td className="table__item" data-title={'Primaire'}>
                                        {selectedPrimary}
                                    </td>
                                    <td className="table__item" data-title={'Contraste'}>
                                        {selectedContrast}
                                    </td>
                                </tr>
                            </>
                        }
                        headers={
                            <>
                                <TableHeader className='w-full'>Primaire</TableHeader>
                                <TableHeader className='pr-3xl'>Primaire</TableHeader>
                            </>
                        }
                    />
                </div>
            </div>
        </>
    );
}
