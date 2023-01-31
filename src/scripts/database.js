import { Low } from 'lowdb'
import { JSONFile, JSONFileSync } from 'lowdb/node'


// File path
//const __dirname = dirname(fileURLToPath(import.meta.url));
//const filee = join(__dirname, 'db.json')


// Configure lowdb to write to JSONFile

// Read data from JSON file, this will set db.data content

async function load(path, file) {
    const adapter = new JSONFileSync(join(path, file));
    const db = new Low(adapter);

    await db.read()

    return db;
}

async function generate() {
    
}

export default {
    load
}