import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        required:true,
        type:String
    },
    password:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    }
});
/**
 * Check model exist if exist no need to create unless create
 */
export const User = mongoose.models.User ?? mongoose.model("User", userSchema);
