const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  fs.readFile(parent_file, 'utf8', (err, dataParent) => {
    var listDataParent = JSON.parse(dataParent);
    fs.readFile(children_file, 'utf8', (err, dataChildren) => {
      var listDataChildren = JSON.parse(dataChildren);
      var arr = []
      for (var i = 0; i < listDataParent.length; i++) {
        listDataParent[i].childrens = [];
      }
      for (var j = 0; j < listDataParent.length; j++) {
        for (var k = 0; k < listDataChildren.length; k++) {
          if (listDataParent[j].last_name == listDataChildren[k].family) {
            listDataParent[j].childrens.push(listDataChildren[k].full_name);
          }
        }
      }
      callback(listDataParent);
    })
  })
}

function receiveDataParent(parent_file, children_file) {
  match_data(parent_file, children_file, function(listDataParent) {
    console.log(listDataParent)
  })
}

match_data('./parents.json', './childrens.json', function(data) {
  sleep.sleep(5)
  console.log(data)
})
console.log("Notification : Data sedang diproses !");
