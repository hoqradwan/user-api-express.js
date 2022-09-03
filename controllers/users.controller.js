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
    let newUser = users.find(user => user.id === Number(id))
    newUser= req.body;
    res.send(newUser)
}

module.exports.updateMultipleUsers = (req,res) =>{
    const updatedUser = req.body;
    const updatedUsers = users.map(user => {
        const haveThis = updatedUser.find(u => u.id == user.id && { ...user, ...u })
        if (haveThis) {
            return { ...user, ...haveThis }
        } else {
            return user
        }
    })
    res.send(updatedUsers)

}
module.exports.deleteAUser = (req,res) =>{
    const {id} = req.params;
    users = users.filter(user => user.id !== Number(id))
    res.send(users)
}
