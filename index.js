const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, cb, cb2) {
  // your code here...
  fs.readFile(parent_file, 'utf8', (err, data) =>{
    sleep.sleep(5);
    cb(data, children_file, cb2);
  })


}

function parents_data_to_object(parent_file, children_file, cb) {
  // console.log(parent_file);
  let parentsFile = JSON.parse(parent_file);
  fs.readFile(children_file, 'utf8', (err, data) => {
    sleep.sleep(5);
    cb(parentsFile, data);
  })

  // console.log(parentsFile);
}

function childerns_data_to_parents(parent_file, children_file){
  let childrensFile = JSON.parse(children_file);

  for(let i = 0; i < parent_file.length; i++){
      let childerns = [];
      for(let j = 0; j < childrensFile.length; j++){
          if(parent_file[i].last_name == childrensFile[j].family){
              childerns.push(childrensFile[j].full_name);
          }
      }
      parent_file[i].childerns = childerns;
  }

  console.log(parent_file);
}

match_data('./parents.json', './childrens.json', parents_data_to_object, childerns_data_to_parents)
console.log("Notification : Data sedang diproses !");












//
