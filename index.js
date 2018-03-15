const fs = require('fs');
// var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  
  let parent_data = fs.readFile(parent_file, 'utf8',(err, data) => {
    if (err) throw err;
    let parentdata = JSON.parse(data);
    
    let children_data = fs.readFile(children_file, 'utf8',(err, data) => {
      if (err) throw err;
      let childrendata = JSON.parse(data);
      
      for (let i = 0; i < childrendata.length; i++) {
        for (let j = 0; j < parentdata.length; j++) {
          if (childrendata[i].family == parentdata[j].last_name) {
            parentdata[j].childrens.push(childrendata[i].full_name);
          }
        }
      }
      console.log(parentdata);
    });
  });



}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
