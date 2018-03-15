const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  var parent_data = ''
  fs.readFile(parent_file, (err, data) => {
    sleep.sleep(5)
    if(err){
      console.log(err)
    }
    parent_data = JSON.parse(data)
    // console.log(parent_data)
    fs.readFile(children_file, (err, data) => {
      if(err){
        console.log(err)
      }
      let children_data = JSON.parse(data)
      // console.log(children_data)
      let familyArr = []
      for(let i=0; i<parent_data.length; i++){
        let childrens = []
        for(let j=0; j<children_data.length; j++){
          if(parent_data[i].last_name == children_data[j].family){
            childrens.push(children_data[j].full_name)
          }

        }
        parent_data[i].childrens = childrens
        familyArr.push(parent_data[i])
      }
      console.log(familyArr)

    })
  })

  
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
