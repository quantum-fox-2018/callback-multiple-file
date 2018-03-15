const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  fs.readFile(parent_file, (err, data) =>{
    sleep.sleep(5)
    let parentsData = JSON.parse(data)
    fs.readFile(children_file, (err, myData) =>{
      sleep.sleep(5)
      let childrenData = JSON.parse(myData)
      for (var i = 0; i < parentsData.length; i++) {
          parentsData[i].children = []
        for (var j = 0; j < childrenData.length; j++) {
          if (parentsData[i].last_name === childrenData[j].family) {
            parentsData[i].children.push(childrenData[j].full_name)
          }
        }
      }
      console.log(parentsData)
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
