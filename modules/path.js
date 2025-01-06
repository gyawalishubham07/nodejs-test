import path from 'path';
import url from 'url';

//If wee gave the path of the file then
// const fileNmae='./folder1/folder2/path.js';

// //baseName   => path.js
// console.log(path.basename(fileNmae));

// //dirName(directory Name)   => ./folder1/folder2
// console.log(path.dirname(fileNmae));

// //parse()   => detail of file in part like base,dir,extension,root,etc...
// console.log(path.parse(fileNmae));

// //extName(extension )   => .js
// console.log(path.extname(fileNmae));



//If we want to get the path of any file like file.js path then we need to use url module also 
// there are already the __dirname and __filename in commonjs type but not in module type so

//If in pacakge.json : "type":"commonjs", then 
// console.log(__dirname);
// console.log(__filename);   //will give directly path details

//If there is : "type":"module", then first add import url from 'url'; & 

const __filename=url.fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

console.log(__dirname);   //W:\NODE JS\node_js-20810830\day2\modules
console.log(__filename);  //W:\NODE JS\node_js-20810830\day2\modules\path.js
