//Nathaniel Richards
//Assignmnet #4 Final Coffee Run
//Due 10/8/19
(function(window){
  "use strict";
  var App = window.App || {};
  function DataStore() {
    this.data= {};
  }

  DataStore.prototype.add = function (key,val) {
    this.data[key]=val;
  };

  DataStore.prototype.get = function (key){
    return this.data[key];
  };

  DataStore.prototype.getAll = function () {
    return this.data;
  };

  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };
  App.DataStore = DataStore;
  window.App = App;
}) (window);
