define([], () => {
  'use strict';

  class PageModule {
    
    
    
    isFormValid(form) {

var tracker = document.getElementById(form);

if (tracker.valid === "valid") {

  return true;

} else {

tracker.showMessages();

tracker.focusOn("@firstInvalidShown");

return false;

}

};
  }
  
  return PageModule;
});
