import { createServer } from "http";

const server = createServer((request, response) => {
  //callback function (req,res) which is call after the completion

  // response.write("Hello Shubam"); //to write some thinf to the server

  // response.end(); //to end the esponse to the server

  //set header
      // response.writeHead(200,"Content-Type",'text/html');  // write the status and header
      //  response.end("<h1>Hello World</h1>");  //for text/html
      // response.end("Hello World");     //for text/plain
  

      // response.setHeader('Content-Type',"text/plain");   //for palin and html data
      // response.write("Hello World");
     
      // response.setHeader('Content-Type',"text/plain");
      // response.write(JSON.stringify({message:"Hello World"}));  //plain text json

      // response.setHeader('Content-Type',"application/json");   //for json data
      // response.statusCode=500;  //200 is default which is for OK

      // response.writeHead(500,"",{"Content-Type": "application/json"})
      // response.write(JSON.stringify({message:"Hello World"}));   //output of all can be seen in POSTMAN
      // response.end();

//request 

      if(request.url === '/'){
        response.end('Home Page');
      }else if(request.url === '/about'){
        response.end("About Page");
      }else{
        response.statusCode=404;
        response.end("Not Found");
      }
});

server.listen(5000, () => {
  //there should be different port for fontend(3000) and backend(5000)
  console.log("Server running at port 5000....."); //to know in terminal program has run : can write anything here in console
});
