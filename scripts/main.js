//Nathaniel Richards
//Assignmnet #3 Coffee Run
//Due 9/24/19
(function (window) {
  "use strict";
  var FORM_SELECTOR = "[data-coffee-order=\"form\"]";
  var CHECKLIST_SELECTOR = "[data-coffee-order=\"checklist\"]";
  var SERVER_URL = "http://localhost:2403/coffeeorders"; //new link for Deployd

  var App = window.App;
  var Truck = App.Truck;
  //var DataStore = App.DataStore; //Do not need since we have remote datastore
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var Validation = App.Validation;

  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  var remoteDS =  new RemoteDataStore(SERVER_URL);
  var myTruck = new Truck("ncc-1701", remoteDS);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) { //Submit Handler
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });
  formHandler.addInputHandler(Validation.isCompanyEmail);
})(window);
