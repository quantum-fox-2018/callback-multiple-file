const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file,cbParentFile) {
  // your code here...
  fs.readFile(parent_file,'utf8', (err,parentDatas) => {
    sleep.sleep(5);

    var childrensData = JSON.parse(fs.readFileSync(children_file,'utf8'));
    parent_datas = JSON.parse(parentDatas);

    for(let i=0;i<parent_datas.length;i++){
      parent_datas[i].childrens = [];
      for(let j=0;j<childrensData.length;j++){
        if(parent_datas[i].last_name == childrensData[j].family){
          parent_datas[i].childrens.push(childrensData[j].full_name)
        }
      }
    }
    parentDatas = parent_datas;
    cbParentFile(parentDatas);
  })
}

match_data('./parents.json', './childrens.json',function(parentDatas){
  console.log(parentDatas);
})
console.log("Notification : Data sedang diproses !");
