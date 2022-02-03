const Person = require("../models/Person")

const addPerson = async (req,res) => {
  const newPerson = new Person({
      name: req.body.name,
      surname: req.body.surname,
      wealth: req.body.wealth
  })
  console.log(newPerson);
  try{
    const person = await newPerson.save()
    res.status(201).json(person)
}catch(err){
    res.status(500).json(err)
}
}

module.exports = {
    addPerson,
}