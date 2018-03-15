const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file, callback) {
  fs.readFile(parent_file,'utf8',(err,data)=>{
    let parentsData = JSON.parse(data)
    fs.readFile(children_file,'utf8',(err,data)=>{
      let childrensData = JSON.parse(data)
      sleep.sleep(5)
      for(let i=0; i<parentsData.length; i++){
        let arrayOfChildrens = []
        for(let j=0; j<childrensData.length; j++){
          if(parentsData[i].last_name==childrensData[j].family){
            arrayOfChildrens.push(childrensData[j].full_name)
          }
        }
        parentsData[i].childrens = arrayOfChildrens
      }
      let newFormat = JSON.stringify(parentsData,null,2)
      fs.writeFile(parent_file,newFormat,'utf8',(err)=>{
        if (err) throw err
        callback(parentsData)
      })
    })
  })
}

function display(input){
  console.log(input)
}

match_data('./parents.json', './childrens.json', display)
console.log("Notification : Data sedang diproses !");
