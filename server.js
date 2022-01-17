const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const router = express.Router();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const fs = require('fs')
const users = JSON.parse(fs.readFileSync('users.json','utf8'));

const app = express();

app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(express.static(__dirname));

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');



// Session middleware
const timePeriod = 24*60*60000;
app.use(sessions({
    secret: "mysecretkey",
    saveUninitialized: true,
    cookie: { maxAge: timePeriod},
    resave: false
}));

var session;

// Routes
app.get('/', (req,res) => {
    res.redirect('/users/login');
})

app.get('/users',(req,res)=> {
    res.json(users);
})

app.get('/users/register', (req,res) => {
    res.sendFile(path.join(__dirname+'/views/register.html'));
})

app.post('/users/registerUser',(req, res) => {
    const user = {name: req.body.name, emailId: req.body.emailId, phoneNo: req.body.phNumber, age: req.body.age, Address: req.body.address, password: req.body.password}
    const checkuser = users.find( ({ emailId }) => emailId === req.body.emailId);
    if(checkuser){
        res.send(`Email ID already in use. <br /> <a href=\'/users/register'>Retry registration</a>`)
    }
    else{
        users.push(user)
        fs.writeFileSync('users.json', JSON.stringify(users));
        console.log(users)
        res.redirect('/users/login');
    } 
})
app.get('/users/login',(req, res) => {
    res.sendFile(path.join(__dirname+'/views/login.html'));
})
app.post('/users/dashboard', (req, res) => {
    const user = users.find( ({ emailId }) => emailId === req.body.emailId);
    if(user == null){
        return res.status(400).send(`Invalid Email ID or Password <a href=\'/users/login'>Retry login</a>`)
    }
    if(user.password == req.body.password) {
        // res.status(200).send("Login success")
        session = req.session;
        session.userid = req.body.emailId;
        console.log(req.session)
        // res.send(`Welcome Name ${user.name} Email ID ${user.emailId} Phone no. ${user.phoneNo} Age ${user.age} Address ${user.address} <a href=\'/logout'>Logout</a>`);
        res.render('index',{username: user.name, emailId: user.emailId, phoneno: user.phoneNo, age: user.age, address: user.Address});
    }
    else{
        res.send(`Invalid Email ID or Password <a href=\'/user/login'>Retry login</a>`);
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/users/login');
});

app.listen(5000);