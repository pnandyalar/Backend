const EmployeesData = require('../models/signUpModel');
const ForgotPassword = require('../models/ForgotModel');
const UserLogin = require('../models/LoginModel')
const jwt = require('jsonwebtoken');
const { v4: uuidv3 } = require('uuid');
const nodemailer = require('nodemailer')

const forgotPassword = async(req,res)=>{
const {Email} = req.body
const secretKey = 'your-secret-key';
try {
    const forgotDetails = await EmployeesData.findOne({Email:Email})
    // console.log(forgotDetails);
    if(forgotDetails.Email===Email){
        const UUID = uuidv3();
        const token = jwt.sign({ Email }, secretKey, { expiresIn: '1h' });
        const time = new Date(Date.now()+180000)
        const newForgotPassword = new ForgotPassword({
            ID:UUID,
            Email,
            Time:time,
            Token:token
        })
        const Save = await newForgotPassword.save()
        //================NODEMAILER==========================
        try{const transporter = nodemailer.createTransport({
            service: 'gmail', // e.g., 'Gmail'
            auth: {
              user: 'prasanthreddynandyala@gmail.com',
              pass: 'twis tcmj beat gico',
            },
          });
          
          // Define the email content
          const mailOptions = {
            from: 'prasanthreddynandyala@gmail.com',
            to: 'prasanthreddynandyala@gmail.com',
            subject: 'Your JWT Token',
            text: `Click the following link to access your account: http://localhost:3000/resetpassword?t=${token}&e=${Email}`
            // resetpassword?t=${token}&e=${Email}`,
            // text:'rey howle chaduko pubg apiiii CLTHIS❤'
          };
      
          // Send the email
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error);
              return res.status(500).send('Failed to send email');
            }
            console.log('Email sent: ' + info.response);
            res.json({data:Save,message:'email sent successfully'}).status(200);
          });}
        
         catch (error) {
          console.error(error);
          res.status(500).send('Server error');
        }
    
        //================NODEMAILER==========================
       
    }
    else{
        res.json({message:'data not saved for resetting yours password bcz odf validation issue'}).status(401)
    }
} 
catch (error) {
    res.json({message:error.message,}).status(500)
}
    
};


//=================================RESET========================
const resetPassword = async(req,res)=>{
 const{Password}= req.body

  const jwtok = await ForgotPassword.findOne({Token:req.query.T})
  
if(jwtok){
      if(jwtok.Time > new Date()){
        // console.log('time matched')
        const encodedData = Buffer.from(Password).toString('base64');
        const resetPasswordData =await UserLogin.updateMany({Email:req.query.E}, { $set: { Password: encodedData } })
        //  UserLogin.create({Password:Password})
        //======================================================================
        
        
     
        //======================================================================
        const resetPasswordData1 = await EmployeesData.updateMany({Email:req.query.E}, { $set: { Password: encodedData } })
        // create({Password:Password})
        res.json({message:[resetPasswordData,resetPasswordData1]}).status(200)
      }
}
  
}

//=================================RESET========================

module.exports = {forgotPassword,resetPassword}