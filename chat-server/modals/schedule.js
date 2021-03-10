//设计医生排班信息表单模型
var mongoose = require('mongoose')
var Schema = mongoose.Schema
//连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var scheduleSchema = new Schema({
    docid:{
        type:Number,
        // required:true
    },
    name:{
        type:String,
        // required:true
    },
    doctordepart:{
        type:String,
        required:true
    },
    doctorproject:{
        type:String,
        required:true
    },

    // infos:{
    //     type:Array,
    // },
    // date:{
    //     type:Array,
    //     // required:true
    // },
    // week:{
    //     type:String,
    //     // required:true
    // },
    // details:{
    //     type:Array,
    // },
    // registrationFee:{
    //     type:Number
    // },
    // registrationNum:{
    //     type:Number
    // },
    dateone:{
        type:String,
        // required:true
    },
    weekone:{
        type:String,
        // required:true
    },
    registrationFeeone:{
        type:Number
    },
    registrationNumone:{
        type:Number
    },
    datetwo:{
        type:String,
    },
    weektwo:{
        type:String,
    },
    registrationFeetwo:{
        type:Number
    },
    registrationNumtwo:{
        type:Number
    },
    datethree:{
        type:String,
    },
    weekthree:{
        type:String,
    },
    registrationFeethree:{
        type:Number
    },
    registrationNumthree:{
        type:Number
    },
    datefour:{
        type:String,
    },
    weekfour:{
        type:String,
    },
    registrationFeefour:{
        type:Number
    },
    registrationNumfour:{
        type:Number
    },
    datefive:{
        type:String,
    },
    weekfive:{
        type:String,
    },
    registrationFeefive:{
        type:Number
    },
    registrationNumfive:{
        type:Number
    },
    datesix:{
        type:String,
    },
    weeksix:{
        type:String,
    },
    registrationFeesix:{
        type:Number
    },
    registrationNumsix:{
        type:Number
    },
    dateseven:{
        type:String,
    },
    weekseven:{
        type:String,
    },
    registrationFeeseven:{
        type:Number
    },
    registrationNumseven:{
        type:Number
    },
 
})
module.exports = mongoose.model('Schedule',scheduleSchema);