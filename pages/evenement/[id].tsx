import React, { MouseEvent, useCallback, useEffect, useMemo, useState } from "react";
import Link from 'next/link';
import dayjs from 'dayjs';
import frCa from 'dayjs/locale/fr-ca';
import Tag from '../../components/tag';
import classNames from 'classnames';
import DOMPurify from 'dompurify';
import getDatabase, { Database } from '../../utils/fetch-database';
import useStore, { StoreState } from '../../store/use-store';
import shallow from 'zustand/shallow';
import Head from 'next/head';
import usePersistantStore, { PersistantStoreState } from '../../store/use-persistant-store';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { flatten } from 'lodash';
import IconCircle from "../../components/icon-circle";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export async function getStaticPaths() {
    const db = await getDatabase();
    const paths = db.map((entry: Database) => {
        return {
            params: { id: entry._id },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(ctx: any) {
    const db: Database[] = await getDatabase();
    const id = ctx.params.id;

    const entry = db.filter((entry: Database, i) => {
        return entry._id === id;
    });

    return {
        props: {
            entry: entry[0],
        },
    };
}

const idState = ({ filteredDatabase, setId }: StoreState) => ({ filteredDatabase, setId });
const idPersistantState = ({ setPersistantViewedIds, toggleBookmarkId, addToListe, liste, deleteToListe }: PersistantStoreState) => ({
    setPersistantViewedIds,
    toggleBookmarkId,
    addToListe,
    liste,
    deleteToListe
});

export default function Id({ entry }: { entry: Database }) {
    const [html, setHtml] = useState<any>(null);
    const { filteredDatabase, setId } = useStore(idState, shallow);
    const { setPersistantViewedIds, deleteToListe, addToListe, liste } = usePersistantStore(idPersistantState, shallow);
    const [nextId, setNextId] = useState<string | null>(null);
    const [prevId, setPrevId] = useState<string | null>(null);
    const [selectValue, setSelectValue] = useState('')
    const [selectValueDelete, setSelectValueDelete] = useState('')

    useEffect(() => {
        let index = filteredDatabase.findIndex((e) => e._id === entry._id);
        const indexExists = filteredDatabase[index + 1];
        const prevIndexExists = filteredDatabase[index - 1];
        const nextArticleId = indexExists && filteredDatabase[index + 1]._id;
        const prevArticleId = prevIndexExists && filteredDatabase[index - 1]._id;

        nextArticleId ? setNextId(nextArticleId) : setNextId(null);
        prevArticleId ? setPrevId(prevArticleId) : setPrevId(null);
        setId(entry._id);

        setPersistantViewedIds(entry._id);
    }, [filteredDatabase, entry._id, setId, setPersistantViewedIds]);

    const degreeOfViolenceClasses = classNames('', {
        'text-success-800': entry.degreViolence.includes('Aucune'),
        'text-warning-800': entry.degreViolence.includes('faible'),
        'text-caution-800': entry.degreViolence.includes('moyenne'),
        'text-error-800': entry.degreViolence.includes('Élevée'),
    });

    const circle = classNames('circle', 'mr-sm', {
        'bg-success-500': entry.degreViolence.includes('Aucune'),
        'bg-warning-500': entry.degreViolence.includes('faible'),
        'bg-caution-500': entry.degreViolence.includes('moyenne'),
        'bg-error-500': entry.degreViolence.includes('Élevée'),
    });

    const urlRegex =
        /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;

    const urls = entry.source.match(urlRegex);

    useEffect(() => {
        let source = entry.source;
        if (urls) {
            urls.forEach((url) => {
                source = source.replace(
                    url,
                    `<a href="${url}" target="_blank" rel="noreferrer" class="text-bg-fx text-bg-fx--scale-y">${url}</a>`
                );
            });
        }

        const purify = DOMPurify(window);

        setHtml({
            __html: purify.sanitize(source, { ADD_ATTR: ['target'] }),
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getText = () => {
        let text = '';
        let activeEl: any = document.activeElement;
        let activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
        if (
                activeElTagName == 'textarea' ||
                (activeElTagName == 'input' &&
                        /^(?:text|search|password|tel|url)$/i.test(activeEl.type) &&
                        typeof activeEl.selectionStart == 'number')
        ) {
            text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
        } else if (window.getSelection) {
            text = window.getSelection()!.toString();
        }
        return text;
    }

    const handleHighlight = useCallback((e: MouseEvent<HTMLParagraphElement>) => {
        const text = getText()
        if(text === "") {
            return;
        }


    }, []);

    const names = useMemo(() => {
        const id = entry._id

        const name: string[] = []
        liste.forEach(l => {
            const {ids, nom} = l
            const isInListe = ids?.includes(id);
            isInListe && name.push(nom)
        })

        return name

    }, [entry._id, liste])

    useEffect(() => {
        console.log(names);
    }, [names])

    const listNames = useMemo(() => {
        return liste.map(l => l.nom).filter(n => !names.includes(n))
    }, [liste, names])

    const removelistNames = useMemo(() => {
        return liste.map(l => l.nom).filter(n => names.includes(n))
    }, [liste, names])

    useEffect(() => {
        setSelectValue(listNames[0])
        setSelectValueDelete(removelistNames[0])
    }, [listNames, removelistNames])

    return (
        <>
            <Head>
                <title>Événement - {entry.evenement}</title>
            </Head>

            <div className="p-xl mt-lg bg-article text-center">
                <div className="blur p-xl max-w-md mx-auto my-auto text-contrast-50 bg-blur">
                    <h2 className="text-contrast-50">{entry.evenement}</h2>
                    <p className="text-contrast-50 mt-sm text-center">
                        {dayjs(entry.date).locale(frCa).format('le D MMMM, YYYY')}
                    </p>
                    <p className='mt-sm text-warning-500 font-bold flex gap-x-md flex-wrap justify-center'>
                        {names.map(name => (
                            <span key={name}>{name}</span>
                        ))}
                    </p>
                </div>
            </div>
            <div className="container max-w-xl">
                <div className="mt-2xl mb-2xl">
                    <div className="max-w-prose mx-auto">
                        <div className="flex space-between gap-y-md mb-xl">
                            {prevId ? (
                                <Link href={`/evenement/${prevId}`} passHref>
                                    <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                        <span className="flex align-center">
                                            <BiChevronLeft className="mr-3xs color-icon" />{' '}
                                            Précédent
                                        </span>
                                    </button>
                                </Link>
                            ) : (
                                <div />
                            )}
                            {nextId && (
                                <Link href={`/evenement/${nextId}`} passHref>
                                    <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                        <span className="flex align-center">
                                            Suivant <BiChevronRight className="ml-3xs color-icon" />
                                        </span>
                                    </button>
                                </Link>
                            )}
                        </div>

                        <Link href={`/`} passHref>
                            <button className="button-reset text-bg-fx text-bg-fx--scale-y mb-xl">
                                Retour à l&apos;accueil
                            </button>
                        </Link>

                        <div className='pb-lg'>
                            {listNames.length > 0 && <div className="flex gap-x-md align-center flex-wrap gap-y-md">
                                <label htmlFor='ajouterListe'>Ajouter à la liste</label>
                                {listNames.length !== 1 ? <select value={selectValue} onBlur={(e) => selectValue !== e.target.value && setSelectValue(e.target.value)} onChange={(e) => selectValue !== e.target.value && setSelectValue(e.target.value)} name="ajouter" id="ajouterListe" className='form__control w-auto'>
                                    {listNames.map(name => (
                                            <option key={name} value={name}>{name}</option>
                                    ))}
                                </select> : <p>{listNames[0]}</p>}
                                <IconCircle color={'success'} onClick={() => addToListe(selectValue, entry._id)}>
                                    <AiOutlineCheck />
                                </IconCircle>
                            </div>}

                            {removelistNames.length > 0 && <div className="flex gap-x-md align-center flex-wrap gap-y-md">
                                <label htmlFor='retirerListe'>Retirer de la liste</label>
                                {removelistNames.length !== 1 ? <select onBlur={(e) => selectValue !== e.target.value && setSelectValue(e.target.value)} onChange={(e) => selectValueDelete !== e.target.value && setSelectValueDelete(e.target.value)} name="retirer" id="retirerListe" className='form__control w-auto'>
                                    {removelistNames.map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select> : <p>{removelistNames[0]}</p>}
                                <IconCircle color={'error'} onClick={() => deleteToListe(selectValueDelete, entry._id)}>
                                    <AiOutlineClose />
                                </IconCircle>
                            </div>}
                        </div>

                        <p className="mt-lg" onMouseUpCapture={handleHighlight}>
                            {entry.description}
                        </p>
                        <ul className="flex gap-x-md flex-wrap mt-md">
                            {entry.groupeImplique.split('\n').map((group) => {
                                return (
                                    <Tag onClick={() => {}} isSelected={true} key={group}>
                                        {group}
                                    </Tag>
                                );
                            })}
                        </ul>
                        <div className="my-sm">
                            {entry.type}
                            {entry.typeCrime !== '' ? ` / ${entry.typeCrime}` : null}
                        </div>
                        <div className={degreeOfViolenceClasses}>
                            <div className={circle} />
                            {entry.degreViolence}
                        </div>

                        <div className="mt-sm" dangerouslySetInnerHTML={html} />
                    </div>
                </div>
            </div>
        </>
    );
}
