//import database from './scripts/database.js';
import search from './scripts/search.js';

var sl = await search.searchlist()

console.log(sl['165815']);
var db = sl['165815'];

