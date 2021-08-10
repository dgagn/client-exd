import fs from 'fs'
import path from 'path'
import axios from "axios";

async function fetchDatabase() {
    console.log(`Fetching CEFIR database`);
    const { data } = await axios.get("https://server-exd.herokuapp.com/database");
    return data;
}

const DATABASE_CACHE_PATH = '.database'

export default async function getDatabase() {
    let cachedData

    try {
        cachedData = JSON.parse(
                fs.readFileSync(path.join(__dirname, DATABASE_CACHE_PATH), 'utf8')
        )
    } catch (error) {
        console.log('Database cache not initialized')
    }

    if (!cachedData) {
        const data = await fetchDatabase()

        try {
            fs.writeFileSync(
                    path.join(__dirname, DATABASE_CACHE_PATH),
                    JSON.stringify(data),
                    'utf8'
            )
            console.log('Wrote to Database cache')
        } catch (error) {
            console.log('ERROR WRITING Database CACHE TO FILE')
            console.log(error)
        }

        cachedData = data
    }

    return cachedData
}

