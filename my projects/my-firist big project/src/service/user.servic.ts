import User from "../model/user.model";
import client from "../fromsql";
async function create(user:User){
    var sql = `
         INSERT INTO allUsers(name, surname, email, password)
         VALUES ($1,$2,$3,$4);`
    await client.query(sql,[user.name,user.surname,user.email,user.password])     
}
//////////////////////////////////////////////////////////////////////////////
async function finduser(){
    var sql = 'SELECT * FROM allUsers'
    await client.query(sql)
}

export default {
    create,
    finduser
}