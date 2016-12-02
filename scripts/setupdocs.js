const fs = require('fs-extra')

const node_modules = './node_modules';
const docs_root = './docs';
const material_root = docs_root + '/material-design-lite';
const polyfills = './docs/polyfills';


//setupMaterialResourcesForDocs();
setupPolyfills();

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

function setupPolyfills() {
  fs.ensureDir( polyfills, function (err) {
    if (err) return console.error(err);
    console.log('Created folders required for polyfills');
  })

  fs.copy(node_modules + '/dialog-polyfill/dialog-polyfill.js', polyfills + '/dialog-polyfill.js' , function (err) {
    if (err) return console.error(err)
    console.log("Copied resources required for polyfills!")
  });
}
