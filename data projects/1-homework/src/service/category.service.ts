import client from "../sql";
import Category from "../model/category.model";

function create (Category:Category){
    client.query('INSERT INTO Category(name) VALUES($1)')

}
function findAll (){
    client.query('SELECT * FROM Category')
}
