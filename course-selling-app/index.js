const express = require('express')
const mongoose = require('mongoose')

const { adminRouter } = require('./routes/admin')
const { courseRouter } = require('./routes/course')
const { userRouter } = require('./routes/user')

const app = express();

app.use('/api/v1/user', userRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/courses', courseRouter);


async function main(){
    await mongoose.connect('mongodb+srv://mazen:ycCLMTvx7PcdeInc@cluster0.nb4bu.mongodb.net/course-app')
    app.listen(3000)
    console.log('listening on port 3000')
}

main()

