const mongoDB = "mongodb://vlad:78a78a98a@ds062178.mlab.com:62178/vlad"
const mydb = require ("../database/mydb")
const mongoose = require("mongoose");

const router = app => {
  app.get('/',(request, response) =>{
    response.send({
      message: 'Welcome to the Node.js Express REST API!'
    })
  })

  app.post('/new', (request, response) => {
    console.log(request.body)

    mongoose.connect(mongoDB,function (err) {
        if(err) {
          console.log(err);
          return response.status(500).send("Can not connect to data base");
        }
        //let DataBase = request.body;
          let DataBase = new mydb({
          _id: new mongoose.Types.ObjectId(),
          firstName: request.body.firstName,
          lastName: request.body.lastName,
          age: parseInt(request.body.age),
          profession: request.body.profession,
          skills: request.body.skills,
          salary: parseInt(request.body.salary)
        });
        console.log("SAVED");
        DataBase.save(function (err) {
          if (err) return response.status(500);
        })
    })


   response.status(200).send('OK')
});

app.put('/data/:id', (request, response) =>{
  mongoose.connect(mongoDB, function (err) {
    if (err) throw err;
    console.log("PUT");
    console.log(request.body);
    mydb.findByIdAndUpdate(request.params.id, {$set:request.body} ,function (err, user) {
      if (err) return response.status(500);
      response.status(200).send('OK')
  })
  })
})
app.delete('/del/:id', (request, response) => {
  mongoose.connect(mongoDB, function (err) {
    if (err) throw err;
    mydb.findByIdAndRemove(request.params.id, (err, res)=>{
      if(err) return response.status(500);
      response.status(200).send('OK')
    })
  })
})
}
module.exports = router;
