const path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); //JSON형태로 변환
var autoIncrement = require("mongoose-auto-increment");
var noteapp = express();
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

MemoSchema.plugin(autoIncrement.plugin, '   Memo');
var Memo = mongoose.model('Memo', MemoSchema);

noteapp.post('/view', function(req,res){
    Memo.find(function(err, memos){
        if(err) {return res.status(500).send({error: 'database failure'});}
        res.json(memos);
    })
});

// app.get('/account', function (req, res) {
//   res.send('qqqqqqqqq');
// });



noteapp.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
    // Memo.find((err, docs) => {
        // res.render('main',{memos: docs});
    // });
// });

// app.get('/view', (req, res) => {
    // res.render('view');
// });

noteapp.post('/view2', (req, res) => {
    var newMemo = new Memo();
    // newMemo.title = req.body.title;
    // console.log(req.body.title);
    console.log(req.body.body);
    newMemo.body = req.body.body;
    newMemo.save((err) => {
      if(err) console.log(err);
      res.redirect('/');
    });
});
//
// app.get('/:id', (req, res) => {
    // Memo.findOne({'_id': req.params.id}, (err, doc) => {
        //  res.render('view', {memo: doc});
    // });
// });
//
// app.get('/:id/delete', (req, res) => {
//     Memo.remove({'_id': req.params.id}, (err, output) => {
//         res.redirect('/');
//     });
// });
//
// app.get('/:id/edit', (req, res) => {
//     Memo.findOne({'_id': req.params.id}, (err, doc) => {
//         // res.render('edit', {memo: doc});
//     });
// });
//
// app.post('/:id/edit', (req, res) => {
//     Memo.findById(req.params.id, (err, doc) => {
//         doc.title = req.body.title;
//         doc.body = req.body.body;
//         doc.date = Date.now();
//         doc.save((err, doc) => {
//             if (err) console.log(err);
//             res.redirect('/'+req.params.id);
//         });
//     });
// });
//


//기본 설정 파일
noteapp.use('/', express.static(path.resolve(__dirname, './build')));

//static경로를 예외로 처리하고 리액트 index.html을 보여준다.
noteapp.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, './build/index.html'));
});

noteapp.listen(4000, function () {
  console.log('AAAAAAAAAAAAAAAAAAAA');
});


const {app, BrowserWindow} = require('electron')
// const path = require('path')
const url = require('url')

// 윈도우 객체를 전역에 유지합니다. 만약 이렇게 하지 않으면
// 자바스크립트 GC가 일어날 때 창이 멋대로 닫혀버립니다.
let win

function createWindow () {
  // 새로운 브라우저 창을 생성합니다.
  win = new BrowserWindow({width: 1200, height: 400})

  // 그리고 현재 디렉터리의 index.html을 로드합니다.
  win.loadURL(url.format({
    pathname: 'localhost:4000',
    protocol: 'http:',
    slashes: true
  }))


  // 개발자 도구를 엽니다.
  // win.webContents.openDevTools()

  // 창이 닫히면 호출됩니다.
  win.on('closed', () => {
    // 윈도우 객체의 참조를 삭제합니다. 보통 멀티 윈도우 지원을 위해
    // 윈도우 객체를 배열에 저장하는 경우가 있는데 이 경우
    // 해당하는 모든 윈도우 객체의 참조를 삭제해 주어야 합니다.
    win = null
  })
}

// 이 메서드는 Electron의 초기화가 끝나면 실행되며 브라우저
// 윈도우를 생성할 수 있습니다. 몇몇 API는 이 이벤트 이후에만
// 사용할 수 있습니다.
app.on('ready', createWindow)

// 모든 창이 닫히면 애플리케이션 종료.
app.on('window-all-closed', () => {
  // macOS의 대부분의 애플리케이션은 유저가 Cmd + Q 커맨드로 확실하게
  // 종료하기 전까지 메뉴바에 남아 계속 실행됩니다.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // macOS에선 보통 독 아이콘이 클릭되고 나서도
  // 열린 윈도우가 없으면, 새로운 윈도우를 다시 만듭니다.
  if (win === null) {
    createWindow()
  }
})