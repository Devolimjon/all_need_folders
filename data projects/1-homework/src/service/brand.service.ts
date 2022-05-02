import Brand from "../model/brand.model";
import Category from "../model/brand.model";
import client from "../sql";

function create (Brand:Brand){
 client.query('INSERT INTO Brand(name)')
}
function findAll (){
 client.query('SELECT * FROM Brand')
}

