const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  // your code here...
  fs.readFile(parent_file, 'utf8', (err, dataParents) => {
    let parentsData = JSON.parse(dataParents);

    let childrensData = fs.readFileSync(children_file, 'utf8');
    let jsonDataChildren = JSON.parse(childrensData);

    for (let i = 0; i < parentsData.length; i++) {
      let arrayChildren = [];
      for(let j = 0; j < jsonDataChildren.length; j++) {
        if(parentsData[i].last_name === jsonDataChildren[j].family) {
          arrayChildren.push(jsonDataChildren[j].full_name);
        }
      }

      parentsData[i].childrens = arrayChildren;
    }

    callback(parentsData);
  });
}

match_data('./parents.json', './childrens.json', function(data){
  console.log(data)
});
console.log("Notification : Data sedang diproses !");