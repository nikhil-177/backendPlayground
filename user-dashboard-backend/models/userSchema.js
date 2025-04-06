import mongoose from "mongoose";
import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password"))  return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const comparePassword = async (enteredPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(enteredPassword, hashedPassword);
  return isMatch;
}



export const User = mongoose.model("User", userSchema);