define([], () => {
  'use strict';

  class PageModule {
  }
  
PageModule.prototype.createImageBitmap = function(fileBlob) {
  return window.createImageBitmap(fileBlob);
};

  return PageModule;
});
