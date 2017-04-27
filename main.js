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

MemoSchema.plugin(autoIncrement.plugin, '   Memo');
var Memo = mongoose.model('Memo', MemoSchema);

app.post('/view', function(req,res){
    Memo.find(function(err, memos){
        if(err) {return res.status(500).send({error: 'database failure'});}
        res.json(memos);
    })
});

// app.get('/account', function (req, res) {
//   res.send('qqqqqqqqq');
// });



app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/', (req, res) => {
    // Memo.find((err, docs) => {
        // res.render('main',{memos: docs});
    // });
// });

// app.get('/view', (req, res) => {
    // res.render('view');
// });

app.post('/view2', (req, res) => {
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
app.use('/', express.static(path.resolve(__dirname, '../build')));

//static경로를 예외로 처리하고 리액트 index.html을 보여준다.
app.get('*', (req, res, next) => {
    if(req.path.split('/')[1] === 'static') return next();
    res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.listen(4000, function () {
  console.log('AAAAAAAAAAAAAAAAAAAA');
});



const {napp, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: 'localhost:4000',
    protocol: 'http:',
    slashes: true
  }))

  // Open the DevTools.
  win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
napp.on('ready', createWindow)

// Quit when all windows are closed.
napp.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    napp.quit()
  }
})

napp.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})