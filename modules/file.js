import fs from "fs/promises";

// //Synchronuous (need to use: import fs from "fs";)
// //read
// const data=fs.readFileSync('./data.txt',"utf-8")
// console.log(data);

// //write

// fs.writeFileSync("./data.txt","Hello you write data File");

//Asynchronuous

//callback (need to use: import fs from "fs";)
// fs.readFile("./data.txt", "utf-8", (error, data) => {
//   if (error) console.log(error);

//   console.log(data);
// });

//callback hit(nested)

// fs.readFile('./data.txt','utf8',(error,data)=>{
//     if(error) console.log(error);

//     const result1=data;

//     fs.readFile(result1,'utf-8',(error1,data1)=>{
//         if(error1) console.log(error1);

//         const result2=data1;

//         fs.readFile(result2,'utf-8',(error2,data2)=>{
//             if(error2) console.log(error2);
//             console.log(data2);
//         })
//     })
// })

//promise(preferred) need to use "import fs from "fs/promises";"
// fs.readFile("./data.txt",'utf-8').then((data)=>{
//    fs.readFile(data,'utf-8').then((data1)=>{
//     fs.readFile(data1,'utf-8').then((data2)=>{
//         console.log(data2);
//     }).catch((error2)=> console.log(error2))
//    }).catch((error1)=>console.log(error1))
// }).catch((error)=>{
//     console.log(error);
// })

//async/await (most preferred)  need to use "import fs from "fs/promises";"

async function readMyFile() {
  try {
    const data = await fs.readFile("./data.txt", "utf-8");

    const data1 = await fs.readFile(data, "utf-8");

    const data2 = await fs.readFile(data1, "utf-8");

    console.log(data2);
  } 
  catch (error) {
    console.log(error);
  }
}
readMyFile();

//write
 async function writeMyFile(){
    const data2=fs.writeFile('./data2.txt',"You write the File by asynchronuous");

    console.log("Data has been written......");
 }
 writeMyFile();

//append(update)

fs.appendFile("./data2.txt","\n Data has been written......\n You write the File by asynchronuous \n first write the data here because read take time so according to asynchronuous ");