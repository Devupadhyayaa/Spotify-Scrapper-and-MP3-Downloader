const express = require('express')
const main = require('./main.js')
const path = require('path')
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

var un,p;
async function authenticate(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    un=username;
    p=password;
    next();
}
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});
app.post('/',authenticate, (req, res) => {
    res.render('home');
});
app.post('/api/user',async (req,res)=>{
    const val = await main(un,p);
    res.json(val);
})
app.post('/api/songs',async(req,res)=>{
    const url = req.body.url;
    const send_url = `https://youtube-mp3-downloader2.p.rapidapi.com/ytmp3/ytmp3/custom/?url=${url}&quality=128`;
    const resp = await fetch(send_url, {
        method :"GET",
        headers: {
            'X-RapidAPI-Key': process.env.api_key,
            'X-RapidAPI-Host': process.env.api_host
        }
    })
    const data = await resp.json();
    res.json(data);
})
app.listen(port,()=>{
    console.log(`sun raha hun is ${port} port kp `)
})
