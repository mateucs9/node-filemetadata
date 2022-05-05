var express = require('express');
var cors = require('cors');
const path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
require('dotenv').config()

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

var upload = multer({dest:"uploads/"})
app.post('/api/fileanalyse', upload.single('upfile'), function(req, res, next){
  var upfile = req.file;
  if(typeof file == undefined) res.json({error: 'File not uploaded'});
  return res.json({
    name: upfile.originalname,
    type: upfile.mimetype,
    size: upfile.size
  })
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
