import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { orderBy } from 'lodash';

export interface Database {
    _id: string;
    date: string;
    type: string;
    typeCrime: string;
    degreViolence: string;
    groupeImplique: string;
    evenement: string;
    description: string;
    source: string;
}

async function fetchDatabase() {
    console.log(`Fetching CEFIR database`);
    const { data } = await axios.get('https://server-exd.herokuapp.com/database');
    return data;
}

const DATABASE_CACHE_PATH = '.database';

export default async function getDatabase() {
    let cachedData;

    try {
        cachedData = JSON.parse(fs.readFileSync(path.join(__dirname, DATABASE_CACHE_PATH), 'utf8'));
    } catch (error) {
        console.log('CEFIR database cache not initialized');
    }

    if (!cachedData) {
        const data = await fetchDatabase();

        try {
            fs.writeFileSync(
                path.join(__dirname, DATABASE_CACHE_PATH),
                JSON.stringify(data),
                'utf8'
            );
            console.log('Wrote to CEFIR database cache');
        } catch (error) {
            console.log('error writing to CEFIR database cache');
            console.log(error);
        }

        cachedData = data;
    }

    return orderBy(cachedData, 'date', 'asc');
}

