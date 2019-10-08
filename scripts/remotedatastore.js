(function(window){
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) { //Vonstructor
    if(!url){
      throw new Error("No remote URL Supplied");
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function (key,val) {
    $.post(this.serverUrl, val,function(response){
      console.log(response);
    });
  };

  RemoteDataStore.prototype.getAll = function (cb) { //get all orders
    $.get(this.serverUrl, function(response){
      console.log(response);
      cb(response); //callback
    });
  };

  RemoteDataStore.prototype.get = function(key,cb) { //get all orders based on key
    $.get(this.serverUrl + "/" + key, function(response){
      console.log(response);
      cb(response); //callback
    });
  };

  RemoteDataStore.prototype.remove = function (key) {
    $.ajax(this.serverUrl + "/" + key, {
      type: "DELETE"
    });
  };


  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

}) (window) ;
