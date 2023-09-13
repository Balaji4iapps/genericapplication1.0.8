define([], () => {
  'use strict';

  class FlowModule {
  }
  
  return FlowModule;
});

var AppModule = function AppModule() {};

//

AppModule.prototype.isFormValid = function(form) {

var tracker = document.getElementById(form);

if (tracker.valid === "valid") {

  return true;

} else {

tracker.showMessages();

tracker.focusOn("@firstInvalidShown");

return false;

}

};