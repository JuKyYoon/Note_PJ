const path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); //JSON형태로 변환
var autoIncrement = require("mongoose-auto-increment");
var noteapp = express();
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
noteapp.use(bodyParser.urlencoded({ extended: false }))

/**
 * 메모 보여주기
 */
noteapp.post('/view', function(req,res){
    Memo.find(function(err, memos){
        if(err) {return res.status(500).send({error: 'database failure'});}
        res.json(memos);
    })
});

/**
 * 메모 저장
 */
noteapp.post('/', (req, res) => {
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
noteapp.post('/:id/update', (req, res) => {
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
noteapp.post('/:id/delete', (req, res) => {
    console.log('#######################');
    Memo.remove({'_id': req.params.id}, (err, output) => {
        if(err) return res.status(500).json({ error: "database failure" });
        res.redirect('/');
    });
});


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
