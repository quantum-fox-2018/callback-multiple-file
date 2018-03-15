const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file,callback) {
  // your code here...
  let childArr=[]
  fs.readFile(parent_file,'UTF-8',(err,dataParents)=>{
    sleep.sleep(5)
    let parentsData=JSON.parse(dataParents)
    fs.readFile(children_file,'UTF-8',(err,dataChildrens)=>{
      sleep.sleep(5)
      let childrentsData=JSON.parse(dataChildrens)
      for (let i = 0; i < parentsData.length; i++) {
        for (let j = 0; j < childrentsData.length; j++) {
          if(parentsData[i].last_name===childrentsData[j].family){
            childArr.push(childrentsData[j].full_name)
          }
          parentsData[i].childrens=childArr
        }
        childArr=[]
      }
      callback(parentsData);
    })

  })

}

function showParents(cb){
  console.log(cb);
}

match_data('./parents.json', './childrens.json',showParents)
console.log("Notification : Data sedang diproses !");
