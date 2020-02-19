const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/',(req,res)=>{
    mailSender(req,res);
    res.redirect('/');
})

mailSender = (req, res) => {
    console.log("mail sender")
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user : "seyitaliyaman@gmail.com",
            pass : "seyitali34."
        }
    });

    var mailOptions = {
        from : 'seyitaliyaman@gmail.com',
        to : 'seyitaliyaman@gmail.com',
        subject : req.body.subject,
        text : req.body.message+"\n\n\nGönderen İsim : "+req.body.senderName+"\nGönderen Mail : "+req.body.senderMail
    }

    transporter.sendMail(mailOptions,function(err,inf){
        if(err){
            console.log(err)
        }else{
            console.log(inf)
        }
    })
}

module.exports = router;