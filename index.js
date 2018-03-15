const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, callback) {

  fs.readFile(parent_file, 'utf8', (err, data) =>{
    let parent_data = JSON.parse(data)
    fs.readFile(children_file, 'utf8', (err, data) =>{
      let children_data = JSON.parse(data)

      for(let p=0; p<parent_data.length; p++){
        let childrensGrouping = [];
        for(let c=0; c<children_data.length; c++){
          if(children_data[c].family == parent_data[p].last_name){
            childrensGrouping.push(children_data[c].full_name)
          }
        }
        parent_data[p].childrens = childrensGrouping
      }
      callback(parent_data)
    })
  })
}

function show(data){
  console.log(data)
}


match_data('./parents.json', './childrens.json', show)
console.log("Notification : Data sedang diproses !");


