import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"]
  },
  email: {
    type: String,
    required: [true, "email is required "],
    unique: true,
    validate: [validator.isEmail, "please provide a valid email!"]
  },
  password: {
    type: String,
    required: [true, "password is required "],
    minLength:8
  },
  confirmpassword: {
    type: String,
    required: [true, "password is required "],
    validate:{
        validator:function(el){
            return el === this.password
        },
        message:"passwords are not matching"
    }
  },
});

userSchema.pre('save', async function(next){
  if(!this.isModified("password")) return next()

  this.password =await bcrypt.hash(this.password,12);

    this.confirmpassword = undefined;
next()
})

export default mongoose.model("USER", userSchema);
