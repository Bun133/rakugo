var https = require('https');
var train = require('./train');
exports.Token = 'hyxk-mGbDOLqWwwJlnFUcwlk-ps3flHDI_IWJE9d0XA'
exports.EndPoint='https://api-tokyochallenge.odpt.org'
//DO NOT USE
exports.Japanese = [
  {
    //Operator
    id:"odpt:Operator"
  }
]

exports.get = function (link,func){
  var datas=[]
  const req = https.request(encodeURI(exports.EndPoint + link),(res)=>{
      res.on('data',(chunk)=>{
        datas.push(chunk);
      })
      res.on('end',()=>{
          var concated='';
          for (var s in datas){
            concated+=datas[s];
          }
          func(JSON.parse(concated));
      })
  })

  req.on('error',(e)=>{
    console.error(`problem with request: ${e.message}`);
    return null;
  })

  req.end();
}

exports.getAllOperator = function(func){
  exports.get(`/api/v4/odpt:Operator?acl:consumerKey=${exports.Token}`,(json)=>{func(json)});
}

exports.getTrain = function(func){
  exports.get(`/api/v4/odpt:Train?acl:consumerKey=${exports.Token}`,(json)=>{func(new train(json))})
}

exports.getInfoMation = function(func){
  exports.get(`/api/v4/odpt:TrainInformation?acl:consumerKey=${exports.Token}`,(json)=>{func(json)})
}

exports.getTimeTable = function (func,id){
  exports.get(`/api/v4/odpt:TrainTimetable?acl:consumerKey=${exports.Token}:@id?${id}`,(json)=>{func(json)})
}

exports.getTimeTable = function (func){
  exports.get(`/api/v4/odpt:TrainTimetable?acl:consumerKey=${exports.Token}`,(json)=>{func(json)})
}
