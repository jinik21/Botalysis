

const handlesignup=(req,resp,User)=>{
    // console.log(req);
    // console.log("-------------------------------------------")
    User.register({username:req.body.name,email:req.body.email,phone:req.body.phone,branch:req.body.branch},req.body.password,
        function (err,user) {
            if(err)
            {
                // console.log(err);
                return resp.status(400).json("Incorrect form submission");
            }
            else
            {
                var authenticate = User.authenticate();
                authenticate(req.body.email, req.body.password, function(err, result) {
                 if (err) 
                 {
                     //console.log(err);
                     return resp.status(400).json("Incorrect form submission");
                }
                 else
                 return resp.status(200).json("Correct submission");
                });
            }
        }
    );
}


module.exports={
    handlesignup:handlesignup
};
