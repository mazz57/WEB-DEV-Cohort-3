const { Router } = require('express')
const { adminModel } = require('../db')

const adminRouter = Router()

adminRouter.post('/signup', function(req,res){
    
    res.json({

    })
})

adminRouter.post('/signin', function(req,res){
    
    res.json({

    })
})

adminRouter.post('/course', function(req,res){
    
    res.json({

    })
})

adminRouter.put('/course', function(req,res){
    
    res.json({

    })
})

adminRouter.post('/course/bulk', function(req,res){
    
    res.json({

    })
})

module.exports = {
    adminRouter: adminRouter,
}