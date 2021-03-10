var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
const bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var getSmsRouter = require('./routes/getSms');
var loginRouter = require('./routes/login');
// var registerRouter = require('./routes/register');
var registerRouter = require('./routes/register');
var getdoctorlistRouter = require('./routes/getdoctorlist');
var getsavedoctorlistRouter = require('./routes/savedoctorlist');
var getdeletedoctorlistRouter = require('./routes/deletedoctorlist');
var getscheduledateheaderRouter = require('./routes/getscheduledateheader');
var getdocschedulelistRouter = require('./routes/getdocschedulelist')
var getdepartlistRouter = require('./routes/getdepartlist');
var getprojectlistRouter = require('./routes/getprojectlist');
var getallprojectlistRouter = require('./routes/getallprojectlist');
var getscheduledoctorRouter = require('./routes/getscheduledoctor');
var savescheduledoctorRouter = require('./routes/savescheduledoctor');
var getsaveeditscheduleRouter = require('./routes/saveeditschedule');
var getsavedepartlistRouter = require('./routes/savedepartlist');
var getsaveprojectlistRouter = require('./routes/saveprojectlist');
var getregisterinformationlistRouter = require('./routes/getregisterinformationlist');
var getupdateregisterinformationlistRouter = require('./routes/updateregisterinformationlist');
var getpatientlistRouter = require('./routes/getpatientlist');
var savepatientlistRouter = require('./routes/savepatientlist');
var updatepatientlistRouter = require('./routes/updatepatientlist');
var updatedepartlistRouter = require('./routes/updatedepartlist');
var deletedepartlistRouter = require('./routes/deletedepartlist');
var updateprojectlistRouter = require('./routes/updateprojectlist');
var deleteprojectlistRouter = require('./routes/deleteprojectlist');
var updatedoctorlistRouter = require('./routes/updatedoctorlist');
// const bodyParser = require('body-parser');

//配置解析表单post请求体插件(需要在app.use之前)


var app = express();

//可以通过req.session来访问和设置Session成员
//添加Session数据：req.session.foo = 'bar'
//访问Session数据：req.session.foo
app.use(session({
    //可以增加安全性
    secret:'keyboard cat',
    resave:false,
    //无论是否使用Session,都默认分配一个
    saveUninitialized:true
}))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/getSms', getSmsRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/getdoctorlist',getdoctorlistRouter);
app.use('/savedoctorlist',getsavedoctorlistRouter);
app.use('/deletedoctorlist',getdeletedoctorlistRouter);
app.use('/getscheduledateheader',getscheduledateheaderRouter);
app.use('/getdocschedulelist',getdocschedulelistRouter);
app.use('/getdepartlist',getdepartlistRouter);
app.use('/getprojectlist',getprojectlistRouter);
app.use('/getscheduledoctor',getscheduledoctorRouter);
app.use('/savescheduledoctor',savescheduledoctorRouter);
app.use('/saveeditschedule',getsaveeditscheduleRouter);
app.use('/savedepartlist',getsavedepartlistRouter);
app.use('/getallprojectlist',getallprojectlistRouter);
app.use('/saveprojectlist',getsaveprojectlistRouter);
app.use('/getregisterinformationlist',getregisterinformationlistRouter);
app.use('/updateregisterinformation',getupdateregisterinformationlistRouter );
app.use('/getpatientlist',getpatientlistRouter);
app.use('/savepatientlist',savepatientlistRouter);
app.use('/updatepatientlist',updatepatientlistRouter);
app.use('/updatedepartlist',updatedepartlistRouter);
app.use('/deletedepartlist',deletedepartlistRouter);
app.use('/updateprojectlist',updateprojectlistRouter);
app.use('/deleteprojectlist',deleteprojectlistRouter);
app.use('/updatedoctorlist',updatedoctorlistRouter);
module.exports = app;
