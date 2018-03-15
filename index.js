const fs = require('fs');
const sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  readData(parent_file, (dataParents) => {
    sleep.sleep(5);
    console.log("Data parent selesai di proses");
    readData(children_file, (dataChildrens) => {
      sleep.sleep(5);
      console.log("Data children selesai di proses");
      let child;
      for(let i in dataParents) {
        child = [];
        for(let j in dataChildrens) {
          if(dataParents[i].last_name == dataChildrens[j].family) {
            child.push(dataChildrens[j]);
          }
        }
        dataParents[i].childrens = child;
      }
      callback(dataParents);
    });
  });
}

function readData(path, callback) {
  fs.readFile(path, (err, data) => {
    callback(JSON.parse(data));
  });
}

function viewData(data) {
  console.log(data);
}

match_data('./parents.json', './childrens.json', viewData);

console.log("Notification : Data sedang diproses !");
