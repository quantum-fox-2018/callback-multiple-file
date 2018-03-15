const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, cb) {
  // your code here...
  fs.readFile(parent_file, 'utf-8', (err, data) => {
    let parent_data = JSON.parse(data);
    sleep.sleep(5);
    fs.readFile(children_file, 'utf-8', (err, data) => {
      let children_data = JSON.parse(data);
      for (let i in parent_data) {
        let arrChildren = [];
        for (let j in children_data) {
          if (parent_data[i].last_name == children_data[j].family) {
            arrChildren.push(children_data[j].full_name);
          }
        }
        parent_data[i].childrens = arrChildren;
      }
      console.log(parent_data);
    })
  })

}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
