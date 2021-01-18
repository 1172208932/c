Function.prototype.bind = function(){
    let _this = this;
    var arg = arguments[0]
    return
}


Function.prototype.bind = function(context){
    var self = this;
    return function(){
      self.apply(context);
    }
  }