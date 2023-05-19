//requiring the user model
const User = require('../models/user')

//Render the profile page
module.exports.profile=function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(user){
                return res.render('user_profile',{
                    title:"User profile",
                    user:user
                })
            }
            return res.redirect('/users/sign-in')

        })
    }else{
            return res.redirect('/users/sign-in')
        }
    

  
}


//Render the signup page 
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"SignUp"
    })
}

//Render the signin page
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"SignIn"
    })
}

//Get the sign Up data

module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}

//get the sign in data and create the session

module.exports.createSession =function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console('error in finding user in signing up')
            return;
        }
        
        //if user is found
        if(user){
            //if password dosen't match
            if(user.password != req.body.password){
                return res.redirect('back')
            }
            //handle session creation
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile')
            

        }else{
            //if user is not found
            return res.redirect('back');
        }
     })

}