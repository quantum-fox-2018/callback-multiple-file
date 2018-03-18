const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  fs.readFile(parent_file, 'utf8', (err, data) => {
    sleep.sleep(5);
    let parentsFile = JSON.parse(data);
    fs.readFile(children_file, 'utf8', (err, ChildrenData) => {
      sleep.sleep(5);
      let childrensFile = JSON.parse(ChildrenData);
      for(let i=0; i<parentsFile.length; i++){
        parentsFile[i].children = [];
        for(let j=0; j< childrensFile.length; j++){
          if(parentsFile[i].last_name === childrensFile[j].family){
            parentsFile[i].children.push(childrensFile[j].full_name);
          }
        }
      }
      console.log(parentsFile);
    })

  })

}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
