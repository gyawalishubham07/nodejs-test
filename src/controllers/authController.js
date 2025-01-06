import { createAuthToken } from "../helpers/authHelpers.js";
import authService from "../services/authService.js";

const register=async (req,res) => {
    const data=req.body;
    if (!data.name || !data.email || !data.password) return res.status(422).send("Required Data missing....");
    if(data.password.length < 6) return res.status(400).send("Paasword lenght must be greater then 6");
     if(data.password!== data.confirmPassword) return res.status(400).send("Password not Match");

    try {
        const users=await authService.register(data);
        
        const token=createAuthToken(users);
        // console.log(token);
        
        res.cookie('authToken',token,{httpOnly:true});  //(key,data)=> key is used to encrypt and dercrypt the data-token
        //{httpOnly:true}=> means token will be save only in Browser so we can used above spread syntax with key to save with res data in local storage
        //{httpOnly:false}=> means token will be in server and browse both and not need to used httpOnly in code because it is default false
        res.status(201).json({...users,token});
    } catch (error) {
        res.status(500).send(error.message);
    }
}



const login=async (req,res) => {
    const data=req.body;

    if (!data.email || !data.password) return res.status(422).send("Email or Password are missing....");
    if(data.password.length < 6) return res.status(400).send("Paasword lenght must be greater then 6");

    try {
        const existingUser=await authService.login(data);
        // res.send("Successfull......")
        const token=createAuthToken(existingUser);
        // console.log(token);
        res.cookie('authToken',token); //(name,token)=> cookie:{name=token}
        res.status(201).json({...existingUser,token}); // ({...e,auth})=> ...e is a spread syntax used to break the data and attach with auth in json
        //res.status(201).json({existingUser,authToken}); //({e,auth})=> by this computer will know e is user data and auth is a key and keep in seperate
        // res.status(201).json(existingUser);
    } catch (error) {
        res.status(500).send(error.message);
}
}

const logout=async (req,res) => {
    res.clearCookie("authToken")
    res.json({
        status:"OK"
    })
}

const forgetPassword = async (req,res) => {
    const email=req.body.email;
    // console.log(email);
    if(!email) return res.status(422).send("Email is required...");

    try {
        const data = await authService.forgetPassword(email);
console.log(data);
        res.json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const resetPassword = async (req,res) => {
    const {password,confirmPassword}= req.body;
    const token = req.query.token;
console.log(req.query);
    if(!password || !confirmPassword || !token) return res.status(422).send("Required data are missing...");

    if(password !== confirmPassword) return res.status(422).send("Password do not match....");

    try {
        const data = await authService.resetPassword(password,token);

       res.send("Reset Successfully....")
    } catch (error) {
        res.status(500).send(error.message);
    }

}
export { register,login ,logout,forgetPassword,resetPassword};