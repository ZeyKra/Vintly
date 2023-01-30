import fs from 'fs';
import path from 'path';
import database from './database.js';


//import config from `./config.json` assert { type: `json` };
const { default: config } = await import("../../config.json", { assert: { type: "json", }, });

var SearchList = {};

async function searchlist() {
  const fileList = fs.readdirSync(config.paths.search);
  console.log(fileList);
  try {
    for( const file of fileList) {
      let name = (file.replace(".json", ""));
      SearchList[name] = await database.load(path.resolve(config.paths.search), file);

    }
  } catch(e) {
    console.log(e)
  }
  

  // fs.readdir(config.paths.search, (err, files) => {
  //   if (err) throw err;


  //   for(const file in files) {
  //     //console.log(await database.load(path.resolve(config.paths.search), file));
      
  //     let name = (file.replace(".json", ""));
  //     SearchList[name] = await database.load(path.resolve(config.paths.search), file);

  //   }

  return await SearchList
}


export default {
    searchlist
}
