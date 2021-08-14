const express = require('express');
const bodyParser= require('body-parser');
const cors=require('cors');
const session=require('express-session');
const passport=require('passport');
const passport_mongoose=require('passport-local-mongoose');
const mongoose=require('mongoose');
const db = require("./config/keys").mongodb.mongoURI;
const signin=require('./controllers/signin');
const signup=require('./controllers/signup');
const Schema=require('./models/user');
const AudioSchema=require('./models/audiouser');
const symblToken=require('./controllers/tokenrequest');
const audioProcess=require('./controllers/audioprocess');
const audio=require('./controllers/audio');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret:"kuchbhi",
    resave:false,
    saveUninitialized:false
}));
mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));
Schema.plugin(passport_mongoose);
app.use(passport.initialize());
app.use(passport.session());

const User=mongoose.model("User",Schema);
const Audio=mongoose.model("AudioUser",AudioSchema);
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//Routes


app.get('/',(req,resp)=>{resp.send('working ')})
app.get('/symbl-token',(req,resp)=>{symblToken.generatetoken(req,resp)});
app.post('/api/signin',(req,resp)=>{signin.handlesignin(req,resp,User)})
app.post('/api/signup',(req,resp)=>{signup.handlesignup(req,resp,User)})
app.post('/api/process_audio',(req,resp)=>{audioProcess.processAudio(req,resp,Audio)});
app.get('/api/sentiment',(req,resp)=>{audio.audio(req,resp,req.body.cid)});

const port=process.env.PORT|| 3001;
app.listen(port,()=>{
    console.log(`app is runing on ${port}`)
})