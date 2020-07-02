class train{
  constractor (json){
    console.log("Train constractor");
    this.json=json;
    this.Railway=json["odpt:railway"]
    this.TrainNumber=json["odpt:TrainNumber"]
    this.TrainBoundFor=json["odpt:toStation"]
    this.TrainOperator=json["odpt:operator"]
  }
}

module.exports=train;
