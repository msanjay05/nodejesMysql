const express = require('express');
const sequelize = require('./Database/database');
const userRouter=require('./router/userRouter')

const app = express();

app.use(express.json())

app.use(userRouter);
sequelize
  .sync({alter:true})
  .then(result => {
    // console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
