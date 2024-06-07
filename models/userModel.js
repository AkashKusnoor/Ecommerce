import mongoose  from "mongoose";

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    role:{
        type:Number,
        default:0,
    },
    cart:{
        type:Array,
        default: []
    },
//    address:[{ type:mongoose.Schema.Types.ObjectId  , ref:"Address"}],
//    wishlist:[{ type:mongoose.Schema.Types.ObjectId, ref:"Product"}],
},
    {timestamps:true}
)

export default mongoose.model('Users',userSchema);