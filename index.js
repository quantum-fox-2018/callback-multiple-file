/*jshint esversion:6*/
const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  // your code here...
  fs.readFile(parent_file, 'utf8', (err, dataParent) => {
    var dataParents = JSON.parse(dataParent);

    fs.readFile(children_file, 'utf8', (err, dataChildren) => {
      sleep.sleep(5);
      var dataChildrens = JSON.parse(dataChildren);

      for (let i = 0; i < dataParents.length; i++) {
        dataParents[i].children = [];
        for (let j = 0; j < dataChildrens.length; j++) {
          if (dataParents[i].last_name == dataChildrens[j].family) {
            dataParents[i].children.push(dataChildrens[j].full_name);
          }
        }
      }
      callback(dataParents);
    });
  });
}

function parents_data(data_parent) {
  console.log(data_parent);
}
match_data('./parents.json', './childrens.json', function(parents_data){
  console.log(parents_data);
});
console.log("Notification : Data sedang diproses !");
