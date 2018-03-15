const fs = require('fs');
// var sleep = require('sleep');


function match_data(parent_file, children_file, cbParent, cbChild) {
  // your code here...
  fs.readFile(parent_file, 'utf8', function(err, dataParent) {
    cbParent(dataParent, children_file, cbChild);
  })
  
}

function getParentData(dataParent, children_file, cbChild){
  fs.readFile(children_file,'utf8',function(err, dataChild){
    cbChild(dataParent, dataChild);
  });

}

function getChildrenData(dataParent, dataChild){
  let parsedDataParent = JSON.parse(dataParent);
  let parsedDataChildren = JSON.parse(dataChild);

  for(let indexParent = 0; indexParent<parsedDataParent.length; indexParent++){
    let arrRes = [];
    for(let indexChildren =0; indexChildren<parsedDataChildren.length; indexChildren++){
      if(parsedDataParent[indexParent].last_name == parsedDataChildren[indexChildren].family){
        arrRes.push(parsedDataChildren[indexChildren].full_name);
      }
    }
    parsedDataParent[indexParent].childrens = arrRes; 
  }
  console.log(parsedDataParent);

}

match_data('./parents.json', './childrens.json', getParentData, getChildrenData)

console.log("Notification : Data sedang diproses !");
