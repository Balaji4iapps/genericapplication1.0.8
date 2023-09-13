define(['ojs/ojpagingdataproviderview','ojs/ojarraydataprovider'],

function(PagingDataProviderView,ArrayDataProvider) {
  'use strict';
  class PageModule {
 pagingLine(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'product_id'
        }));
return data;
          };

          pagingLineNewone(array) {
      var data = new PagingDataProviderView(new ArrayDataProvider(
      array, {
        idAttribute: 'own_ref_id'
        }));
      return data;
         
         };
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