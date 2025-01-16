const { Router } = require('express')

userRouter = Router();

userRouter.post('/signin', function(req,res){

    res.json({

    })
})

userRouter.post('/signup', function(req,res){

    res.json({

    })
})

userRouter.post('/purchase', function(req,res){

    res.json({

    })
})

module.exports = {
    userRouter: this.userRouter
}
