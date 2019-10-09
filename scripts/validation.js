//Nathaniel Richards
//Assignmnet #4 Final Coffee Run
//Due 10/8/19
(function (window) {
  "use strict";
  var App = window.App || {};

  var Validation = {
    isCompanyEmail: function(email) {
      return /.+@bignerdranch\.com$/.test(email);
    }
  };

  App.Validation = Validation;
  window.App = App;
})(window);
