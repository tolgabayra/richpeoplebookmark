const Person = require("../models/Person")

const getPerson = async (req,res) => {
  try {
      
      const person = await Person.findById(req.params.id)

      res.status(200).json(person)
  }catch(err){
      res.status(500).json(err)
  }
}

const getPersonAll = async (req,res) => {  
      try {
          const users = await Person.find().limit(10)
          res.status(200).json(users)
      } catch (err) {
          res.status(500).json(err)
      }
  }


const updatePerson = async (req,res) => {
  if(req.person.id ===req.params.id){
      try {
          const updatedPerson = await Person.findByIdAndUpdate(req.params.id,{
              $set: req.body
          },{new: true})
          res.status(200).json(updatedPerson)
      } catch (err) {
          res.status(500).json(err)
      }
  }
  else{
      res.status(403).json("you can not update")
  }
}

const deletePerson = async (req,res) => {
  if (req.person.id === req.params.id) {
      try {
          await Person.findByIdAndDelete(req.params.id)
          res.status(200).json("user has been deleted...")
      } catch (err) {
          res.status(500).json(err)
      }
  } else {
      res.status(403).json("you did not delete person!!")
  }
}

module.exports = {
    getPerson,
    getPersonAll,
    updatePerson,
    deletePerson
}