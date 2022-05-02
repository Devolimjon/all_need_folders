import sqlite3 from "sqlite3";
import path from 'path'
import util from 'util'

let filename = path.join(__dirname + '/../db/dev.db')

console.log(filename);

let db = new sqlite3.Database(filename, (err) => {
  if (err) {
    console.log('Error on connection: ', err);
  }
})

type ReturnType<T> = (sql: string, params: any[]) => Promise<T>

const run: ReturnType<void> = util.promisify(db.run)
const get: ReturnType<any>  = util.promisify(db.get)
const all: ReturnType<any[]> = util.promisify(db.all)

db.run = run as any
db.get = get as any
db.all = all as any

export default db
