const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
const usersRoutes = require('./routes/users.route.js')

app.use(cors())
app.use(express.json())

app.use("/user", usersRoutes)
app.get("/", (req,res)=>{
    res.send("Hello from users api")
})
app.all("*", (req,res)=>{
    res.send("No route found")
})
app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})