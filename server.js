console.log('May Node be with you')
const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
var http = require('http').Server(app)
var io = require('socket.io')(http)
var db

app.set('view engine', 'ejs')
var path = require ('path');
app.use(express.static(path.join(__dirname + '.../views')));
console.log(__dirname);


MongoClient.connect('mongodb://admin:getrekt@ds117849.mlab.com:17849/ditto', (err, database) => {
    if (err) return console.log(err)
    db = database
    // app.listen(3000, () => {
    //     console.log('listening on 3000')
    // })
})

http.listen(3000, function(){
    console.log('listening on *:3000');
});

app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html')
    var cursor = db.collection('guesses').find()
    db.collection('guesses').find().toArray((err, result) => {
        if (err) return console.log(err)
        // renders index.ejs
        res.render('index.ejs', {guesses: result})
    })
})

app.get('/:RoomID', (req, res) => {
    console.log(req.params.RoomID)
    db.collection('guesses').find({id:req.params.RoomID}).toArray((err, doc) => {
        if (err) return console.log(err)
        res.render('rooms.ejs', {room: doc})
    })
})

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
    console.log('user disconnected');
    });
    socket.on('new guess', function(msg){
        console.log('message: ' + msg);
        io.emit('new guess', msg);
    });
});

app.post('/:RoomID', (req, res) => {
    db.collection('guesses').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
    })


    db.collection('guesses').find({id:req.params.RoomID}).toArray(function(err, results) {
        console.log(results)
        res.render('rooms.ejs', {room: results});
    })
})
