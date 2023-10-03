const UserLogin = require('../models/LoginModel');
//========================POSTDATA==========================================
const loginCheck = async(req,res)=>{
    const {Email,Password} = req.body
    try {

        const data = await UserLogin.findOne({Email:Email,})
        if(data){ 
    //   res.json({success:false,message:"Invalid Credentials"})
      const decode = Buffer.from(data.Password, 'base64').toString('utf-8')
      if(decode===Password)
      { req.session.data = data
        // return res.status(200).json({ message: 'Login successful' }); 
        res.json({success:true,message:"valid Credentials",data:data}).status(200) }
        
               else{ res.json({success:false,message:"Invalid Credentials"}) }}


     else{res.json({success:false,message:"Invalid Credentials"})}
}
 catch (error) {
        res.status(500).json({success:false,message:"server error"})
    }
}
//========================POSTDATA==========================================

//=========================LOGOUT=========================================

//=========================LOGOUT=========================================

//========================GETDATA==========================================
const loginGet = async (req,res)=>{
  
try {
    const data = await UserLogin.find(req.body)
    res.send(data).status(200)
    console.log(data)
} catch (error) {
    res.send(error).status(500)
}
}
//========================GETDATA==========================================
//========================UPDATEDATA==========================================
const loginUpdate = async (req,res)=>{

    try {
        const data = await UserLogin.findByIdAndUpdate(req.params.id,req.body)
        if(!data){
            res.send('expected product not found').status(300)
        }
        const updateData =  await LoginCredentials.findById(req.params.id)
        res.send(updateData).status(200)
        console.log(data)
    } catch (error) {
        res.send(error).status(500)
    }
    }
    //========================UPDATEDATA==========================================
    const loginPost = async(req,res)=>{
        try {
            const Data = await UserLogin.create(req.body) 
            res.send(Data).status(200)
           
        } catch (error) {
            res.send(error).status(500)
        }
       

    }
module.exports ={loginCheck,loginGet,loginUpdate,loginPost};
