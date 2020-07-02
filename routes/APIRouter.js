var express = require("express");
var router = express.Router();
const odpt_api = require('../src/api/odpt');
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
  })
})
module.exports=router;
