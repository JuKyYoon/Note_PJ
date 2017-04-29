//서버 index
//JKY
//1234
const path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); //JSON형태로 변환
var autoIncrement = require("mongoose-auto-increment");
var app = express();
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});


mongoose.Promise = global.Promise;
//DB
mongoose.connect('mongodb://JKY:1234@ds159200.mlab.com:59200/noote');
var connection = mongoose.connection;

autoIncrement.initialize(connection)

var Schema = mongoose.Schema;
// var ObjectId = mongoose.Schema.Types.ObjectId;
var MemoSchema = new Schema({
    body      : String,
    date      : {type: Date, default:Date.now}
});

MemoSchema.plugin(autoIncrement.plugin, 'Memo');
var Memo = mongoose.model('Memo', MemoSchema);

app.post('/view', function(req,res){
    Memo.find(function(err, memos){
        if(err) {return res.status(500).send({error: 'database failure'});}
        res.json(memos);
    })
});

app.use(bodyParser.urlencoded({ extended: false }))



app.post('/', (req, res) => {
    var newMemo = new Memo();
    newMemo.body = req.body.body;
    newMemo.save((err) => {
      if(err) console.log(err);
      res.redirect('/');
    });
});





//기본 설정 파일
app.use('/', express.static(path.resolve(__dirname, '../build')));

//static경로를 예외로 처리하고 리액트 index.html을 보여준다.
app.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(4000, function () {
  console.log('AAAAAAAAAAAAAAAAAAAA');
});
