import mongoose, { Schema } from "mongoose";
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    // slug:{
    //     type:String,
    //     require:true,
    // },
    description:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:0
    },
        category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require:true
    },
    productImage:{
        type:String
    },
    stok:{
        type:String,
        default:0
    },
    brand:{
        type:String,
        enum:["Apple","Samsung","Oppo","Vivo"]
    },
    sold:{
        type:Number,
        default:0,
        select:false,
    },       //  if you  want to hide it from user --> select:false
    quantity:{
        type:Number,
        require:true
    },
    images:{
        type:Array
    },
    ratings:[{
        star:Number,
        postedby:{ type:mongoose.Schema.Types.ObjectId, ref:'Users'}
    }],
    shipping:{
        type:Boolean,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true}
)

export default mongoose.model('products', productSchema);
