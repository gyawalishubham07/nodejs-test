import jwt from "jsonwebtoken";

function auth (req,res,next){

  const authHeader=req.headers?.authorization;
    //  console.log(req.headers);
    let authToken;

    if(authHeader && authHeader.startsWith("Bearer ")){
        authToken = authHeader.split(" ")[1];
        
    } else {
        const cookie=req.headers.cookie;
         //  console.log(cookie);
        if(!cookie) return res.status(401).send("Unauthoried..");

            authToken=cookie.split('=')[1];
           
     } 

    if(!authToken) return res.status(401).send("Unauthorized..");

    // verify a token 
jwt.verify(authToken, process.env.JWT_SECRET, function(error, data) {
    if(error){
        return res.status(401).send("Unauthrized..");
    }
    // console.log(data);
    // console.log("&&&&&&&&&&&&&&&&&&&");
    // console.log(req.user);
     req.user=data;
    //  console.log(req.user);
     next();
  });
   
}
export default auth;