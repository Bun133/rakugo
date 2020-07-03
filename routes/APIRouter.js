var express = require("express");
var router = express.Router();
var querystring = require("querystring");
const odpt_api = require('../src/api/odpt');
const Router_link = "http:localhost:3000/api/odpt"
router.get("/Operators", function(req, res, next){
  odpt_api.getAllOperator((json)=>{res.json(json);})
});

router.get("/Train",function(req,res,next){
  odpt_api.getTrain((train)=>{
    res.json(train.json)
  })
})

router.get("/Info",function(req,res,next){
  odpt_api.getInfoMation((json)=>{
    res.json(json);
  })
})

router.get("/TimeTable",function(req,res,next){
  odpt_api.getTimeTable((json)=>{
    res.json(json);
    console.log("id null");
  })
})

router.get("/TimeTable/:trainNum",function(req,res,next){
  odpt_api.getTimeTable((json)=>{
    res.json(json);
    // console.log("params:"+req.params);
    console.log("id is not null:"+req.params["trainNum"]);
  },req.params["trainNum"])
})

router.get("/TrainType",function(req,res,next){
  odpt_api.getAllTrainType((json)=>{
    res.json(json)
  })
})
module.exports=router;
