const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  fs.readFile(parent_file,'utf8',(err,data)=>{
    let parentsData = JSON.parse(data)
    fs.readFile(children_file,'utf8',(err,data)=>{
      let childrensData = JSON.parse(data)
      for(let i=0; i<parentsData.length; i++){
        let arrayOfChildrens = []
        for(let j=0; j<childrensData.length; j++){
          if(parentsData[i].last_name==childrensData[j].family){
            arrayOfChildrens.push(childrensData[j].full_name)
          }
        }
        parentsData[i].childrens = arrayOfChildrens
      }
      console.log(parentsData)
    })
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
