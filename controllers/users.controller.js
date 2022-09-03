const fs = require("fs")
const data = fs.readFileSync('users.json')
let users = JSON.parse(data)
module.exports.getAllUsers = (req,res)=>{
    const {limit} = req.query;
    res.send(users.slice(0,limit))
}
module.exports.getARandomUser = (req,res)=>{
    const randomUser = users.find(user => Math.floor(Math.random()*user.id)) 
    res.send(randomUser)
}
module.exports.saveAUser = (req,res) =>{
    users.push(req.body)
    res.send(users)
}
module.exports.updateAUser = (req,res) =>{
    const {id} = req.params;
    const newUser = users.find(user => user.id === Number(id))
    newUser.id = id;
    newUser.name = req.body.name;
    res.send(newUser)
}

module.exports.updateMultipleUsers = (req,res) =>{
    const {id} = req.params;
    const newUsers = users.map(user=>{
        let selectedUsers = [{id: user.id, gender:req.body.gender, name:req.body.name, contact: req.body.contact, address: req.body.address, photoURL: req.body.photoURL}]
        let foundUser = selectedUsers.find(user => user.id === Number(id))
        if(foundUser){
          user =  Object.assign(id, foundUser)
        }
        return user;
    })
    res.send(newUsers)
}
module.exports.deleteAUser = (req,res) =>{
    const {id} = req.params;
    users = users.filter(user => user.id !== Number(id))
    res.send(users)
}
