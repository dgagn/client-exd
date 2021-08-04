import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import SearchInput from './search-input';
import { GrPowerReset } from 'react-icons/gr';
import useDatabase, { Database } from '../hooks/use-database';
import dayjs from 'dayjs';
import fr from 'dayjs/locale/fr-ca';
import { useMediaQuery } from '@react-hook/media-query';
import Tag from './tag';

export default function Filtering({ database, onFilterChange, filteredDatabase }: { database: Database[], onFilterChange: (filteredDatabase: Database[]) => any, filteredDatabase: Database[] }) {
    const [moreFilters, setMoreFilters] = useState(false);
    const [dateDebut, setDateDebut] = useState('');
    const [dateDebutError, setDateDebutError] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [dateFinError, setDateFinError] = useState('');
    const media = useMediaQuery('(min-width: 30rem)');

    const [dateSelected, setDateSelected] = useState(false)
    const [typeSelected, setTypeSelected] = useState(false)
    const [degreSelected, setDegreSelected] = useState(false)
    const [groupeSelected, setGroupeSelected] = useState(false)
    const [evenementSelected, setEvenementSelected] = useState(false)

    const [search, setSearch] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setDateFinError('');
            setDateDebutError('');
        }, 2000);
    }, [dateDebutError, dateFinError]);

    const filteredDb = useMemo(() => database.filter((v) => v.degreViolence.includes(search)), [search])

    useEffect(() => {
        onFilterChange(filteredDb)
    }, [filteredDb])

    const handleDateDebut = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
            if (dateDebut === '' || e.target.value === '') {
                setDateDebutError('');
                setDateDebut(e.target.value);
                return;
            }

            const dateDebutDate = new Date(e.target.value);
            const dateFinDate = new Date(dateFin);

            if (dateFinDate < dateDebutDate) {
                setDateDebutError('La date de début ne peut pas être après la date de fin.');
                return;
            }

            setDateDebut(e.target.value);
            setDateDebutError('');
            setDateFinError('');
        },
        [dateFin]
    );

    const reinitialiserFiltres = useCallback(() => {
        setDateFin('');
        setDateDebut('');
        setDateSelected(false);
        setTypeSelected(false);
        setDegreSelected(false);
        setGroupeSelected(false);
        setEvenementSelected(false);
    }, []);

    const handleDateFin = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (dateDebut === '' || e.target.value === '') {
                setDateFinError('');
                setDateFin(e.target.value);
                return;
            }

            const dateDebutDate = new Date(dateDebut);
            const dateFinDate = new Date(e.target.value);

            if (dateDebutDate > dateFinDate) {
                setDateFinError('La date de fin ne peut pas être avant la date de début.');
                return;
            }

            setDateFin(e.target.value);
            setDateFinError('');
            setDateDebutError('');
        },
        [dateDebut]
    );

    const formatTime = useMemo(() => {
        if (dateDebut && dateFin) {
            return `Entre le ${dayjs(dateDebut).locale(fr).format('D MMMM YYYY')} et le ${dayjs(
                dateFin
            )
                .locale(fr)
                .format('D MMMM YYYY')}`;
        } else if (dateDebut) {
            return `Après le ${dayjs(dateDebut).locale(fr).format('D MMMM YYYY')}`;
        } else if (dateFin) {
            return `Avant le ${dayjs(dateFin).locale(fr).format('D MMMM YYYY')}`;
        }
        return '';
    }, [dateFin, dateDebut]);

    const formatOptionsFiltre = useMemo(() => {
        return moreFilters ? 'Cacher les options de filtre' : "Afficher d'autre options de filtre";
    }, [moreFilters]);

    return (
        <div className="mt-2xl mb-lg">
            <h3 className="">🔍 Rechercher - {filteredDatabase.length} résultats</h3>
            <p className="mt-md mb-lg">
                Par défaut, la recherches va inclure toutes les colonnes. Vous pouvez cliquer sur les colonnes pour affiner la recherche.
            </p>

            <ul className="flex gap-x-md gap-y-xs flex-wrap font-bold">
                <Tag onSelectChange={() => setDateSelected(!dateSelected)} isSelected={dateSelected} name='Date' />
                <Tag onSelectChange={() => setTypeSelected(!typeSelected)} isSelected={typeSelected} name='Type d’événement' />
                <Tag onSelectChange={() => setDegreSelected(!degreSelected)} isSelected={degreSelected} name='Degré de violence' />
                <Tag onSelectChange={() => setGroupeSelected(!groupeSelected)} isSelected={groupeSelected} name='Groupe(s) impliqué(s)' />
                <Tag onSelectChange={() => setEvenementSelected(!evenementSelected)} isSelected={evenementSelected} name='Événement' />
            </ul>

            <SearchInput className="mt-md" onChange={(e) => setSearch(e.target.value)} value={search} />

            <div className="mt-sm mb-lg">{formatTime}</div>
            <div className="flex space-between flex-wrap@sm gap-y-xs mb-lg">
                <a className="text-bg-fx text-bg-fx--scale-y" onClick={() => setMoreFilters(!moreFilters)}>
                    {formatOptionsFiltre}
                </a>
                {media && (
                    <a className="text-bg-fx text-bg-fx--scale-y" onClick={reinitialiserFiltres}>
                        Reinitialiser les filtres
                    </a>
                )}
            </div>

            {moreFilters && (
                <div className="flex gap-md flex-wrap@sm bg-primary-50 p-lg rounded">
                    <div className="flex-1">
                        <label className="mt-sm mb-xs flex space-between" htmlFor="dateDebut">
                            <span>Date de début</span>
                            <a href="#" className="pr-lg -mr-2xs">
                                <GrPowerReset onClick={() => setDateDebut('')} />
                            </a>
                        </label>
                        <div>
                            <input
                                type="date"
                                className="form__control"
                                value={dateDebut}
                                onChange={handleDateDebut}
                                id="dateDebut"
                            />
                            <div className="text-error-700 mt-sm">{dateDebutError}</div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <label className="mt-sm mb-xs flex space-between" htmlFor="dateFin">
                            <span>Date de fin</span>
                            <a href="#" className="pr-lg -mr-2xs">
                                <GrPowerReset onClick={() => setDateFin('')} />
                            </a>
                        </label>
                        <div>
                            <input
                                id="dateFin"
                                type="date"
                                className="form__control"
                                value={dateFin}
                                onChange={handleDateFin}
                            />
                            <div className="text-error-700 mt-xs">{dateFinError}</div>
                        </div>
                    </div>
                    {!media && (
                        <a className="text-bg-fx text-bg-fx--scale-y" onClick={reinitialiserFiltres}>
                            Reinitialiser les filtres
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}