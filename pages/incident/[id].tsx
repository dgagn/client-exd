import React from 'react';
import { database } from "../index";
import { Database } from "../../hooks/use-database";
import Link from 'next/link';
import dayjs from "dayjs";
import frCa from "dayjs/locale/fr-ca";

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
    return (
            <>
                <div className='p-xl mt-lg bg-article'>
                    <div className='blur p-xl max-w-md mx-auto text-contrast-50 bg-blur'>
                        <h2 className='text-contrast-50'>{entry.evenement}</h2>
                        <p className='text-contrast-50 mt-sm text-center'>{dayjs(entry.date).locale(frCa).format('le D MMMM, YYYY')}</p>
                    </div>
                </div>
                <div className="container max-w-xl">
                    <div className="mt-2xl mb-lg">
                        <Link href="/">Retour à l&apos;accueil</Link>

                        <h4>Groupes Impliquées</h4>
                        {entry.groupeImplique.split('\n').map(group => {
                            return (
                                <p key={group}>{group}</p>
                            )
                        })}
                        <h4>Type</h4>
                        <div>{entry.type}</div>
                        <h4>Source</h4>
                        <div>{entry.source}</div>
                        <h4>Degre Violence</h4>
                        <div>{entry.degreViolence}</div>
                        <h4>Type de crime</h4>
                        <div>{entry.typeCrime}</div>
                        <h4>Description</h4>
                        <div>{entry.description}</div>
                    </div>
                </div>
            </>

    );
}
