const fs = require('fs-extra')




const node_modules = './node_modules';
const docs_root = './docs';
const material_root = docs_root + '/material-design-lite';


setupMaterialResourcesForDocs();

function setupMaterialResourcesForDocs(){

  fs.ensureDir( material_root, function (err) {
    if (err) return console.error(err);
    console.log('Created folders required for material-design-lite');
  })

  fs.copy(node_modules + '/material-design-lite/material.css', material_root + '/material.css' , function (err) {
    if (err) return console.error(err)
    console.log("Copied resources required for material-design-lite!")
  });
}
