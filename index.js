const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  let get_parents_obj = fs.readFile(parent_file, 'utf8',function(err, parents){
    parents = JSON.parse(parents);
    let childrens = fs.readFileSync(children_file, 'utf8');
    childrens = JSON.parse(childrens);
    for(let indexParents in parents){
      parents[indexParents].childrens = [];
      for(let indexChildrens in childrens){
        if(parents[indexParents].last_name === childrens[indexChildrens].family){
          //console.log(childrens[indexChildrens]);
          parents[indexParents].childrens.push(childrens[indexChildrens].full_name);
        }
      }
    }
    getParents(parents);
  });
}

function getParents(parents){
  console.log(parents);
}


match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
sleep.sleep(5);
