var express = require("express");
var app = express();
var api_router = require("../routes/APIRouter");
const cookie_parser = require('cookie-parser');

//Server Start
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

var photoList = [
    {
        id: "001",
        name: "photo001.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo001.jpg"
    },{
        id: "002",
        name: "photo002.jpg",
        type: "jpg",
        dataUrl: "http://localhost:3000/data/photo002.jpg"
    }
]

// View EngineにEJSを指定。
app.set('view engine', 'ejs');
app.use(cookie_parser())
app.use('/api/odpt',api_router);

// "/"へのGETリクエストでindex.ejsを表示する。拡張子（.ejs）は省略されていることに注意。
app.get("/", function(req, res, next){
    res.render("index", {});
});

app.get("/cookie",function(req,res,next){
  if (req.cookies!=null){ res.json(req.cookies);next();}
  res.cookie('name1','value1',{
    maxAge:1000 * 60 *3,
    httpOnly:true,
    secure:'secure-key'
  })

  res.json({})
})
