define([], () => {
  'use strict';

  class PageModule {
    createImageBitmap (fileBlob) {
  return window.createImageBitmap(fileBlob);
};
  }
  


  return PageModule;
});
