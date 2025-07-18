const fs=require('fs')
const path=require('path')

//Create Folder
// fs.mkdir(path.join(__dirname,'test'), function(err){
//     if(err) console.log(err)
//     console.log("Folder Created")
// })
//Create and write to file
// fs.writeFile(path.join(__dirname,'test','hello.txt'),'Hello IGDTUW Fam', function(err){
//     if (err) console.log(err)
//         console.log("File Created")
// })

//Read the file
// fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', function(err,data){
//     if(err) console.log(err)
//         console.log(data)
// })

//Rename the file
fs.rename(path.join(__dirname, 'test', 'hello.txt'),path.join(__dirname,'test','bye.txt'),function(err){
    if(err) console.log(err)
        console.log("File renamed")
})