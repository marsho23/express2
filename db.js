const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/cats",{})
.then(()=>console.log('yay'))
.catch(()=>console.log('boo'))

const catSchema = new mongoose.Schema({
    name:{type:String,required:true}, //required is basically not null
    colour:String,
    evil: Boolean
})

const catModel = mongoose.model("cat",catSchema);
module.exports={catModel};
