const path=require('path')
//require used in nodejs
//Filename
//console.log(__filename)
//Directory Name
//console.log(__dirname)
//console.log(path.basename(__filename)) //path_demo.js
//console.log(path.dirname(__filename))
//file extension
//console.log(path.extname(__filename))

//create oath object
//console.log(path.parse(__filename))

//concatenate path
console.log(path.join(__dirname,'test','index.html'))

