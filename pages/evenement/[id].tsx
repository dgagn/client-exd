import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import frCa from 'dayjs/locale/fr-ca';
import Tag from '../../components/tag';
import classNames from 'classnames';
import DOMPurify from 'dompurify';
import getDatabase, { Database } from '../../utils/fetch-database';
import useStore, { StoreState } from "../../store/use-store";
import shallow from "zustand/shallow";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

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
            entry: entry[0]
        },
    };
}

const idState = ({ filteredDatabase }: StoreState) => ({ filteredDatabase })

export default function Id({ entry }: { entry: Database }) {
    const [html, setHtml] = useState<any>(null);
    const { filteredDatabase } = useStore(idState, shallow)
    const [nextId, setNextId] = useState<string | null>(null)
    const [prevId, setPrevId] = useState<string | null>(null)


    useEffect(() => {
        let index = filteredDatabase.findIndex(e => e._id === entry._id)
        const indexExists = filteredDatabase[index + 1]
        const prevIndexExists = filteredDatabase[index - 1]
        const nextArticleId = indexExists && filteredDatabase[index + 1]._id
        const prevArticleId = prevIndexExists && filteredDatabase[index - 1]._id

        nextArticleId ? setNextId(nextArticleId) : setNextId(null);
        prevArticleId ? setPrevId(prevArticleId) : setPrevId(null);
    }, [filteredDatabase, entry._id])

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

    return (
        <>
            <div className="p-xl mt-lg bg-article text-center">
                <div className="blur p-xl max-w-md mx-auto my-auto text-contrast-50 bg-blur">
                    <h2 className="text-contrast-50">{entry.evenement}</h2>
                    <p className="text-contrast-50 mt-sm text-center">
                        {dayjs(entry.date).locale(frCa).format('le D MMMM, YYYY')}
                    </p>
                </div>
            </div>
            <div className="container max-w-xl">
                <div className="mt-2xl mb-2xl">
                    <div className="max-w-prose mx-auto">

                        <div className='flex space-around gap-y-md mb-2xl'>
                            {prevId ? (
                                    <Link href={`/evenement/${prevId}`} passHref>
                                        <a className="button-reset text-contrast-900 link-fx-3--inverse flex-wrap" href="#0">
                                            <svg className="icone" viewBox="0 0 12 12" aria-hidden="true" fill="none"
                                                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                                <line strokeWidth={1.5} x1="3.5" y1="6" x2="9" y2="11.5" />
                                                <line strokeWidth={1.5} x1="9" y1="0.5" x2="3.5" y2="6" />
                                            </svg>
                                            <span>Événement précédent</span>
                                        </a>
                                    </Link>
                            ) : <div />}
                            {nextId && (
                                    <Link href={`/evenement/${nextId}`} passHref>
                                        <a className="button-reset text-contrast-900 link-fx-3 flex-wrap" href="#0">
                                            <span>Événement suivant</span>
                                            <svg className="icone" viewBox="0 0 12 12" aria-hidden="true" fill="none"
                                                 stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                                <line strokeWidth={1.5} x1="9" y1="6" x2="3.5" y2="11.5" />
                                                <line strokeWidth={1.5} x1="3.5" y1="0.5" x2="9" y2="6" />
                                            </svg>
                                        </a>
                                    </Link>
                            )}
                        </div>

                        <Link href="/" passHref>
                            <button className="button-reset text-bg-fx text-bg-fx--scale-y">
                                Retour à l&apos;accueil
                            </button>
                        </Link>

                        <p className="mt-lg">{entry.description}</p>
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
