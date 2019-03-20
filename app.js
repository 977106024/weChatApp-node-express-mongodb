//引入模块
const express = require('express')
const app = express()
const routes = require('./routes/index.js')


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });

//post解析请求头解析
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//引入mongoose相关模块
require('./models/add.js')

//捕获请求
app.use('/',routes)

// 监听端口
app.listen(2333)

//连接
// mongoose.connect('mongodb://localhost/test', {
//     useNewUrlParser: true
// });

// //监听成功失败
// let db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // we're connected!
//     console.log('链接成功')
// });


// //Schema
// let kittySchema = new mongoose.Schema({
//     name: String
// });

// kittySchema.methods.speak = function () {
//     let greeting = this.name ?
//         "Meow name is " + this.name :
//         "I don't have a name";
//     console.log(greeting);
// }

// let Kitten = mongoose.model('Kitten', kittySchema);
// let silence = new Kitten({name: 'Silence'});

// // silence.save(function (err, silence) {
// //     if (err) return console.error(err);
// //     silence.speak();
// //   });

// Kitten.find({ name: /^S/ }, function(err,value){
//     console.log(value)
// });
