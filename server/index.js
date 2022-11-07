
const path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); //JSON형태로 변환
var autoIncrement = require("mongoose-auto-increment");
var app = express();
var db = mongoose.connection;

/**
 * MongoDB 연결
 */
mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb://localhost:27017/noote')
    .then(() => console.log('Successfully connected to mongodb'))
    .catch(e => console.error(e));
autoIncrement.initialize(db)

function formattedDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var options = {year: undefined, month: undefined, day: undefined, hour: "2-digit", minute: "2-digit" };
    var time = date.toLocaleTimeString("en-US",options);

    return year + '년 ' + month + '월 ' + day + '일 ' + time;
};

/**
 * 스키마 설정
 */
var Schema = mongoose.Schema;
var MemoSchema = new Schema({
    body      : String,
    date      : {type: String, default:formattedDate},
});

MemoSchema.plugin(autoIncrement.plugin, 'Memo');
var Memo = mongoose.model('Memo', MemoSchema);


/**
 * API 작성
 */

app.use(bodyParser.urlencoded({ extended: false }))

/**
 * 메모 보여주기
 */
app.post('/view', function(req,res){
    Memo.find(function(err, memos){
        if(err) {return res.status(500).send({error: 'database failure'});}
        res.json(memos);
    })
});

/**
 * 메모 저장
 */
app.post('/', (req, res) => {
    var newMemo = new Memo();
    newMemo.body = req.body.body;
    newMemo.save((err) => {
      if(err) console.log(err);
      res.redirect('/');
    });
});

/**
 * 메모 수정
 */
app.post('/:id/update', (req, res) => {
    Memo.findById(req.params.id, (err, doc) => {
        doc.body = req.body.body;
        doc.date = formattedDate();
        doc.save((err, doc) => {
            if (err) console.log(err);
            res.redirect('/');
        });
    });
});

/**
 * 메모 삭제
 */
app.post('/:id/delete', (req, res) => {
    Memo.remove({'_id': req.params.id}, (err, output) => {
        if(err) return res.status(500).json({ error: "database failure" });
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

/**
 * 서버 On
 */
app.listen(4000, function () {
  console.log('Server on Port 4000');
});
