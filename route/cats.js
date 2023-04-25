const router = require("express").Router();

const { append } = require("express/lib/response");
const {catModel} = require("../db");

router.post("/create",async (req,res,next)=>{
  try{
    const created = await catModel.create(req.body);
    res.status(201).json(created);}
  catch(err){
    return next({
      status:500, msg:'oops'
    });
  }
})

router.get("/getAll",async(req,res,next)=>{
  try{
    const allCats = await catModel.find();
    res.status(200).json(allCats);}
  catch(err){
    return next({
      status:500, msg:'oops'
    });
  }
})

router.patch("/update/:id",async(req,res,next)=>{
  try{
    const updatedCat = await catModel.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json(updatedCat);
  }
  catch{
    return next({
      status:500, msg:'oops'
    });
  }
})

router.delete("/delete/:id",async(req,res,next)=>{
  try{
    const deletedCat = await catModel.findByIdAndDelete(req.params.id, req.body);
    res.status(200).json(deletedCat);
  }
  catch{
    return next({
      status:500, msg:'oops'
    });
  }
})

// const cats = [];,

// router.get("/getAll", (req, res) => {
//   res.json(cats);
// });

// router.post("/create", (req, res) => {
//   const newCat = req.body;
//   cats.push(newCat);
//   res.status(201).json(cats[cats.length - 1]);
// });

// router.delete("/remove/:id", (req, res) => {
//   // Deconstructs request parameters to get id
//   const { id } = req.params;
//   // Delete 1 item from the array at index of the id
//   // Returns array of the deleted item
//   const removed = cats.splice(id, 1);
//   res.json(removed);
// });

// router.patch("/update/:id", (req, res) => {
//   const { id } = req.params;
//   if (id >= cats.length) {
//     return next({
//       msg: "ID out of bounds",
//       // `status` keyword calls Express' default error handler
//       // So it will throw 404 by default without using our own custom error handler
//       status: 404,
//     });
//   }
//   const { name } = req.query;
//   const catToUpdate = cats[id];
//   catToUpdate.name = name;
//   res.json(catToUpdate);
// });

module.exports = router;
