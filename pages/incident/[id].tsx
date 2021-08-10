import React, { useEffect, useState } from "react";
import { database } from "../index";
import { Database } from "../../hooks/use-database";
import Link from 'next/link';
import dayjs from "dayjs";
import frCa from "dayjs/locale/fr-ca";
import Tag from "../../components/tag";
import classNames from "classnames";
import DOMPurify from 'dompurify';


export async function getStaticPaths() {
    const db = await database()
    const paths = db.map((entry: Database) => {
        return {
            params: { id: entry._id }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(ctx: any) {
    const db: Database[] = await database()
    const id = ctx.params.id

    const entry = db.filter((entry: Database) => {
        return entry._id === id
    })

    return {
        props: {
            entry: entry[0]
        }
    }
}

export default function Id({ entry }: { entry: Database }) {
    const [html, setHtml] = useState<any>(null)

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

    const urlRegex = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm
    const urls = entry.source.match(urlRegex)



    useEffect(() => {
        let source = entry.source
        if(urls) {
            urls.forEach((url) => {
                source = source.replace(url, `<a href="${url}" target="_blank" rel="noreferrer" class='text-bg-fx text-bg-fx--scale-y'>${url}</a>`)
            })
        }

        const purify = DOMPurify(window)

        setHtml({
            __html: purify.sanitize(source, { ADD_ATTR: ['target'] })
        })
    }, [entry.source, urls])



    return (
            <>
                <div className='p-xl mt-lg bg-article text-center'>
                    <div className='blur p-xl max-w-md mx-auto text-contrast-50 bg-blur'>
                        <h2 className='text-contrast-50'>{entry.evenement}</h2>
                        <p className='text-contrast-50 mt-sm text-center'>{dayjs(entry.date).locale(frCa).format('le D MMMM, YYYY')}</p>
                    </div>
                </div>
                <div className="container max-w-xl">
                    <div className="mt-2xl mb-2xl">
                        <div className="max-w-prose mx-auto">
                            <Link href="/">Retour à l&apos;accueil</Link>
                            <p className='mt-lg'>{entry.description}</p>
                            <ul className='flex gap-x-md flex-wrap mt-md'>
                                {entry.groupeImplique.split('\n').map(group => {
                                    return (
                                        <Tag onClick={() => {}} isSelected={true} key={group}>{group}</Tag>
                                    )
                                })}
                            </ul>
                            <div className='my-sm'>{entry.type}{entry.typeCrime !== '' ? ` / ${entry.typeCrime}` : null}</div>
                            <div className={degreeOfViolenceClasses}>
                                <div className={circle} />
                                {entry.degreViolence}
                            </div>

                            <div className='mt-sm' dangerouslySetInnerHTML={html} />
                        </div>
                    </div>
                </div>
            </>

    );
}
