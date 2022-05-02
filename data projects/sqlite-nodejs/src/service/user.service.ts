import User from "../model/user.model";
import db from '../db'

async function addUser(user: User) {

  await db.run('INSERT INTO Users (name, age, username, password) VALUES(?, ?, ?, ?);', [
    user.name,
    user.age, 
    user.username,
    user.password
  ])
}

async function findUser(username: string): Promise<User> {
  return await db.get('SELECT * FROM Users WHERE username = ?', [username]) as any
}

export default {
  addUser,
  findUser
}
